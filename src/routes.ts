import React from 'react'
import App from './App'
import { createHashRouter } from 'react-router-dom'
import { appLoader, postPageLoader } from './utils/loaders'
import Error from './routes/Error'
import PostPage from './routes/PostPage'

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
    { basename: import.meta.env.VITE_PUBLIC_URL }
)

export default router
