/**
 * @file: scripts/convert-images.js
 * @description: Утилита конвертации изображений PNG/JPG → WebP/AVIF с ограничением размеров и качеством
 * @dependencies: sharp, node:fs, node:path
 * @created: 2025-09-06
 */

import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const ASSETS_DIR = path.resolve(process.cwd(), 'src', 'assets')
const OUTPUT_DIR = ASSETS_DIR // сохраняем рядом, меняем расширение

// Порог срабатывания по размеру (байт) — конвертируем только крупные файлы
const MIN_SIZE_BYTES = 80 * 1024 // 80 KB

// Качество/параметры конвертации
const WEBP_QUALITY = 82
const AVIF_QUALITY = 50

/**
 * Возвращает список файлов по расширениям рекурсивно
 */
function walk(dir, exts, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, exts, acc)
    else if (exts.includes(path.extname(e.name).toLowerCase())) acc.push(full)
  }
  return acc
}

async function convertOne(inputFile) {
  const stat = fs.statSync(inputFile)
  if (stat.size < MIN_SIZE_BYTES) return { skipped: true, reason: 'small', inputFile }

  const base = path.basename(inputFile, path.extname(inputFile))
  const dir = path.dirname(inputFile)
  const webpOut = path.join(dir, `${base}.webp`)
  const avifOut = path.join(dir, `${base}.avif`)

  const img = sharp(inputFile)

  await img.webp({ quality: WEBP_QUALITY }).toFile(webpOut)
  await img.avif({ quality: AVIF_QUALITY }).toFile(avifOut)

  return { skipped: false, inputFile, webpOut, avifOut }
}

async function main() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('Не найден каталог', ASSETS_DIR)
    process.exit(1)
  }

  const files = walk(ASSETS_DIR, ['.png', '.jpg', '.jpeg'])
  console.log(`Найдено файлов для проверки: ${files.length}`)

  const results = []
  for (const f of files) {
    try {
      const r = await convertOne(f)
      results.push(r)
      if (r.skipped) console.log(`⏭️  Пропущено (меньше порога): ${path.relative(ASSETS_DIR, f)}`)
      else
        console.log(
          `✅ Конвертировано: ${path.relative(ASSETS_DIR, f)} → ${path.basename(r.webpOut)}, ${path.basename(r.avifOut)}`,
        )
    } catch (e) {
      console.warn(`⚠️ Ошибка конвертации ${f}:`, e.message)
    }
  }

  // Итоговая сводка
  const converted = results.filter((r) => !r.skipped).length
  const skipped = results.filter((r) => r.skipped).length
  console.log(`Готово. Конвертировано: ${converted}, пропущено: ${skipped}.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
