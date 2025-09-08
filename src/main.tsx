import React from 'react'
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

const Home = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Helmet Video Test</h1>
      <p>Мини-приложение для проверки метатегов react-helmet-async.</p>
      <Link to="/video">Открыть страницу с видео</Link>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
