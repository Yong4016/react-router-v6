import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/videos', element: <Videos /> },
      { path: '/videos/:videoId', element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
