import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh, MeshBasicMaterial, Points } from "three";
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  Group,
} from "three";

function seededRandom(seed: number) {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

function StarCloud() {
  const pointsRef = useRef<Points>(null);
  const geometry = useMemo(() => {
    const positions: number[] = [];

    for (let index = 0; index < 1400; index += 1) {
      positions.push(
        (seededRandom(index * 3 + 1) - 0.5) * 20,
        (seededRandom(index * 3 + 2) - 0.5) * 11,
        (seededRandom(index * 3 + 3) - 0.5) * 12,
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
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.014;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.16) * 0.025;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.016}
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

    for (let i = 0; i < 90; i += 1) {
      const angle = (i / 90) * Math.PI * 2;
      const radius = 2.05 + seededRandom(i) * 0.42;
      positions.push(
        Math.cos(angle) * radius,
        Math.sin(angle) * 0.24,
        Math.sin(angle) * radius * 0.46,
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
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.32;
    particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.12;
    particlesRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.034}
        color={new Color("#d4af37")}
        transparent
        opacity={0.72}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function AuroraBand() {
  const auroraRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!auroraRef.current) return;
    auroraRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    auroraRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    const material = auroraRef.current.material as MeshBasicMaterial;
    material.opacity = 0.16 + Math.sin(state.clock.elapsedTime * 1.2) * 0.06;
  });

  return (
    <mesh ref={auroraRef} rotation={[1.48, 0.08, -0.22]}>
      <torusGeometry args={[1.1, 0.025, 12, 180]} />
      <meshBasicMaterial
        color="#d4af37"
        transparent
        opacity={0.18}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function SatelliteSystem() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.24;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-1.95, 0.75, 0.05]}>
        <sphereGeometry args={[0.075, 24, 24]} />
        <meshBasicMaterial color="#d4af37" />
      </mesh>
      <mesh position={[1.78, -0.58, 0.08]}>
        <sphereGeometry args={[0.045, 18, 18]} />
        <meshBasicMaterial color="#f8fafc" transparent opacity={0.72} />
      </mesh>
      <mesh position={[0.25, 1.8, -0.04]}>
        <boxGeometry args={[0.08, 0.035, 0.035]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

function CommandPlanet({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<Group>(null);
  const planetRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);
  const outerRingRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);
  const atmosphereRef = useRef<Mesh>(null);

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.position.x = 4.4 + mouseX * 0.22;
      groupRef.current.position.y = 0.02 - mouseY * 0.2;
      groupRef.current.rotation.y = -0.35 + mouseX * 0.16;
      groupRef.current.rotation.x = 0.18 - mouseY * 0.12;
    }

    if (planetRef.current) {
      planetRef.current.rotation.y = elapsed * 0.11 + mouseX * 0.22;
      planetRef.current.rotation.x = Math.sin(elapsed * 0.22) * 0.04 + mouseY * 0.1;
      const pulse = 1 + Math.sin(elapsed * 0.48) * 0.015;
      planetRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = elapsed * 0.055 + mouseX * 0.18;
      ringRef.current.rotation.x = 1.15 + Math.sin(elapsed * 0.2) * 0.035 + mouseY * 0.08;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -elapsed * 0.035;
      outerRingRef.current.rotation.x = 1.24 + Math.cos(elapsed * 0.18) * 0.03;
    }

    if (glowRef.current) {
      const material = glowRef.current.material as MeshBasicMaterial;
      material.opacity = 0.28 + Math.sin(elapsed * 0.8) * 0.08 + Math.abs(mouseX) * 0.04;
    }

    if (atmosphereRef.current) {
      const material = atmosphereRef.current.material as MeshBasicMaterial;
      material.opacity = 0.12 + Math.sin(elapsed * 0.9) * 0.045;
    }
  });

  return (
    <group ref={groupRef} position={[4.4, 0.05, -2]} rotation={[0.18, -0.35, 0]} scale={0.74}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.18, 96, 96]} />
        <meshStandardMaterial
          color="#11152d"
          emissive="#312e81"
          emissiveIntensity={0.36}
          roughness={0.55}
          metalness={0.18}
        />
      </mesh>

      <mesh rotation={[0.1, -0.25, 0.35]}>
        <torusGeometry args={[0.96, 0.006, 8, 160]} />
        <meshBasicMaterial color="#f8fafc" transparent opacity={0.16} />
      </mesh>

      <mesh ref={ringRef} rotation={[1.15, 0.1, 0.2]}>
        <torusGeometry args={[1.78, 0.012, 12, 180]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.54} />
      </mesh>

      <mesh ref={outerRingRef} rotation={[1.24, -0.05, -0.2]}>
        <torusGeometry args={[2.04, 0.006, 8, 220]} />
        <meshBasicMaterial color="#5b21b6" transparent opacity={0.5} />
      </mesh>

      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.27, 48, 48]} />
        <meshBasicMaterial
          color="#f8fafc"
          transparent
          opacity={0.12}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={glowRef}>
        <sphereGeometry args={[1.46, 48, 48]} />
        <meshBasicMaterial
          color="#d4af37"
          transparent
          opacity={0.28}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <AuroraBand />
      <SatelliteSystem />
      <OrbitingParticles />
    </group>
  );
}

export default function SpaceScene({
  mouseX = 0,
  mouseY = 0,
}: {
  mouseX?: number;
  mouseY?: number;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 5.9], fov: 46 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.42} />
        <directionalLight position={[4, 3, 4]} intensity={1.9} color="#f8fafc" />
        <pointLight position={[2.8, -0.4, 2]} intensity={3.2} color="#d4af37" />
        <pointLight position={[-2.8, 1.2, 1.4]} intensity={1.6} color="#5b21b6" />
        <StarCloud />
        <CommandPlanet mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
