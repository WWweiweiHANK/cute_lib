import * as THREE from "three";
import {
  box,
  cylinder,
  material,
  woodMaterial,
  plane,
  textTexture,
  canvasTexture,
  rng,
  seeded,
} from "./assets.js";
import { shelfCategories } from './night-shelving.js';

export function buildEnvironment(scene, { returnMode = false } = {}) {
  const sortingShelves = new Map(), dimLights = [];
  const walnut = woodMaterial("#483326"),
    deskWood = woodMaterial("#62462e"),
    darkWood = material("#262521"),
    trim = material("#292b25"),
    brass = material("#8e7750", { metalness: 0.45, roughness: 0.48 });
  const plaster = material("#675f48"),
    teal = material("#293e3b"),
    outside = material("#152737");
  // Architectural shell, with the window deliberately kept behind the reader.
  box(scene, [11, 0.16, 10], [0, -0.08, -0.9], woodMaterial("#4a4031"));
  for (let x = -5; x < 5; x += 0.54)
    box(scene, [0.008, 0.006, 9.5], [x, 0.008, -0.9], material("#262c28"));
  box(scene, [11, 0.18, 10], [0, 3.65, -0.9], material("#292a22"));
  box(scene, [0.2, 3.8, 9.5], [-5.25, 1.8, -0.9], plaster);
  box(scene, [0.2, 3.8, 9.5], [5.25, 1.8, -0.9], plaster);
  box(scene, [10.5, 3.8, .2], [0, 1.8, 3.95], plaster);
  for (const x of [-4.25, 4.25]) {
    box(scene, [1.95, 3.8, 0.24], [x, 1.8, -4.4], plaster);
    box(scene, [1.96, 0.94, 0.26], [x, 0.48, -4.22], teal);
  }
  box(scene, [7, 0.14, 0.23], [0, 0.07, -4.45], teal);
  box(scene, [7, 0.33, 0.23], [0, 3.49, -4.45], walnut);
  const glass = new THREE.MeshPhysicalMaterial({
    color: "#9baab0",
    transparent: true,
    opacity: 0.055,
    roughness: 0.3,
    metalness: 0.05,
    depthWrite: false,
  });
  box(scene, [7, 3.25, 0.025], [0, 1.77, -4.48], glass).castShadow = false;
  for (const x of [-3.5, -2.32, -1.16, 0, 1.16, 2.32, 3.5])
    box(scene, [0.085, 3.02, 0.17], [x, 1.96, -4.31], trim);
  for (const y of [0.15, 1.14, 3.39])
    box(scene, [7.15, 0.075, 0.16], [0, y, -4.3], trim);
  // A real pivoting glass entrance in the right-hand window bay.
  const door = new THREE.Group();
  door.position.set(2.35, 0.52, -4.21);
  scene.add(door);
  for (const x of [0, 1.08])
    box(door, [0.065, 2.81, 0.1], [x, 1.405, 0], walnut);
  for (const y of [0, 2.81])
    box(door, [1.15, 0.065, 0.1], [0.54, y, 0], walnut);
  box(door, [0.04, 0.43, 0.04], [0.9, 1.18, 0.095], brass);
  const doorSign = plane(
    door,
    0.36,
    0.2,
    [0.54, 1.8, 0.062],
    textTexture(["OPEN LATE"], {
      w: 512,
      h: 256,
      bg: "#283f37",
      ink: "#c7b68a",
      size: 42,
    }),
  );
  for (const x of [-4.6, -2.45, 2.45, 4.6])
    box(scene, [0.11, 0.18, 8.6], [x, 3.49, -0.6], walnut);
  for (const z of [-3.7, -0.5, 2])
    box(scene, [10, 0.14, 0.14], [0, 3.48, z], walnut);

  function shelf(x, z, width = 1.65, height = 2.62, category) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    scene.add(group);
    sortingShelves.set(category.id, group);
    // A small, fixed shelf lamp lights the spines and labels without lifting the whole room.
    box(group, [.6, .035, .12], [0, 2.4, .35], trim);
    box(group, [.48, .008, .09], [0, 2.378, .35], material('#c9b488', {emissive: '#d8b882', emissiveIntensity: .65}));
    const shelfLight = new THREE.PointLight('#e5cca6', 1.8, 3.5, 2);
    shelfLight.position.set(0, 2.23, 1.02);
    group.add(shelfLight);
    dimLights.push([shelfLight, shelfLight.intensity]);
    box(
      group,
      [width, height, 0.1],
      [0, height / 2, -0.18],
      material("#302920"),
    );
    for (const s of [-1, 1])
      box(
        group,
        [0.09, height, 0.49],
        [s * (width / 2), height / 2, 0.02],
        walnut,
      );
    for (const y of [0.4, 1.24, 2.08])
      box(group, [width + 0.12, 0.085, 0.53], [0, y, 0.03], walnut);
    box(group, [width + 0.18, 0.12, 0.57], [0, 2.13, 0.03], walnut);
    plane(
      group,
      0.74,
      0.19,
      [0, 2.25, 0.308],
      textTexture(category.label, {
        w: 512,
        h: 192,
        bg: "#302d25",
        ink: "#b6a079",
        size: 40,
      }),
    );
  }
  shelfCategories.forEach(c => shelf(c.position[0], c.position[2], 1.65, 2.16, c));
  // Empty reading corner: secondary warmth, not another focal point.
  box(scene, [1.42, 0.085, 0.78], [-2.55, 0.76, -2.45], walnut);
  for (const x of [-3.1, -2])
    for (const z of [-2.7, -2.2])
      box(scene, [0.055, 0.73, 0.055], [x, 0.37, z], trim);
  for (const x of [-3.35, -1.82]) {
    box(scene, [0.39, 0.065, 0.4], [x, 0.43, -2.15], walnut);
    box(scene, [0.38, 0.38, 0.055], [x, 0.7, -2.32], walnut);
    for (const dx of [-0.15, 0.15])
      for (const dz of [-0.14, 0.14])
        box(scene, [0.038, 0.4, 0.038], [x + dx, 0.21, -2.15 + dz], trim);
  }
  function lamp(x, y, z, size = 1) {
    cylinder(scene, 0.16 * size, 0.19 * size, 0.045 * size, [x, y, z], brass);
    cylinder(
      scene,
      0.018 * size,
      0.021 * size,
      0.47 * size,
      [x, y + 0.245 * size, z],
      brass,
    );
    const shade = cylinder(
      scene,
      0.115 * size,
      0.27 * size,
      0.18 * size,
      [x, y + 0.56 * size, z],
      material("#2b5142", { roughness: 0.48 }),
      12,
    );
    cylinder(
      scene,
      0.2 * size,
      0.2 * size,
      0.012,
      [x, y + 0.475 * size, z],
      material("#ffe3a2", { emissive: "#ffd27a", emissiveIntensity: 2.2 }),
      12,
    );
    const light = new THREE.PointLight("#ffd098", 2.5 * size, 2.5 * size, 2);
    light.position.set(x, y + 0.42 * size, z);
    scene.add(light);
    if (z < 0) dimLights.push([light, light.intensity]);
    return shade;
  }
  lamp(-2.55, 0.82, -2.48, 0.75);
  function plant(x, z, scale = 1) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    scene.add(g);
    cylinder(g, 0.2, 0.14, 0.32, [0, 0.18, 0], material("#564735"));
    cylinder(g, 0.013, 0.018, 0.68, [0, 0.63, 0], material("#384631"), 6);
    for (let i = 0; i < 6; i++) {
      const leaf = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.27),
        material(i % 2 ? "#394e34" : "#2d4738"),
      );
      const a = i * 2.4;
      leaf.scale.set(0.42, 1, 0.18);
      leaf.position.set(
        Math.cos(a) * 0.18,
        0.48 + i * 0.046,
        Math.sin(a) * 0.15,
      );
      leaf.rotation.set(Math.sin(a) * 0.7, 0, Math.cos(a) * 0.65);
      g.add(leaf);
    }
  }
  plant(-3.45, -3.55, 1.16);
  plant(3.48, -3.5, 0.95);
  // Warm workstation: all decision destinations remain within the framed counter.
  box(scene, [5.45, 0.16, 1.82], [0, 0.97, 1.31], deskWood);
  box(scene, [5.25, 0.83, 0.12], [0, 0.47, 0.44], walnut);
  box(scene, [5.5, 0.043, 0.045], [0, 1.025, 2.2], brass);
  for (const x of [-2.68, 2.68])
    box(scene, [0.08, 0.87, 1.77], [x, 0.49, 1.3], walnut);
  lamp(-1.73, 1.063, 0.36, 0.88);
  const mat = box(
    scene,
    [1.39, 0.012, 0.79],
    [0.0, 1.057, 1.19],
    material("#293d38"),
  );
  // Recessed rejection tray on the left.
  const reject = new THREE.Group();
  reject.position.set(-1.14, 1.055, 0.87);
  scene.add(reject);
  box(reject, [0.69, 0.044, 0.65], [0, 0.022, 0], walnut);
  for (const x of [-0.335, 0.335])
    box(reject, [0.035, 0.13, 0.65], [x, 0.073, 0], walnut);
  box(reject, [0.69, 0.13, 0.035], [0, 0.073, -0.305], walnut);
  box(reject, [0.69, 0.09, 0.035], [0, 0.052, 0.305], walnut);
  const trayLabel = plane(
    reject,
    0.35,
    0.063,
    [0, 0.055, 0.324],
    textTexture([returnMode ? "归 还" : "待 处 理"], {
      w: 512,
      h: 128,
      bg: "#b9ad89",
      ink: "#3b4438",
      size: 48,
    }),
  );
  // Retro barcode station, with a genuine book landing pad.
  const scanner = new THREE.Group();
  scanner.position.set(1.22, 1.056, 0.84);
  scene.add(scanner);
  const machineMat = material("#242e2c", { roughness: 0.55 });
  box(scanner, [0.64, 0.075, 0.69], [0, 0.037, 0], machineMat);
  box(
    scanner,
    [0.44, 0.025, 0.45],
    [0, 0.086, 0.065],
    material("#364b3f", { roughness: 0.35 }),
  );
  box(scanner, [0.13, 0.34, 0.12], [0.17, 0.21, -0.22], machineMat);
  box(scanner, [0.57, 0.25, 0.22], [0, 0.47, -0.2], machineMat, [-0.12, 0, 0]);
  const screen = plane(
    scanner,
    0.44,
    0.155,
    [0, 0.474, -0.077],
    textTexture(["TERMINAL 03", "READY"], {
      w: 768,
      h: 256,
      bg: "#263d2c",
      ink: "#9dcf89",
      size: 45,
    }),
    [-0.12, 0, 0],
    true,
  );
  const led = box(
    scanner,
    [0.035, 0.013, 0.008],
    [0.24, 0.398, -0.075],
    material("#bbd78b", { emissive: "#a5dd6b", emissiveIntensity: 1.4 }),
  );
  const scanLine = box(
    scanner,
    [0.43, 0.003, 0.008],
    [0, 0.101, 0.08],
    material("#a9db81", { emissive: "#80c36b", emissiveIntensity: 1 }),
  );
  scanLine.visible = false;
  // Familiar desk clutter, grouped at the edge so it never competes with the two items.
  const ledger = new THREE.Group();
  ledger.position.set(-0.08, 1.075, 1.83);
  ledger.rotation.set(-Math.PI / 2, 0, -0.035);
  scene.add(ledger);
  box(ledger, [0.57, 0.34, 0.023], [0, 0, 0], walnut);
  plane(
    ledger,
    0.51,
    0.295,
    [0, 0, 0.013],
    canvasTexture(768, 448, (ctx, w, h) => {
      ctx.fillStyle = "#b5aa87";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#545b49";
      ctx.font = "29px Georgia";
      ctx.fillText("NIGHT SHIFT LOG", 45, 63);
      ctx.font = "18px Microsoft YaHei";
      ctx.fillText("夜间借阅登记", 45, 104);
      ctx.strokeStyle = "#6c766244";
      for (let y = 153; y < h - 20; y += 42) {
        ctx.beginPath();
        ctx.moveTo(45, y);
        ctx.lineTo(w - 45, y);
        ctx.stroke();
      }
      for (const x of [198, 440, 588]) {
        ctx.beginPath();
        ctx.moveTo(x, 127);
        ctx.lineTo(x, h - 27);
        ctx.stroke();
      }
    }),
  );
  const pen = cylinder(
    scene,
    0.008,
    0.008,
    0.27,
    [0.34, 1.079, 1.82],
    material("#222f2c"),
    6,
  );
  pen.rotation.z = Math.PI / 2;
  pen.rotation.y = 0.19;
  const mug = cylinder(
    scene,
    0.08,
    0.066,
    0.16,
    [1.88, 1.14, 1.36],
    material("#bcac88"),
    12,
  );
  cylinder(
    scene,
    0.068,
    0.068,
    0.002,
    [1.88, 1.223, 1.36],
    material("#312820"),
    12,
  );
  const handle = new THREE.Mesh(
    new THREE.TorusGeometry(0.055, 0.013, 5, 12),
    mug.material,
  );
  handle.position.set(1.965, 1.16, 1.36);
  scene.add(handle);
  for (let i = 0; i < 3; i++) {
    const stack = box(
      scene,
      [0.52, 0.072, 0.33],
      [-1.95, 1.09 + i * 0.078, 1.59],
      material(["#48514a", "#65473c", "#3b4b50"][i]),
    );
    stack.rotation.y = i * 0.09;
    plane(
      scene,
      0.42,
      0.047,
      [-1.94, 1.095 + i * 0.078, 1.762],
      textTexture([["QUIET PLACES", "ASTRONOMY", "NIGHT ARCHIVES"][i]], {
        w: 512,
        h: 100,
        bg: ["#48514a", "#65473c", "#3b4b50"][i],
        ink: "#b6a986",
        size: 38,
      }),
    );
  }

  // Exterior is cold, with scattered amber windows and broken wet reflections.
  box(
    scene,
    [30, 0.1, 24],
    [0, -0.11, -12],
    material("#142536", { roughness: 0.3, metalness: 0.12 }),
  );
  box(
    scene,
    [8, 5, 1.8],
    [-0.7, 2.3, -13],
    material("#243c51", { emissive: "#1b344e", emissiveIntensity: 0.4 }),
  );
  box(scene, [8.4, 0.22, 2], [-0.7, 4.85, -13], material("#18232c"));
  box(scene, [3.7, 6.8, 2], [7, 3.2, -16], outside);
  box(scene, [3.8, 4.6, 2], [-8, 2.2, -14], outside);
  for (let x = -3.9; x < 3; x += 1.15)
    for (const y of [0.9, 2.25, 3.65]) {
      const lit = rng() > 0.55;
      const glow = material(
        lit ? "#b59859" : "#213945",
        lit
          ? { emissive: "#b27e35", emissiveIntensity: 0.6 }
          : { emissive: "#1f394c", emissiveIntensity: 0.3 },
      );
      box(scene, [0.64, 0.84, 0.04], [x, y, -12.075], glow);
      box(scene, [0.035, 0.84, 0.05], [x, y, -12.03], trim);
      box(scene, [0.65, 0.035, 0.05], [x, y, -12.03], trim);
    }
  const reflectionTexture = canvasTexture(128, 512, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "#e6be7600");
    grad.addColorStop(0.35, "#e6be7688");
    grad.addColorStop(0.8, "#bba77955");
    grad.addColorStop(1, "#bfa77b00");
    ctx.fillStyle = grad;
    const r = seeded(51);
    for (let y = 0; y < h; y += 4 + r() * 10) {
      const wide = 12 + r() * 85;
      ctx.globalAlpha = 0.15 + r() * 0.8;
      ctx.fillRect((w - wide) / 2 + (r() - 0.5) * 20, y, wide, 2 + r() * 3);
    }
  });
  for (const [x, z] of [
    [-2.7, -7],
    [2.8, -8],
    [6, -11],
    [-6, -10],
  ]) {
    cylinder(scene, 0.045, 0.07, 2.78, [x, 1.39, z], trim, 7);
    box(scene, [0.3, 0.09, 0.31], [x, 2.82, z], trim);
    box(
      scene,
      [0.22, 0.18, 0.22],
      [x, 2.7, z],
      material("#f5d49b", { emissive: "#ffcf82", emissiveIntensity: 2.6 }),
    );
    const light = new THREE.PointLight("#ffc77f", 6, 4.5, 2);
    light.position.set(x, 2.6, z);
    scene.add(light);
    const refl = new THREE.Mesh(
      new THREE.PlaneGeometry(1.0, 5),
      new THREE.MeshBasicMaterial({
        map: reflectionTexture,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    refl.rotation.x = -Math.PI / 2;
    refl.position.set(x, -0.045, z + 1.5);
    scene.add(refl);
  }
  // Sparse branches against the night sky.
  for (const [x, z] of [
    [-3.9, -7.5],
    [4.4, -8.8],
    [-1.7, -10.5],
  ]) {
    cylinder(scene, 0.04, 0.12, 3.4, [x, 1.7, z], material("#17292d"), 5);
    for (let i = 0; i < 7; i++) {
      const a = i * 2.7,
        branch = cylinder(
          scene,
          0.009,
          0.035,
          0.85,
          [x + Math.cos(a) * 0.23, 1.6 + i * 0.21, z + Math.sin(a) * 0.2],
          material("#1a2c2f"),
          5,
        );
      branch.rotation.z = Math.cos(a) * 0.8;
      branch.rotation.x = Math.sin(a) * 0.6;
    }
  }
  // Near and far rain stay strictly outside the window wall.
  const rainCount = 500,
    positions = new Float32Array(rainCount * 6),
    speeds = new Float32Array(rainCount);
  for (let i = 0; i < rainCount; i++) {
    const k = i * 6;
    positions[k] = (rng() - 0.5) * 20;
    positions[k + 1] = rng() * 7;
    positions[k + 2] = -4.7 - rng() * 13;
    positions[k + 3] = positions[k] + 0.025;
    positions[k + 4] = positions[k + 1] + 0.13 + rng() * 0.12;
    positions[k + 5] = positions[k + 2];
    speeds[i] = 2.2 + rng() * 2.6;
  }
  const rainGeo = new THREE.BufferGeometry();
  rainGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const rain = new THREE.LineSegments(
    rainGeo,
    new THREE.LineBasicMaterial({
      color: "#85a9bb",
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    }),
  );
  scene.add(rain);
  const glassStreaks = canvasTexture(512, 512, (ctx, w, h) => {
    const r = seeded(9);
    ctx.strokeStyle = "#c6d5dd";
    for (let i = 0; i < 110; i++) {
      ctx.globalAlpha = 0.035 + r() * 0.12;
      ctx.lineWidth = 0.4 + r() * 0.8;
      const x = r() * w,
        y = r() * h;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 2, y + 12 + r() * 58);
      ctx.stroke();
    }
  });
  plane(scene, 6.85, 2.8, [0, 1.95, -4.18], glassStreaks, null, true);
  // Sources correspond to visible fixtures; only the work light casts dynamic shadows.
  scene.add(new THREE.HemisphereLight("#8b9caa", "#3b3020", 0.26));
  const key = new THREE.SpotLight("#ffd3a0", 11, 8, Math.PI / 3, 0.75, 1.5);
  key.position.set(-1.25, 3.28, 1.4);
  key.target.position.set(0, 1.05, 0.15);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.bias = -0.0003;
  key.shadow.normalBias = 0.025;
  scene.add(key, key.target);
  const faceFill = new THREE.PointLight("#ffe0b4", 1.9, 4, 2);
  faceFill.position.set(0.9, 2.3, 1.2);
  scene.add(faceFill);
  const rim = new THREE.PointLight("#93b7d5", 4.5, 5, 2);
  rim.position.set(0, 2.6, -2.9);
  scene.add(rim);
  for (const [x, z] of [
    [-1.2, 0.9],
    [1.8, -2.6],
    [-2.8, -3.1],
  ]) {
    box(scene, [0.87, 0.07, 0.37], [x, 3.42, z], trim);
    box(
      scene,
      [0.73, 0.016, 0.26],
      [x, 3.376, z],
      material("#ead6a2", { emissive: "#ffd39a", emissiveIntensity: 1.3 }),
    );
    if (z < 0) {
      const l = new THREE.PointLight("#f5bd78", 2.2, 4, 2);
      l.position.set(x, 3.22, z);
      scene.add(l);
      dimLights.push([l, l.intensity]);
    }
  }
  return {
    door,
    scanner,
    reject,
    screen,
    scanLine,
    led,
    mat,
    sortingShelves,
    closed: false,
    setReadingProgress(progress) {
      dimLights.forEach(([light, intensity]) => light.intensity = intensity * (1 - .05 * progress));
    },
    setClosed(amount = 1) {
      if (!this.closed) {
        doorSign.material.map.dispose();
        doorSign.material.map = textTexture(['CLOSED'], {w: 512, h: 256, bg: '#283f37', ink: '#c7b68a', size: 48});
        this.closed = true;
      }
      dimLights.forEach(([light, intensity]) => light.intensity = intensity * (1 - .2 * amount));
    },
    setReturnMode(enabled) {
      const previous = trayLabel.material.map;
      trayLabel.material.map = textTexture([enabled ? "归 还" : "待 处 理"], {
        w: 512,
        h: 128,
        bg: "#b9ad89",
        ink: "#3b4438",
        size: 48,
      });
      previous.dispose();
    },
    update(dt, time) {
      for (let i = 0; i < rainCount; i++) {
        const k = i * 6,
          fall = speeds[i] * dt;
        positions[k + 1] -= fall;
        positions[k + 4] -= fall;
        if (positions[k + 4] < 0) {
          positions[k + 1] += 7;
          positions[k + 4] += 7;
        }
      }
      rainGeo.attributes.position.needsUpdate = true;
      if (scanLine.visible)
        scanLine.position.z = 0.07 + Math.sin(time * 13) * 0.19;
    },
    setScanner(done) {
      const previous = screen.material.map;
      screen.material.map = textTexture(
        [done ? "借 阅 完 成" : "READY / 待机"],
        {
          w: 768,
          h: 256,
          bg: done ? "#4d613e" : "#263d2c",
          ink: done ? "#eff4bf" : "#9dcf89",
          size: 45,
        },
      );
      previous.dispose();
    },
  };
}
