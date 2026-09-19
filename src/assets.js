import * as THREE from "three";

export const profiles = {
  A: {
    id: "NF-0147",
    name: "林  川",
    hairColor: "#35291f",
    hairStyle: "swept",
    skinTone: "#c69262",
    glasses: false,
    shirtColor: "#293e38",
    scarfColor: "#854739",
    faceShape: "tapered",
  },
  B: {
    id: "NF-0286",
    name: "周  禾",
    hairColor: "#a57543",
    hairStyle: "short",
    skinTone: "#ceaa80",
    glasses: true,
    shirtColor: "#414b59",
    scarfColor: "#8d754b",
    faceShape: "round",
  },
};
export function seeded(seed = 21) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) | 0;
    return (seed >>> 0) / 4294967296;
  };
}
export const rng = seeded();
export function material(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.94,
    metalness: 0,
    flatShading: true,
    ...options,
  });
}
export function box(parent, size, pos, mat, rotation = null) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), mat);
  mesh.position.set(...pos);
  if (rotation) mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
export function cylinder(parent, top, bottom, height, pos, mat, sides = 8) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(top, bottom, height, sides),
    mat,
  );
  mesh.position.set(...pos);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
export function canvasTexture(width, height, draw) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
export function plane(
  parent,
  width,
  height,
  position,
  texture,
  rotation = null,
  basic = false,
) {
  const mat = basic
    ? new THREE.MeshBasicMaterial({ map: texture, transparent: true })
    : material("#ffffff", { map: texture });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
  mesh.position.set(...position);
  if (rotation) mesh.rotation.set(...rotation);
  parent.add(mesh);
  return mesh;
}
export function textTexture(
  lines,
  {
    bg = "#263830",
    ink = "#c6b58b",
    w = 512,
    h = 512,
    size = 42,
    serif = true,
  } = {},
) {
  return canvasTexture(w, h, (ctx) => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = ink + "55";
    ctx.lineWidth = 2;
    ctx.strokeRect(18, 18, w - 36, h - 36);
    ctx.textAlign = "center";
    ctx.fillStyle = ink;
    ctx.font = `${size}px ${serif ? "Georgia" : "Microsoft YaHei"}`;
    const gap = size * 1.45;
    lines.forEach((line, i) =>
      ctx.fillText(
        line,
        w / 2,
        h / 2 + (i - (lines.length - 1) / 2) * gap + size * 0.35,
      ),
    );
  });
}
export function woodMaterial(color = "#705034") {
  const map = canvasTexture(512, 512, (ctx) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 512, 512);
    const random = seeded(71);
    for (let i = 0; i < 90; i++) {
      const y = random() * 512;
      ctx.strokeStyle =
        random() > 0.45
          ? `rgba(20,9,3,${random() * 0.07})`
          : `rgba(233,193,112,${random() * 0.035})`;
      ctx.lineWidth = 1 + random() * 2;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(180, y - random() * 7, 290, y + random() * 9, 512, y);
      ctx.stroke();
    }
    for (let y = 0; y < 512; y += 128) {
      ctx.fillStyle = "#1e170b55";
      ctx.fillRect(0, y, 512, 2);
    }
  });
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(2, 1);
  return material("#ffffff", { map, roughness: 0.94 });
}

