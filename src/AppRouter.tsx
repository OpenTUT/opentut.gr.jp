import {
    BrowserRouter,
    Route,
    Routes,
    type RouteProps,
  } from "react-router-dom";
  import Header from './components/Header';
  import Footer from './components/Footer';
  import Slider from './components/Slider';
  import Home from './routes/Home';
  import Activities from './routes/Activities';
  import Members from './routes/Members';
  import Privacy from './routes/Privacy';

  const routes = [
    {
      path: '/',
      Component: Home
    },
    {
      path: '/activities',
      Component: Activities
    },
    {
        path: '/members',
        Component: Members
    },
    {
        path: '/privacy',
        Component: Privacy
    },
  ] as const satisfies RouteProps[];

  const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, Component }, i) => <Route key={i} path={path} element={<Component />} />)}
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
  
  export default AppRoutes;