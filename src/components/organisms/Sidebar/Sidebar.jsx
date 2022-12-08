import React from "react";
import { Link } from "react-router-dom";
import { Grey } from "../../../helpers/Colors";
import Button from "../../atoms/Button";
import { Logo } from "../Navbar/NavbarStyle";
import {
  SideContainer,
  SideMenu,
  SideMenuList,
  SideWrapper,
} from "./SidebarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHomeAlt,
  faHomeLg,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../../../assets/icon";

function Sidebar() {
  return (
    <>
      <SideContainer>
        <SideWrapper>
          <Logo>
            <Link to="/">ProTrack</Link>
          </Logo>

          <SideMenu>
            <ul>
              <SideMenuList>
                {" "}
                <Icon.Home width={24} /> Home
              </SideMenuList>
              <SideMenuList>
                <Icon.Timer width={24} /> Task
              </SideMenuList>
              <SideMenuList>
                <Icon.People width={24} /> Members
              </SideMenuList>
              <SideMenuList>
                <Icon.Sms width={24} /> Report
              </SideMenuList>
              <SideMenuList>
                <Icon.Message width={24} /> Messages
              </SideMenuList>
              <hr style={{ color: `${Grey[50]}`, width: "100%" }} />
              <SideMenuList>
                <Icon.Setting width={24} /> Settings
              </SideMenuList>
              <SideMenuList>
                <Icon.Support width={24} /> Help
              </SideMenuList>
            </ul>
            <Button
              label="Sign Out"
              size="large"
              weight="semi-bold"
              style={{ width: "100%" }}
            />
          </SideMenu>
        </SideWrapper>
      </SideContainer>
    </>
  );
}

export default Sidebar;
