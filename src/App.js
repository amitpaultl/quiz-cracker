import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, RouterProvider ,Route } from 'react-router-dom';
import Main from './Componts/Main/Main';
import Topice from './Componts/Topice/Topice';
import Satistics from './Componts/Satistics/Satistics';
import Blog from './Componts/Blog/Blog';
import Quize from './Componts/Quize/Quize';
import Error from './Componts/Error/Error';
import Chart from './Componts/Chart';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
        {
          path: "/topice/quezi/:id",
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quize></Quize>,
           
        },
        {
          path: "/satistics",
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Satistics></Satistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/chart",
          element: <Chart></Chart>,
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
