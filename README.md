# Praktikum Grafika Komputer — Pertemuan 6

## Introduction to Three.js — Mini 3D Scene

| | |
|---|---|
| **Nama** | Erica Triana Widyastuti |
| **NRP** | 5025241069 |
| **Mata Kuliah** | EF234504 - Grafika Komputer |
| **Judul Praktikum** | Introduction to Three.js -  Mini 3D Scene |

---

## Deskripsi Scene

Aplikasi web 3D sederhana yang dibangun dengan **Three.js** (abstraction layer di atas WebGL), menggunakan **Node.js + Vite**.

Scene akhir yang ditargetkan:

```text
Scene
├── PerspectiveCamera
├── Cube
├── Sphere
├── Ground
├── AmbientLight
└── DirectionalLight
        ↓
Animation Loop → WebGLRenderer → Canvas
```

> **Status:** pengerjaan masih berjalan. README ini diperbarui setiap milestone selesai.

---

## Progress Pengerjaan

| Milestone | Isi | Status |
|---|---|---|
| 1 | Project Setup (Vite + Three.js) | ✅ Selesai |
| 2 | Scene + Camera + Renderer | ✅ Selesai |
| 3 | Cube (BoxGeometry + MeshBasicMaterial) | ⬜ Belum |
| 4 | Transform (position, rotation, scale) | ⬜ Belum |
| 5 | Sphere + MeshPhongMaterial | ⬜ Belum |
| 6 | Ground (PlaneGeometry + MeshLambertMaterial) | ⬜ Belum |
| 7 | Light (Ambient + Directional) | ⬜ Belum |
| 8 | Shadow | ⬜ Belum |
| 9 | Animation (Clock + delta time) | ⬜ Belum |
| 10 | Responsive Rendering | ⬜ Belum |

### Milestone 1 — Project Setup

- Membuat project dengan `npm create vite@latest praktikum-threejs-06 -- --template vanilla`.
- Menjalankan `npm install` dan `npm install three`.
- Membersihkan `index.html` (container `#app` dan HUD `#hud`) dan membuat `style.css` (latar gelap, canvas penuh layar, gaya HUD).
- `import * as THREE from "three"` berhasil dan `npm run dev` berjalan.

### Milestone 2 — Scene + Camera + Renderer

- **Scene** dengan background `0x0b1020` (padanan `gl.clearColor` pada WebGL manual).
- **PerspectiveCamera** dengan FOV 60, aspect `width / height`, near 0.1, far 100, diposisikan di `(4, 3, 6)`.
- **WebGLRenderer** dengan `antialias: true`, ukuran sesuai viewport.
- Canvas dari `renderer.domElement` ditempel ke `#app`, lalu render pertama dengan `renderer.render(scene, camera)`.
- Hasil: canvas Three.js menampilkan warna background scene (belum ada object).

---

## Daftar Geometry

_Akan diisi setelah Milestone 3–6._

## Daftar Material

_Akan diisi setelah Milestone 3–6._

## Daftar Light

_Akan diisi setelah Milestone 7._

## Konfigurasi Shadow

_Akan diisi setelah Milestone 8._

## Animasi yang Dibuat

_Akan diisi setelah Milestone 9._

## Challenge yang Dikerjakan

_Akan diisi setelah challenge dipilih (minimal dua)._

---

## Cara Menjalankan

```bash
npm install
npm run dev
```

Lalu buka URL yang ditampilkan Vite (biasanya `http://localhost:5173/`).

## Kontrol Keyboard

_Belum ada (akan diisi jika mengerjakan Challenge C, G, atau H)._

## Catatan Debugging

- **`renderer.render()` dipanggil sebelum `renderer` dibuat** → `ReferenceError: Cannot access 'renderer' before initialization`. Solusi: pastikan object dibuat dulu sebelum dipakai.
- Port `5173` bisa terpakai jika ada dev server lain yang masih berjalan, sehingga Vite pindah ke port lain (mis. `5174`). Solusi: tutup terminal dev server yang tidak dipakai.
- Halaman masih menampilkan template Vite karena `src/main.js` bawaan menimpa isi `#app`. Solusi: ganti seluruh isi `main.js`.

---

## Refleksi

_Akan ditulis di akhir praktikum_
