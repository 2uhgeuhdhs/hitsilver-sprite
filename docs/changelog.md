/**
 * @file: docs/changelog.md
 * @description: Хронология изменений проекта.
 * @dependencies: docs/project.md, docs/tasktracker.md, memory-bank/*
 * @created: 2025-08-18
 */

# Changelog

## [2025-09-06] - Этап 3: SEO — helmet-async, JSON-LD, sitemap/robots

### Добавлено
- JSON-LD: `Organization` (Home), `BreadcrumbList` (Category/Product), `Product` (ProductDetailPage).
- Файлы `public/sitemap.xml` и `public/robots.txt` (RU-only, базовые маршруты).

### Изменено
- Миграция на `react-helmet-async`: подключён `HelmetProvider` в `src/main.jsx`, заменены импорты `Helmet` на страницах (`AboutPage`, `CarePage`, `ConsultationPage`, `GiftCardsPage`).

### Исправлено
- N/A

## [2025-09-06] - Этап 4: Consent gating и метрики — базовая реализация

### Добавлено
- Централизованный `analyticsManager` (no-op, RU-only), включается только по согласию (`consent.analytics`).
- Интеграция с провайдером `CookieConsentProvider` (вкл/выкл трекеров по изменению согласия).
- Локальный сбор Web Vitals (CLS, INP, LCP, TTFB, FCP) через `web-vitals` с логированием в консоль через `analyticsManager`.
- Отправка `pageview` при смене маршрута в `App.jsx` (гейтится согласием).

### Изменено
- N/A

### Исправлено
- N/A

## [2025-09-06] - Каталог: удалены демо‑товары часов

### Изменено
- Удалены позиции из `src/data/products.js`: `philip-watch-classic-women` (id: 21) и `urban-smart-demo` (id: 22).

## [2025-09-06] - Завершение задач: Consent MVP и Исследование требований

### Добавлено
- N/A

### Изменено
- `docs/tasktracker.md`: задачи «Юридический механизм согласия и Cookie (MVP)» и «Исследование официальных требований» помечены как завершённые; их шаги отмечены выполненными.
- Актуализированы `memory-bank/activeContext.md` и `memory-bank/progress.md` под завершение работ по consent и исследованию.

### Исправлено
- N/A

## [2025-09-06] - Этап 2: Хлебные крошки для категорий и товара

### Добавлено
- Хлебные крошки на страницах `CategoryPage` и `ProductDetailPage` для улучшения навигации.

### Изменено
- Подготовка к добавлению JSON-LD BreadcrumbList на Этапе 3 (SEO).

### Исправлено
- N/A

## [2025-09-06] - Этап 2: Скелетоны и пустые состояния на /products

### Добавлено
- Скелетон‑загрузчики для сетки товаров (`ProductGrid` теперь поддерживает `loading` и `skeletonCount`).

### Изменено
- На странице `ProductsPage` добавлена лёгкая имитация загрузки при изменении фильтров/сортировки/цены и улучшено пустое состояние (кнопка «Сбросить фильтры»).

### Исправлено
- N/A

## [2025-09-06] - Этап 2: Начата реализация сортировок и чипов фильтров на /products

### Добавлено
- План внедрения сортировок (цена/популярность/новизна) и чипов активных фильтров на странице каталога.

### Изменено
- Подготовка к синхронизации состояния фильтров с URL‑параметрами.

### Исправлено
- N/A

## [2025-09-06] - Этап 1: Вторая итерация оптимизаций (конвертация изображений)

### Добавлено
- Добавлен скрипт `scripts/convert-images.js` (Node + sharp) и npm‑скрипт `images:convert` для массовой конвертации PNG/JPG → WebP/AVIF.

### Изменено
- Выполнена конвертация крупных изображений `src/assets/1..5.png`, `tiffany_hardwear_hero.png` в WebP/AVIF.
- Удалены неиспользуемые тяжёлые импорты из `src/pages/HomePage.jsx` и добавлены `loading="lazy"`, `decoding="async"`, `sizes`.
- Повторный билд показал снижение основного чанка до ~224.94 kB (gzip ~69.28 kB); предупреждение Rollup >500 kB устранено.

### Исправлено
- N/A

## [2025-09-06] - Этап 1: Первая итерация оптимизаций (code splitting, chunks, images)

### Добавлено
- Включена ленивная загрузка маршрутов через `React.lazy` + `Suspense` в `src/main.jsx`.

### Изменено
- Настроено разбиение вендорных чанков через `build.rollupOptions.output.manualChunks` в `vite.config.js` (`vendor-react`, `vendor-router`, `vendor-radix`, `vendor-recharts`, `vendor-motion`, `vendor-utils`).
- Удалены неиспользуемые тяжёлые импорты изображений из `src/App.jsx`.
- В `src/pages/HomePage.jsx` для изображений категорий добавлены `loading="lazy"`, `decoding="async"`, `sizes` и заданы размеры логотипа.

### Исправлено
- N/A

## [2025-09-06] - Добавлены правила Git workflow и напоминания

### Добавлено
- В `~/.codeium/windsurf/memories/global_rules.md` добавлен раздел «Политика Git (коммиты/пуши) и напоминания».

### Изменено
- `docs/tasktracker.md`: добавлена задача «Git workflow и напоминания» (статус: Завершена).

### Исправлено
- N/A

## [2025-09-06] - Добавлен Этап 6 — Мультиязычность (i18n)

### Добавлено
- В `docs/tasktracker.md` добавлена задача «Этап 6 — Мультиязычность (i18n)» со списком шагов и зависимостей.

