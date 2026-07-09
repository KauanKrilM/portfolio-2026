import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Points, Mesh } from "three";
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color } from "three";

function seededRandom(seed: number) {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

function StarCloud() {
  const pointsRef = useRef<Points>(null);
  const geometry = useMemo(() => {
    const positions: number[] = [];

    for (let index = 0; index < 950; index += 1) {
      positions.push(
        (seededRandom(index * 3 + 1) - 0.5) * 18,
        (seededRandom(index * 3 + 2) - 0.5) * 10,
        (seededRandom(index * 3 + 3) - 0.5) * 10,
      );
    }

    const bufferGeometry = new BufferGeometry();
    bufferGeometry.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(positions), 3),
    );

    return bufferGeometry;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.018;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.025;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.018}
        color={new Color("#f8fafc")}
        transparent
        opacity={0.72}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function OrbitingParticles() {
  const particlesRef = useRef<Points>(null);
  const geometry = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * Math.PI * 2;
      const radius = 2.1;
      positions.push(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.3,
        Math.sin(angle) * radius * 0.5
      );
    }
    const bufferGeometry = new BufferGeometry();
    bufferGeometry.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(positions), 3)
    );
    return bufferGeometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.35;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
      particlesRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.12) * 0.08;
    }
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.032}
        color={new Color("#d4af37")}
        transparent
        opacity={0.7}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function CommandPlanet({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const planetRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y = state.clock.elapsedTime * 0.12 + mouseX * 0.3;
      planetRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.08 + mouseY * 0.15;
      planetRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05 + mouseY * 0.2;
      planetRef.current.scale.set(
        1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02,
        1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02,
        1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.05 + mouseX * 0.2;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.03 + mouseY * 0.1;
    }

    if (glowRef.current) {
      const material = glowRef.current.material as any;
      material.opacity = 0.35 + Math.sin(state.clock.elapsedTime * 0.8) * 0.12 + mouseX * 0.05;
    }
  });

  return (
    <group position={[3.35, 0.02, -1.65]} rotation={[0.2, -0.35, 0]} scale={0.86}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.18, 64, 64]} />
        <meshStandardMaterial
          color="#15152d"
          emissive="#312e81"
          emissiveIntensity={0.32}
          roughness={0.62}
          metalness={0.18}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[1.18, 0.1, 0.2]}>
        <torusGeometry args={[1.78, 0.01, 12, 160]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.48} />
      </mesh>

      <mesh ref={glowRef}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial
          color="#d4af37"
          transparent
          opacity={0.35}
          blending={AdditiveBlending}
        />
      </mesh>

      <mesh position={[-1.72, 0.82, 0.05]}>
        <sphereGeometry args={[0.08, 24, 24]} />
        <meshBasicMaterial color="#d4af37" />
      </mesh>

      <OrbitingParticles />
    </group>
  );
}

export default function SpaceScene({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 5.8], fov: 46 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.42} />
        <directionalLight position={[4, 3, 4]} intensity={1.8} color="#f8fafc" />
        <pointLight position={[2.8, -0.4, 2]} intensity={3} color="#d4af37" />
        <StarCloud />
        <CommandPlanet mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
