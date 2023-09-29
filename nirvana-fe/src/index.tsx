import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import VideoPlayback, { videoLoader } from './pages/VideoPlayback';
import VideoGrid, { videosLoader } from './components/VideoGrid/VideoGrid';
import { ConfigProvider, theme } from 'antd';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        loader: videosLoader,
        element: <VideoGrid />
      },
      {
        path: '/:id',
        loader: videoLoader,
        element: <VideoPlayback />
      }
  ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
