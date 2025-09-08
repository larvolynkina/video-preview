import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Video } from './components/Video'

const App = () => (
  <HelmetProvider>
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/video"
          element={<Video />}
        />
      </Routes>
    </HashRouter>
  </HelmetProvider>
)

function Home() {
  const origin = window.location.origin
  const cover = origin + '/assets/cover.jpg'
  const video = origin + '/assets/video.mp4'

  return (
    <div style={{ padding: 24 }}>
      <h1>Главная страница</h1>
      <p>
        Здесь плеер с видео и <strong>статические OG-теги</strong> (в index.html).
      </p>

      <Video />
      <p>
        <Link to="/video">Открыть /video</Link>
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
