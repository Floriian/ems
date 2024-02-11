import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from "./components"
import { DashboardPage } from './features/dashboard';
import { LoginPage } from './features/auth';
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />
  },
  {
    element: <Layout />,
    children: [
      { path: '/app', element: <DashboardPage /> },
    ]
  }];

export const router = createBrowserRouter(routes)
