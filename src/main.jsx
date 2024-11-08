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
import MFS from './Pages/MFS';
import Transfer from './Pages/Transfer';
import MFSToMFSPayment from './Pages/MFSToMFSPayment';
import Bank from './Pages/Bank';
import Card from './Pages/Card';
import Profile from './Pages/Profile';
import About from './Pages/About';
import PocketToBank from './Pages/PocketToBank';


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
      },
      {
        path : "/mfs",
        element : <MFS></MFS>
      },
      {
        path :"/transfer",
        element : <Transfer></Transfer>
      },
      {
        path : "/mfsToMfsPayment",
        element : <MFSToMFSPayment></MFSToMFSPayment>
      },
      {
        path : "/bank",
        element : <Bank></Bank>
      },
      {
        path : "/card",
        element : <Card></Card>
      },
      {
        path : "/profile",
        element : <Profile></Profile>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/pocketToBank",
        element : <PocketToBank></PocketToBank>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
