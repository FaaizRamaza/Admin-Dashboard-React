import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Paid,
  Assessment,
  Inventory,
  Email,
  Grading,
  ChatBubble,
  ManageAccounts,
  Analytics,
  Report
} from "@mui/icons-material";
import './sidenav.css'

export default function SideNav() {
  return (
    <div className="sideNavContainer">
      <div className="sideNavWrapper">
        <div className="sideNavMenu">
          <h3 className="sideNavTitle">Dashboard</h3>
          <ul className="sideNavList">
            <li className="sideNavListItem">
              <LineStyle className="sidenavIcon" />
              Home
            </li>
            <li className="sideNavListItem">
              <Timeline className="sidenavIcon" />
              Analytics
            </li>
            <li className="sideNavListItem">
              <TrendingUp className="sidenavIcon" />
              Salse
            </li>
          </ul>
        </div>

        <div className="sideNavMenu">
          <h3 className="sideNavTitle">Admin Menu</h3>
          <ul className="sideNavList">
            <li className="sideNavListItem">
              <Person className="sidenavIcon" />
              Users
            </li>
            <li className="sideNavListItem">
              <Paid className="sidenavIcon" />
              Producst
            </li>
            <li className="sideNavListItem">
              <Assessment className="sidenavIcon" />
              Report
            </li>
            <li className="sideNavListItem">
              <Inventory className="sidenavIcon" />
              Transaction
            </li>
          </ul>
        </div>


        <div className="sideNavMenu">
          <h3 className="sideNavTitle">Notification</h3>
          <ul className="sideNavList">
            <li className="sideNavListItem">
              <Email className="sidenavIcon" />
              Email
            </li>
            <li className="sideNavListItem">
              <ChatBubble className="sidenavIcon" />
              Masssages
            </li>
            <li className="sideNavListItem">
              <Grading className="sidenavIcon" />
              Manage
            </li>
          </ul>
        </div>


        <div className="sideNavMenu">
          <h3 className="sideNavTitle">Our Staff</h3>
          <ul className="sideNavList">
            <li className="sideNavListItem">
              <ManageAccounts className="sidenavIcon" />
              Home
            </li>
            <li className="sideNavListItem">
              <Analytics className="sidenavIcon" />
              Analytics
            </li>
            <li className="sideNavListItem">
              <Report className="sidenavIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
