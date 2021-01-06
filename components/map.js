import { Canvas } from "react-three-fiber";
import { useRouter } from "next/router";
import { Html } from "drei";

const Box = () => {
    const router = useRouter();
    return (
      <>
        <Html>
          <p
            onClick={() => {
              router.push("/about");
            }}
          >
            hi
          </p>
        </Html>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"#eeeeee"} />
        </mesh>
      </>
    );
  };

export default function Map() {
    return (
        <>
          <Canvas
            style={{
              height: "100vh"
            }}
            camera={{
              position: [0, 0, -3]
            }}
          >
            <Box />
          </Canvas>
        </>
      );
} 