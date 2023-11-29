import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Components/Root/Root.jsx";
import Home from "./assets/Components/Home/Home.jsx";
import PetListing from "./assets/Components/PetListing/PetListing.jsx";
import PetDonation from "./assets/Components/PetDonation/PetDonation.jsx";
import Login from "./assets/Components/Login/Login.jsx";
import SignUp from "./assets/Components/SignUp/SignUp.jsx";
import PetCategory from "./assets/Components/PetCategory/PetCategory.jsx";
import AuthProvider from "./assets/Components/AuthProvider/AuthProvider.jsx";
import Dashboard from "./assets/Components/Dashboard/Dashboard.jsx";
import AddAPet from "./assets/Components/Dashboard/AddAPet/AddAPet.jsx";
import MyAddedPets from "./assets/Components/Dashboard/MyAddedPets/MyAddedPets.jsx";
import AdoptionRequest from "./assets/Components/Dashboard/AdoptionRequest/AdoptionRequest.jsx";
import Donation from "./assets/Components/Dashboard/Donation/Donation.jsx";
import MyDonation from "./assets/Components/Dashboard/MyDonation/MyDonation.jsx";
import DonationCampaign from "./assets/Components/Dashboard/DonationCampaign/DonationCampaign.jsx";
import PetDetails from "./assets/Components/PetDetails/PetDetails.jsx";
import DonationDetails from "./assets/Components/DonationDetails/DonationDetails.jsx";
import AllUsers from "./assets/Components/Dashboard/AllUsers/AllUsers.jsx";
import Edit from "./assets/Components/Dashboard/Edit/Edit.jsx";
import ErrorPage from "./assets/Components/ErrorPage/ErrorPage.jsx";
import PrivateRouter from "./assets/Components/PrivateRouter/PrivateRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/petlisting",
        element: <PetListing></PetListing>,
        loader: () =>
          fetch("https://final-project-server-eight.vercel.app/addpet"),
      },
      {
        path: "/petdonation",
        element: <PetDonation></PetDonation>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/petcategory",
        element: <PetCategory></PetCategory>,
      },
      {
        path: "/donationdetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: ({ params }) =>
          fetch(
            `https://final-project-server-eight.vercel.app/creatcampaing/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: <PetDetails></PetDetails>,
        loader: ({ params }) =>
          fetch(
            `https://final-project-server-eight.vercel.app/addpet/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "dashboard/addapet",
        element: (
          <PrivateRouter>
            <AddAPet></AddAPet>
          </PrivateRouter>
        ),
      },
      {
        path: "dashboard/myaddedpets",
        element: (
          <PrivateRouter>
            <MyAddedPets></MyAddedPets>
          </PrivateRouter>
        ),
      },
      {
        path: "dashboard/adoptionrequest",
        element: (
          <PrivateRouter>
            {" "}
            <AdoptionRequest></AdoptionRequest>
          </PrivateRouter>
        ),
      },
      {
        path: "dashboard/donation",
        element: (
          <PrivateRouter>
            {" "}
            <Donation></Donation>
          </PrivateRouter>
        ),
      },
      {
        path: "dashboard/donationcampaign",
        element: (
          <PrivateRouter>
            {" "}
            <DonationCampaign></DonationCampaign>
          </PrivateRouter>
        ),
      },
      {
        path: "dashboard/mydonation",
        element: (
          <PrivateRouter>
            {" "}
            <MyDonation></MyDonation>
          </PrivateRouter>
        ),
      },
      {
        path: "dashboard/allusers",
        element: (
          <PrivateRouter>
            <AllUsers></AllUsers>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/edit/:id",
        element: (
          <PrivateRouter>
            <Edit></Edit>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://final-project-server-eight.vercel.app/mydonationcampaigns/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
