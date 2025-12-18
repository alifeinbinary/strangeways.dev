import React from 'react'
import { createHashRouter } from 'react-router-dom'
import App from './App'
import Error from './routes/Error'
import PostPage from './routes/PostPage'
import { appLoader, postPageLoader } from './utils/loaders'

const router = createHashRouter(
  [
    {
      path: '/',
      element: React.createElement(App),
      loader: appLoader,
      errorElement: React.createElement(Error),
      children: [
        {
          path: '/:id',
          element: React.createElement(PostPage),
          loader: postPageLoader,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_PUBLIC_URL as string }
)

export default router
