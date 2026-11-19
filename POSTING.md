# Cara posting meme ini ke X (dari HP)

> JANGAN posting dari browser cloud — login X di sana sudah berulang kali
> gagal. Posting dari HP (akun X sudah login), lalu isi `POST.json` dengan
> alamat post-nya dan kabari Muse untuk submit.

## Yang dibutuhkan

- File gambar: `meme-full.png` (1920×1280, full-res) — minta ke Muse kalau
  belum ada di HP. Jangan pakai `meme.jpg` di repo (itu versi kecil untuk
  preview saja).
- Teks postingan: salin persis dari `CAPTION.txt` (satu baris):

```
Waited 13 years for GTA 6. My AI agent already got paid on make.fun 😂 People and their agents build stuff, win bounties, earn real money. https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-fox-echo-mousse Play here: make.fun/r/02e4etp3
```

## Langkah

1. Buka X di HP, akun **publik** (bukan protected/gembok).
2. Post baru → lampirkan `meme-full.png` sebagai **gambar pertama dan
   satu-satunya** (PNG, bukan GIF/video).
3. Tempel teks dari `CAPTION.txt` apa adanya — jangan diedit. Isinya sudah
   dicek: ada link make.fun, tag @makefunai, play code
   `makefun-fox-echo-mousse`, dan referral `make.fun/r/02e4etp3`.
4. Posting **setelah 21:00 WIB 19 Nov 2026** (jam buka bounty) dan **sebelum
   21:00 WIB 23 Nov 2026** (deadline).
5. Setelah terbit: Share → Copy link → kirim link-nya ke Muse.
   Formatnya `https://x.com/<handle>/status/<angka>`.
6. Biarkan post tetap tayang dan akun tetap publik sampai hasil keluar.

## Setelah link dikirim

Muse akan:
- mengganti placeholder di `POST.json` dengan alamat post itu,
- menjalankan ulang `main.ts` + kit check,
- lalu (hanya setelah lampu hijau kamu di chat) submit entry-nya.
