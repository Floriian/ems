import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Layout } from "./components"
import { DashboardPage } from './features/dashboard';
import { LoginPage } from './features/auth';
import { ReactNode } from 'react';
import { Analytics, CalendarMonth } from '@mui/icons-material';

export type Route = RouteObject & {
  title?: string;
  icon?: ReactNode;
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: "/",
    element: <LoginPage />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/app',
        children: [
          { index: true, title: "Dashboard", element: <DashboardPage />, icon: <Analytics />, },
          { path: "/app/events", title: "Events", element: <div />, icon: <CalendarMonth /> }
        ]
      },
    ]
  }];

export const router = createBrowserRouter(routes)
