import React from "react";
import { FaHome, FaShoppingBag, FaUser } from "react-icons/fa";
import { GrUploadOption } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { SiCampaignmonitor } from "react-icons/si";
import { useState } from "react";

const Dashboard = () => {

  const hlwAdmin = true

  return (
      <div className="flex">
        <div className="lg:w-64 min-h-screen shadow-2xl text-center">
          <ul className="menu">
            <li>
              <NavLink to={"dashboard/addapet"}>
                <FaShoppingBag></FaShoppingBag> Add A pet
              </NavLink>
            </li>

            <li>
              <NavLink to={"dashboard/myaddedpets"}>
                <FaShoppingBag></FaShoppingBag> My Added Pets
              </NavLink>
            </li>

            <li>
              <NavLink to={"dashboard/adoptionrequest"}>
                <GrUploadOption></GrUploadOption> Adoption Request
              </NavLink>
            </li>

            <li>
              <NavLink to={"dashboard/donation"}>
                <TbBrandCampaignmonitor></TbBrandCampaignmonitor> Create
                Donation Campaign
              </NavLink>
            </li>

            <li>
              <NavLink to={"dashboard/donationcampaign"}>
                <SiCampaignmonitor></SiCampaignmonitor> My Donation Campaigns
              </NavLink>
            </li>
            <li>
              <NavLink to={"dashboard/mydonation"}>
                <SiCampaignmonitor></SiCampaignmonitor> My Donations
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to={"/"}>
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"dashboard/allusers"}>
                <FaUser></FaUser> All-Users
              </NavLink>
            </li>
          </ul>
        </div>
      <div className="flex-1 overflow-x-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;




