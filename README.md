# Helmet Video Test (GitHub Pages)

Мини-проект для проверки метатегов `react-helmet-async` и для реального предпросмотра в Telegram/WhatsApp/VK/FB через статическую страницу.

## Быстрый старт
1) Установите зависимости:
```bash
yarn
```
2) Положите ваши файлы:
- `public/assets/video.mp4` — локальное видео
- `public/assets/cover.jpg` — картинка предпросмотра (любая, желательно 1280×720 или 1200×630)
3) Запустите локально:
```bash
yarn dev
```
Откройте `http://localhost:5173/#/video` — увидите видео и теги от Helmet (в DevTools).
> Боты их не увидят локально, т.к. не исполняют JS.

## GitHub Pages
1) Закоммитьте проект в новый репозиторий.
2) В `vite.config.ts` для GitHub Pages можно установить base через env:
   ```bash
   GHPAGES_BASE="/<REPO>/" yarn build
   ```
   В качестве альтернативы, можно просто отредактировать `base` в конфиге.
3) Включите GitHub Pages: Settings → Pages → Deploy from branch → `dist` (или `gh-pages` в зависимости от вашего процесса).
4) Обновите `public/share-video.html`:
   - замените `<USERNAME>` и `<REPO>` своим именем/репо,
   - убедитесь, что ресурсы доступны по HTTPS:
     - `https://<USERNAME>.github.io/<REPO>/assets/cover.jpg`
     - `https://<USERNAME>.github.io/<REPO>/assets/video.mp4`
5) Для проверки предпросмотра в Telegram отправьте ссылку:
   ```
   https://<USERNAME>.github.io/<REPO>/share-video.html
   ```
   Эта страница содержит статические OG-теги и мгновенно редиректит пользователей на `#/video`.

## Почему два варианта
- **`#/video`** — показывает, как Helmet меняет теги **в браузере** (для пользователей).
- **`share-video.html`** — даёт реальное **превью в Telegram/WA/VK/FB**, потому что теги вшиты в HTML **без JS**.