### Изменено
- Актуализированы контексты в `memory-bank/activeContext.md` и записи `memory-bank/progress.md` под добавление нового этапа.

### Исправлено
- N/A

## [2025-09-06] - Добавлена дорожная карта улучшений (Этапы 1–5)

### Добавлено
- В `docs/tasktracker.md` добавлены задачи: Этап 1 (производительность/бандл), Этап 2 (UX каталога), Этап 3 (SEO/Schema), Этап 4 (Consent gating/метрики), Этап 5 (DX/тестирование) — со статусами и шагами.

### Изменено
- Обновлены контексты в `memory-bank/activeContext.md` и журнал `memory-bank/progress.md` для фиксации постановки дорожной карты.

### Исправлено
- N/A

## [2025-08-18] - Инициализация Memory Bank и документации

### Добавлено
- Шаблоны Memory Bank: projectbrief.md, productContext.md, systemPatterns.md, techContext.md, activeContext.md, progress.md.
- Документация: docs/changelog.md, docs/tasktracker.md, docs/project.md (база архитектуры).

### Изменено
- N/A

### Исправлено
- `src/index.css`: удалены нестандартные директивы `@custom-variant`, `@theme`, а также блок `@layer base` с `@apply`; заменены на валидный CSS-эквивалент (переменные уже определены в `:root`/`.dark`, базовые стили прописаны обычными правилами). Устранены ошибки линтера.

## [2025-08-18] - Прочитаны Memory Bank файлы и составлены резюме

### Добавлено
- Отметка в `docs/tasktracker.md` о завершении шага чтения Memory Bank и составления 1‑строчных резюме.

### Изменено
- Актуализирован `memory-bank/activeContext.md` и `memory-bank/progress.md`.

### Исправлено
- N/A

## [2025-09-04] - Удаление декоративных боковых волн (rollback)

### Добавлено
- N/A

### Изменено
- Удалён импорт и рендер `WaveEdges` из `src/App.jsx`.
- Удалены все связанные стили из `src/index.css` (включая `--scroll`, `.wave-edge*`, `.wave-group`, `.wave-path*`, медиаправило для скрытия).

### Исправлено
- Исключено потенциальное визуальное отвлечение пользователей. Кодовая база очищена от невостребованных стилей и импорта.

## [2025-09-04] - Декоративные боковые волны и усиление эффекта

### Добавлено
- Компонент `WaveEdges` (`src/components/ui/wave-edges.jsx`) с SVG-волнами слева и справа, обновление CSS‑переменной `--scroll` по скроллу/resize.
- Подключение в приложении: импорт и рендер `<WaveEdges />` в `src/App.jsx` под корневым контейнером.
- Стили для позиционирования и анимации: `.wave-edge`, `.wave-svg`, `.wave-group`, `.wave-path--1..3` в `src/index.css`.

### Изменено
- Усилен визуальный эффект: ширина боковой области увеличена до `260px`; повышены `opacity` и `stroke-width`; настроены `stroke-dasharray`/`stroke-dashoffset`.
- Увеличена амплитуда параллакса группы: `translateY(calc(var(--scroll) * -10%))` (ранее `-6%`).

### Исправлено
- N/A

## [2025-09-04] - Добавлена категория «Часы» и пункт меню

### Добавлено
- Новая категория каталога: «Часы» (`id: watches`) в `src/data/categories.js`.
- Пункт верхнего меню «Часы» (desktop) в `src/App.jsx` рядом с «Ювелирные изделия» и «О нас».
- Пункт «Часы» в мобильном меню (раздел «Категории»).
- Добавлены 2 товара категории «Часы» в `src/data/products.js` с изображениями из `public/images/products/` (`watch_philip_auto_silver_white.jpg`, `watch_philip_auto_black_metal.jpg`).

### Изменено
- Обновлена документация: `docs/project.md` (навигация/категории), `memory-bank/activeContext.md`, `memory-bank/progress.md`, `docs/tasktracker.md` (новая задача).
- Страница каталога (`src/pages/ProductsPage.jsx`): обновлены фильтры — добавлена категория «Часы» и вынесены «Подвески» из «Ожерелий» в отдельную категорию.
- Карточки товаров (`src/components/products/product-card.jsx`): убрано обрезание заголовка (`truncateText` и `line-clamp-2`) — названия отображаются полностью без «…».
- Товарам часов назначена подкатегория `men` для работы фильтров «Мужские» на странице `/categories/watches`.

### Исправлено
- N/A

## [2025-09-04] - UX: плавная прокрутка и анимации переходов между страницами

### Добавлено
- Глобальная плавная прокрутка: правило `html { scroll-behavior: smooth; }` в `src/index.css`.
- Анимация переходов маршрутов: класс `.route-fade` и `@keyframes route-fade-in` в `src/index.css`.

### Изменено
- `src/App.jsx`: обёрнут `<Outlet />` в контейнер с ключом по `location.pathname` и классом `.route-fade` для плавного появления контента.
- `src/App.jsx`: добавлен `useEffect` для автопрокрутки к началу страницы при смене маршрута (с fallback).
- `src/App.jsx`: уточнён тайминг автопрокрутки — выполнение после рендера контента через двойной `requestAnimationFrame` и проверку `scrollY>0`.
- Документация: актуализированы `docs/tasktracker.md`, `memory-bank/activeContext.md`, `memory-bank/progress.md`, добавлена секция в `docs/project.md` про UX‑переходы.

### Исправлено
- N/A