export function makePerson(profile) {
  const root = new THREE.Group();
  const coat = material(profile.shirtColor),
    skin = material(profile.skinTone),
    hair = material(profile.hairColor),
    scarf = material(profile.scarfColor);
  const dark = material("#171d1c"),
    eyeMat = material("#181710");
  const body = new THREE.Group();
  root.add(body);
  const torso = cylinder(body, 0.265, 0.34, 0.73, [0, 1.13, 0], coat, 7);
  torso.scale.z = 0.58;
  box(body, [0.045, 0.7, 0.018], [0, 1.14, 0.192], dark);
  for (const y of [0.88, 1.08, 1.29])
    cylinder(
      body,
      0.016,
      0.016,
      0.02,
      [0.065, y, 0.21],
      material("#a59d79"),
      6,
    ).rotation.x = Math.PI / 2;
  const legs = [];
  for (const side of [-1, 1]) {
    const leg = box(
      root,
      [0.19, 0.72, 0.22],
      [side * 0.14, 0.39, 0],
      material("#272d2b"),
    );
    legs.push(leg);
    box(root, [0.21, 0.1, 0.34], [side * 0.14, 0.06, 0.055], dark);
  }
  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.28, 1.43, 0);
    body.add(arm);
    const sleeve = cylinder(
      arm,
      0.115,
      0.08,
      0.51,
      [side * 0.047, -0.24, 0.008],
      coat,
      6,
    );
    sleeve.rotation.z = side * 0.18;
    const hand = new THREE.Mesh(new THREE.IcosahedronGeometry(0.095, 0), skin);
    hand.scale.set(0.72, 1, 0.78);
    hand.position.set(side * 0.09, -0.51, 0.04);
    arm.add(hand);
    arms.push(arm);
  }
  const head = new THREE.Group();
  head.position.y = 1.79;
  body.add(head);
  cylinder(body, 0.095, 0.1, 0.18, [0, 1.49, 0], skin);
  const face = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, profile.faceShape === "round" ? 8 : 7, 4),
    skin,
  );
  face.scale.set(0.89, 1.02, 0.83);
  face.rotation.y = Math.PI / 14;
  head.add(face);
  for (const side of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.OctahedronGeometry(0.063), skin);
    ear.position.set(side * 0.258, -0.025, -0.002);
    ear.scale.set(0.5, 1, 0.66);
    head.add(ear);
  }
  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(0.325, 7, 3, 0, Math.PI * 2, 0, Math.PI * 0.46),
    hair,
  );
  hairCap.position.set(0, 0.07, -0.03);
  hairCap.rotation.z = -0.06;
  head.add(hairCap);
  const bangs =
    profile.hairStyle === "swept"
      ? [
          [-0.2, 0.13, 0.17, 0.13, 0.29, -0.22],
          [-0.05, 0.18, 0.22, 0.16, 0.33, -0.3],
          [0.13, 0.2, 0.2, 0.15, 0.23, 0.2],
          [0.235, 0.05, 0.09, 0.07, 0.34, 0.12],
        ]
      : [
          [-0.19, 0.16, 0.17, 0.1, 0.16, -0.1],
          [-0.06, 0.2, 0.23, 0.13, 0.18, 0],
          [0.1, 0.18, 0.23, 0.12, 0.15, 0.05],
          [0.23, 0.06, 0.11, 0.055, 0.25, 0],
        ];
  for (const [x, y, z, w, h, r] of bangs) {
    const shape = new THREE.Shape();
    shape.moveTo(-w * 0.62, h * 0.5);
    shape.lineTo(w * 0.58, h * 0.35);
    shape.lineTo(w * 0.25, -h * 0.5);
    shape.lineTo(-w * 0.35, -h * 0.35);
    shape.closePath();
    const lock = new THREE.Mesh(
      new THREE.ExtrudeGeometry(shape, { depth: 0.07, bevelEnabled: false }),
      hair,
    );
    lock.position.set(x, y + 0.025, z - 0.025);
    lock.rotation.z = r;
    head.add(lock);
  }
  const eyes = [];
  for (const side of [-1, 1]) {
    const eye = box(
      head,
      [0.036, 0.063, 0.013],
      [side * 0.093, -0.008, 0.244],
      eyeMat,
    );
    eyes.push(eye);
    box(head, [0.061, 0.012, 0.013], [side * 0.093, 0.055, 0.244], hair, [
      0,
      0,
      side * 0.09,
    ]);
    if (profile.glasses) {
      const frame = new THREE.Mesh(
        new THREE.TorusGeometry(0.068, 0.009, 4, 10),
        dark,
      );
      frame.position.set(side * 0.095, -0.001, 0.258);
      head.add(frame);
    }
  }
  if (profile.glasses) box(head, [0.065, 0.012, 0.014], [0, 0.008, 0.26], dark);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.055, 3), skin);
  nose.position.set(0, -0.06, 0.25);
  nose.rotation.x = Math.PI / 2;
  head.add(nose);
  box(head, [0.045, 0.008, 0.008], [0, -0.138, 0.218], material("#825a42"));
  const collar = cylinder(
    body,
    0.235,
    0.245,
    0.19,
    [0, 1.485, 0.017],
    scarf,
    7,
  );
  collar.scale.z = 0.76;
  collar.rotation.z = 0.07;
  box(body, [0.16, 0.53, 0.058], [0.16, 1.2, 0.23], scarf, [0, 0, -0.085]);
  box(
    body,
    [0.17, 0.12, 0.06],
    [0.183, 0.94, 0.23],
    material(profile.scarfColor),
    [0, 0, -0.085],
  );
  for (let i = 0; i < 3; i++)
    box(body, [0.026, 0.035, 0.026], [0.125 + i * 0.046, 0.875, 0.24], scarf);
  box(
    body,
    [0.056, 0.65, 0.037],
    [-0.217, 1.15, 0.165],
    material("#615037"),
    [0, 0, -0.12],
  );
  root.userData = { body, head, arms, eyes, legs, profile };
  return root;
}

