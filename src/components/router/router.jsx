import Login from "../Login"
import PostDetail from "../PostDetail"
import ErrorPage from "../UI/error/ErrorPage"
import About from "../pages/AboutPage"
import PostsPage from "../pages/PostsPage"


export const privateRouter = [
    {path: '/about', element: <About />},
    {path: '/posts', element: <PostsPage />},
    {path: '/posts/:id', element: <PostDetail />},
    {path: '/*', element: <ErrorPage />}
];

export const publicRouter = [
    {path: '/login', element: <Login />},
    {path: '/*', element: <Login />}
];