import { shaderMaterial, OrbitControls } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const demoStyle = {
    background: 'var(--code-bg-color)',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'var(--code-border-color)',
    borderRadius: '0.5rem',
    boxShadow: '0.1rem 0.1rem 0.2rem #0000005b'
}

const BlobMaterial = shaderMaterial(
    { u_time: null },
    `
        uniform float u_time;
        varying float v_displace;
        
        float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
        vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
        vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

        float noise(vec3 p){
            vec3 a = floor(p);
            vec3 d = p - a;
            d = d * d * (3.0 - 2.0 * d);

            vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
            vec4 k1 = perm(b.xyxy);
            vec4 k2 = perm(k1.xyxy + b.zzww);

            vec4 c = k2 + a.zzzz;
            vec4 k3 = perm(c);
            vec4 k4 = perm(c + 1.0);

            vec4 o1 = fract(k3 * (1.0 / 41.0));
            vec4 o2 = fract(k4 * (1.0 / 41.0));

            vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
            vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

            return o4.y * d.y + o4.x * (1.0 - d.y);
        }

        void main() {

            vec3 pos = position;

            v_displace = noise((1.6 * pos) + u_time) + noise((1.8* pos) - 1.33 * u_time);
            pos += normal * v_displace;

            vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;

            gl_Position = projectedPosition;
        }
    `,
    `
        uniform float u_time;
        varying float v_displace;

        void main() {
            vec3 col1 = vec3(1.0, 0.784 * (0.1 * sin(u_time)), 0.306);
            vec3 col2 = vec3(0.95, 0.396, 0.118);

            vec3 fcol = mix( col1, col2, v_displace );

            gl_FragColor = vec4(fcol, 1.0);
        }
    `
)
extend({ BlobMaterial })


function Blob() {

    const material = useRef()
    useFrame((state, delta) => {
        material.current.u_time = state.clock.elapsedTime
    })
    
    return(
        <mesh>
            <icosahedronGeometry args={[1, 12]} />
            <blobMaterial ref={material} />
        </mesh>
    )
}

function DemoMDX() {
    return(
        <div style={{ marginBottom: '2rem', height: '40svh'}}>
            <Canvas style={demoStyle}>
                <Blob />
                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default DemoMDX