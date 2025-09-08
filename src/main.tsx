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
  const secondVideoUrl = '/video-preview/second-video.html'

  return (
    <div style={{ padding: 24 }}>
      <h1>Тест метатегов для видео</h1>
      <a
        href={secondVideoUrl}
        target="_blank"
        rel="noreferrer"
      >
        Видео на статичном html
      </a>
      <p>
        <Link to="/video">Открыть video на SPA</Link>
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
