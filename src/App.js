// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Head from './Components/Head';
import Body from './Components/Body';
// import About from './Components/About';
// import Cart from './Components/Cart';
// import Contact from './Components/Contact';
// import Login from './Components/Login';
import Error from './Components/Error';
import ResMenu from './Components/ResMenu';
import { lazy, Suspense, useEffect, useState } from 'react';
import Hra from './utils/Hra';
import {Provider} from 'react-redux'
import AppStore from './utils/store/AppStore';
const About = lazy(() => import('./Components/About'))
const Cart = lazy(() => import('./Components/Cart'))
const Contact = lazy(() => import('./Components/Contact'))
const Login = lazy(() => import('./Components/Login'))

const App = () => {
  const [ne, setNe] = useState();
  useEffect(() => {
    const obj = {
      data : "Bye To Context"
    }
    setNe(obj.data)
  },[])
  return (
    <Provider store = {AppStore}>
    <Hra.Provider value = {{out : ne, res : "Hi Phani Sir" , setNe}}>
      <div>
        <Head/>
      
      <Outlet/>
      </div>
    </Hra.Provider>
    </Provider>
  )
}

export const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/about',
        element :<Suspense fallback = {<h1>Component is Loading</h1>}><About/></Suspense>
      },
      {
        path : '/cart',
        element : <Suspense  fallback = {<h1>Component is Loading</h1>}><Cart/></Suspense>
      },
      {
        path  : "/contact",
        element : <Suspense fallback = {<h1>Component is Loading</h1>}><Contact/></Suspense>
      },
      {
        path : '/login',
        element : <Suspense fallback = {<h1>Component is Loading</h1>}> <Login/></Suspense>
      },
      {
        path : '/menu/:id',
        element : <ResMenu/>
      }
    ],
    errorElement : <Error/>
  }
])
// export default App;