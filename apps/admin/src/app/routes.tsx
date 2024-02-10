import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from "./components"
import { DashboardPage } from './features/dashboard';
export const routes: RouteObject[] = [{
  element: <Layout />,
  children: [
    { path: '/', element: <DashboardPage /> },
  ]
}];

export const router = createBrowserRouter(routes)
