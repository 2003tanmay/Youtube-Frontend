import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Subscription, You, Tweets, YourChannel, History, LikedVideos, UploadVideo, WatchVideo, Login, SearchPage } from './pages/index.js'
import store from "./store";
import App from './App.jsx'
import './index.css'
import AuthLayout from './components/AuthLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout>
            {" "}
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/feed/subscriptions",
        element: <Subscription />,
      },
      {
        path: "/feed/you",
        element: <You />,
      },
      {
        path: "/feed/tweets",
        element: <Tweets />,
      },
      {
        path: "/channel",
        element: <YourChannel />,
      },
      {
        path: "/feed/history",
        element: <History />,
      },
      {
        path: "/channel/likedVideos",
        element: <LikedVideos />,
      },
      {
        path: "/channel/uploadVideo",
        element: <UploadVideo />,
      },
      {
        path: "/watch/:videoId",
        element: <WatchVideo />,
      },
      {
        path: "/search_query=/:query",
        element: <SearchPage />,
      }
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    ),
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)