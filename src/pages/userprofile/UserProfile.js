import React from "react";
import {
  PermIdentity,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
  EmailOutlined,
} from "@mui/icons-material";
import "./userProfile.css";
import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <div className="profileTopContainer">
      <div className="profileTitleContainer">
        <h1 className="profileTitle">Edit Profile</h1>
        <Link to="/createuser">
          <button className="profileAddButton">Create User</button>
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileShow">
          <div className="profileShowTop">
            <img
              src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg"
              className="profileShowImg"
              alt="internet issue"
            />
            <div className="profileDetails">
              <span className="myProfileName">Daisy Dominic</span>
              <span className="myProfileTitle">React Dev</span>
            </div>
          </div>
          <div className="profileShowBottom">
            <span className="profileShowTitle">Account Details</span>
            <div className="ProfileShowInfo">
              <PermIdentity className="profileShowIcon" />
              <span className="profileShowInfoTitle">Daisy123</span>
            </div>
            <div className="ProfileShowInfo">
              <CalendarToday className="profileShowIcon" />
              <span className="profileShowInfoTitle">12 Dec 2023</span>
            </div>
            <div className="ProfileShowInfo">
              <PhoneAndroid className="profileShowIcon" />
              <span className="profileShowInfoTitle">+62 8522-9852-****</span>
            </div>
            <div className="ProfileShowInfo">
              <EmailOutlined className="profileShowIcon" />
              <span className="profileShowInfoTitle">Daisy123@gmail.com</span>
            </div>
            <div className="ProfileShowInfo">
              <LocationSearching className="profileShowIcon" />
              <span className="profileShowInfoTitle">Jakarta City</span>
            </div>
          </div>
        </div>

        <div className="profileUpdate">
          <span className="profileUpdateTitle"></span>
          <form className="profileUpdateForm">
            <div className="profileUpdateLeft">
              <div className="profileUpdateItem">
                <label>Profile name</label>
                <input
                  type="text"
                  placeholder="daisy1234"
                  className="profileUpdateInput"
                ></input>
              </div>
              <div className="profileUpdateItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="daisy1234"
                  className="profileUpdateInput"
                ></input>
              </div>
              <div className="profileUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="daisy1234"
                  className="profileUpdateInput"
                ></input>
              </div>
              <div className="profileUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="daisy1234"
                  className="profileUpdateInput"
                ></input>
              </div>
              <div className="profileUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="daisy1234"
                  className="profileUpdateInput"
                ></input>
              </div>
            </div>

            <div className="profileUpdateRight">
              <div className="profileUpdateUpload">
                <img
                  src="https://dominicrussel.com/authors/admin/avatar_hu8d30e29128cae2b0d49276543cea6665_24055_250x250_fill_q90_lanczos_center.jpg"
                  className="profileUpdateImg"
                  alt="internet issue"
                />
                <label htmlFor="file">
                  <Publish className="profileUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></input>
              </div>
              <button className="profileUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
