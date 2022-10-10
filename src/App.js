import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, RouterProvider ,Route } from 'react-router-dom';
import Main from './Componts/Main/Main';
import Home from './Componts/Home/Home';
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
        },
        {
          path: "/topice",
          element: <Topice></Topice>,
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
