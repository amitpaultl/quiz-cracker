import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, RouterProvider ,Route } from 'react-router-dom';
import Main from './Componts/Main/Main';
import Home from './Componts/Satistics/Satistics';
import Topice from './Componts/Topice/Topice';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children:[
        {
          path: "/",
          element: <Topice></Topice>,
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: "/topice",
          element: <Topice></Topice>,
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
