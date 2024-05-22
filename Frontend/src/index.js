import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/bootstrap.custom.css';
import './styles/index.css'
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';

import Productlist from './Product';
import  {createBrowserRouter ,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';


const router =createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App></App>}>
    <Route index={true} path='/' element={<HomeScreen></HomeScreen>}></Route>
    <Route  path='/product/:id' element={<ProductScreen></ProductScreen>}></Route>
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>


    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

