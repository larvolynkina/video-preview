import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Video = () => {
  const origin = window.location.origin
  const materialUrl = origin + '/#/video'
  const cover = origin + '/video-preview/assets/cover.jpg'
  const video = origin + '/video-preview/assets/video.mp4'

  return (
    <div style={{ padding: 16 }}>
      <Helmet>
        <meta
          property="og:type"
          content="video.other"
        />
        <meta
          property="og:site_name"
          content="Helmet Video Test"
        />
        <meta
          property="og:title"
          content="Тестовое видео"
        />
        <meta
          property="og:description"
          content="Локальная страница с простым видеоплеером и метатегами."
        />
        <meta
          property="og:url"
          content={materialUrl}
        />
        <meta
          property="og:image"
          content={cover}
        />
        <meta
          property="og:image:secure_url"
          content={cover}
        />
        <meta
          property="og:video"
          content={video}
        />
        <meta
          property="og:video:url"
          content={video}
        />
        <meta
          property="og:video:secure_url"
          content={video}
        />
        <meta
          property="og:video:type"
          content="video/mp4"
        />
      </Helmet>

      <h2>Тестовое видео</h2>
      <div
        style={{
          width: '100%',
          maxWidth: 720,
          aspectRatio: '16 / 9',
          background: '#000',
        }}
      >
        <video
          src={video}
          preload="metadata"
          controls
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}