function portrait(ctx, p, x, y, w, h) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(w / 160, h / 190);
  ctx.fillStyle = "#a3ac9c";
  ctx.fillRect(0, 0, 160, 190);
  ctx.fillStyle = "#829485";
  ctx.fillRect(0, 135, 160, 55);
  ctx.fillStyle = p.shirtColor;
  ctx.beginPath();
  ctx.moveTo(20, 190);
  ctx.lineTo(28, 144);
  ctx.lineTo(56, 130);
  ctx.lineTo(104, 130);
  ctx.lineTo(135, 146);
  ctx.lineTo(145, 190);
  ctx.fill();
  ctx.fillStyle = p.skinTone;
  ctx.beginPath();
  ctx.moveTo(40, 49);
  ctx.lineTo(66, 30);
  ctx.lineTo(106, 36);
  ctx.lineTo(122, 68);
  ctx.lineTo(117, 110);
  ctx.lineTo(94, 133);
  ctx.lineTo(66, 129);
  ctx.lineTo(44, 105);
  ctx.fill();
  ctx.fillStyle = p.hairColor;
  ctx.beginPath();
  ctx.moveTo(35, 86);
  ctx.lineTo(30, 45);
  ctx.lineTo(48, 17);
  ctx.lineTo(92, 10);
  ctx.lineTo(128, 32);
  ctx.lineTo(129, 77);
  ctx.lineTo(114, 64);
  if (p.hairStyle === "swept") {
    ctx.lineTo(101, 42);
    ctx.lineTo(90, 77);
    ctx.lineTo(72, 72);
    ctx.lineTo(73, 50);
    ctx.lineTo(51, 83);
  } else {
    ctx.lineTo(107, 48);
    ctx.lineTo(99, 64);
    ctx.lineTo(66, 53);
    ctx.lineTo(49, 66);
  }
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#242720";
  ctx.fillRect(61, 81, 7, 14);
  ctx.fillRect(95, 81, 7, 14);
  if (p.glasses) {
    ctx.strokeStyle = "#26322f";
    ctx.lineWidth = 3;
    for (const cx of [65, 100]) {
      ctx.beginPath();
      ctx.arc(cx, 87, 14, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(79, 86);
    ctx.lineTo(86, 86);
    ctx.stroke();
  }
  ctx.fillStyle = "#885f47";
  ctx.fillRect(78, 112, 10, 2);
  ctx.fillStyle = p.scarfColor;
  ctx.beginPath();
  ctx.moveTo(45, 125);
  ctx.lineTo(115, 128);
  ctx.lineTo(121, 148);
  ctx.lineTo(44, 153);
  ctx.fill();
  ctx.fillRect(94, 144, 19, 46);
  ctx.restore();
}
export function makeCard(profile) {
  const card = new THREE.Group();
  box(card, [0.4, 0.252, 0.007], [0, 0, 0], material("#d9d3b8"));
  const texture = canvasTexture(1024, 640, (ctx, w, h) => {
    ctx.fillStyle = "#ded8bc";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#304e45";
    ctx.fillRect(0, 0, w, 125);
    ctx.fillStyle = "#e6dab0";
    ctx.font = "27px Georgia";
    ctx.fillText("NIGHTFALL PUBLIC LIBRARY", 42, 56);
    ctx.font = "22px Microsoft YaHei";
    ctx.fillText("夜阑图书馆 · 借阅证", 43, 97);
    portrait(ctx, profile, 47, 169, 260, 315);
    ctx.fillStyle = "#384b42";
    ctx.font = "48px Microsoft YaHei";
    ctx.fillText(profile.name, 362, 243);
    ctx.font = "22px monospace";
    ctx.fillText("READER / " + profile.id, 362, 300);
    ctx.strokeStyle = "#879079";
    ctx.beginPath();
    ctx.moveTo(362, 334);
    ctx.lineTo(963, 334);
    ctx.stroke();
    ctx.font = "23px Microsoft YaHei";
    ctx.fillText("有效至 2027.09.30", 362, 408);
    const r = seeded(93);
    for (let x = 365; x < 934; x += 7) {
      const width = r() > 0.5 ? 4 : 2;
      ctx.fillStyle = "#394039";
      ctx.fillRect(x, 490, width, 56);
    }
    ctx.font = "17px monospace";
    ctx.fillText("READER CARD", 365, 578);
    ctx.strokeStyle = "#aaa587";
    ctx.strokeRect(19, 144, w - 38, h - 167);
  });
  plane(card, 0.396, 0.248, [0, 0, 0.004], texture);
  return card;
}
export function makeBook() {
  const root = new THREE.Group(),
    coverMat = material("#233f3d"),
    gold = material("#b6a170");
  box(root, [0.416, 0.555, 0.057], [0, 0, 0], material("#c7bda1"));
  for (let i = 0; i < 3; i++)
    box(
      root,
      [0.417, 0.552, 0.001],
      [0, 0, -0.018 + i * 0.018],
      material(i % 3 === 0 ? "#a89b7e" : "#d0c4a6"),
    );
  box(root, [0.445, 0.583, 0.015], [0, 0, -0.04], coverMat);
  box(root, [0.029, 0.583, 0.087], [-0.218, 0, 0], coverMat);
  for (const y of [-0.215, -0.193, 0.185, 0.21])
    box(root, [0.033, 0.01, 0.09], [-0.219, y, 0], gold);
  const pivot = new THREE.Group();
  pivot.position.set(-0.22, 0, 0.041);
  root.add(pivot);
  box(pivot, [0.444, 0.583, 0.014], [0.222, 0, 0], coverMat);
  const cover = canvasTexture(640, 840, (ctx, w, h) => {
    ctx.fillStyle = "#233f3d";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#b3a16f";
    ctx.lineWidth = 3;
    ctx.strokeRect(32, 32, w - 64, h - 64);
    ctx.lineWidth = 1;
    ctx.strokeRect(43, 43, w - 86, h - 86);
    ctx.fillStyle = "#c7b687";
    ctx.textAlign = "center";
    ctx.font = "17px Georgia";
    ctx.fillText("THE NIGHTFALL COLLECTION", w / 2, 93);
    ctx.font = "52px Georgia";
    ctx.fillText("THE MIDNIGHT", w / 2, 205);
    ctx.font = "70px Georgia";
    ctx.fillText("ATLAS", w / 2, 290);
    ctx.font = "24px Microsoft YaHei";
    ctx.fillText("午 夜 图 谱", w / 2, 346);
    ctx.save();
    ctx.translate(w / 2, 523);
    ctx.strokeStyle = "#b6a271";
    for (const radius of [103, 113, 142]) {
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    for (let a = 0; a < 8; a++) {
      ctx.save();
      ctx.rotate((a * Math.PI) / 4);
      ctx.beginPath();
      ctx.moveTo(0, -122);
      ctx.lineTo(18, -23);
      ctx.lineTo(0, 0);
      ctx.lineTo(-18, -23);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
    ctx.fillStyle = "#c6b27b";
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.font = "20px Georgia";
    ctx.fillText("E L I A S   W R E N", w / 2, 742);
  });
  plane(pivot, 0.438, 0.575, [0.222, 0, 0.0076], cover);
  plane(
    pivot,
    0.432,
    0.57,
    [0.222, 0, -0.0076],
    textTexture(["✧", "NIGHTFALL", "COLLECTION"], {
      bg: "#9b9a7a",
      ink: "#4a604e",
      size: 36,
    }),
    [0, Math.PI, 0],
  );
  const pages = [0, 1, 2].map((pageIndex) =>
    canvasTexture(640, 840, (ctx, w, h) => {
      ctx.fillStyle = "#dfd4b7";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#526052";
      ctx.textAlign = "center";
      ctx.font = "18px Georgia";
      ctx.fillText("THE MIDNIGHT ATLAS", w / 2, 76);
      ctx.fillRect(57, 98, w - 114, 1);
      ctx.font = "38px Georgia";
      ctx.fillText(
        ["A map of quiet places", "Windows after midnight", "The way home"][
          pageIndex
        ],
        w / 2,
        161,
      );
      ctx.font = "23px Microsoft YaHei";
      ctx.fillText(
        ["安 静 之 地 的 地 图", "午 夜 之 后 的 窗", "回 家 的 路"][pageIndex],
        w / 2,
        211,
      );
      ctx.strokeStyle = "#6a7964";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(320, 390, 122, 0, Math.PI * 2);
      ctx.stroke();
      const stars = [
        [250, 302],
        [295, 340],
        [390, 325],
        [370, 425],
        [290, 467],
        [238, 417],
        [250, 302],
      ];
      ctx.beginPath();
      stars.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();
      stars.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.font = "21px Georgia";
      [
        "Some places can only be found",
        "after the last light has gone out.",
        "Follow the rain. Remember the way home.",
      ].forEach((t, i) => ctx.fillText(t, w / 2, 601 + i * 36));
      ctx.font = "18px Microsoft YaHei";
      ctx.fillText(
        [
          "沿着雨声，记住回家的路。",
          "每一扇亮着的窗，都有人在等待。",
          "灯光熄灭以前，沿原路返回。",
        ][pageIndex],
        w / 2,
        733,
      );
      ctx.font = "18px Georgia";
      ctx.fillText(
        `—  ${String(7 + pageIndex).padStart(2, "0")}  —`,
        w / 2,
        795,
      );
    }),
  );
  root.userData.pages = pages;
  root.userData.page = plane(root, 0.407, 0.545, [0, 0, 0.0305], pages[0]);
  plane(
    root,
    0.438,
    0.577,
    [0, 0, -0.048],
    textTexture(
      [
        "NIGHTFALL PRESS",
        "",
        "A map for the hours",
        "between dusk and dawn.",
        "",
        "0147 / ARCHIVES",
      ],
      { bg: "#233f3d", size: 29 },
    ),
    [0, Math.PI, 0],
  );
  root.userData.cover = pivot;
  return root;
}
