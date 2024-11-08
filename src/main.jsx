import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Transaction from './Pages/Transaction';
import TransactionHistory from './Pages/TransactionHistory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/transaction",
        element : <Transaction></Transaction>
      },
      {
        path : "/transactionHistory",
        element : <TransactionHistory></TransactionHistory>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
