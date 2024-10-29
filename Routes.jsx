import { createBrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./src/paginas/Home";
import Projects from "./src/paginas/Projects";
import Resume from "./src/paginas/Resume";
import ErrorPage from "./src/paginas/ErrorPage";

const router = createBrowserRouter([
    {
    path:'/',
    errorElement : <ErrorPage />,
    element: <Header />,
    children: [
        {path: '/', element:<Home/>},
        {path: '/projects', element:<Projects/>},
        {path: '/resume', element:<Resume/>},
    ]
}
])

export default router