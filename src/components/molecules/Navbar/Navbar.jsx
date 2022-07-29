import React, { useState} from 'react'
import { NavbarContainer, 
  LeftContainer, 
  NavLink, 
  RightContainer, 
  NavButton, 
  NavButtonExtendContainer,
  NavLinkExtended,
  NavLinkExtendedbtn
} from './Navbar.stlye'
import * as Icon from 'react-feather';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Navbar = () => {

    const [extendNavButton, setExtendNavButton ] = useState(false);

  return (
    <div>
        <NavbarContainer extendNavButton={extendNavButton}>
            <LeftContainer to="/home">
                LOGO
            </LeftContainer>

            <div>
                <NavLink to="/feature">Features</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>   
            </div>

            <RightContainer>
                <p>Sign Up</p>
            </RightContainer>

            <NavButton 
              onClick={() =>{
                setExtendNavButton ((currentValue) => !currentValue);
              }}
            >
              {extendNavButton ? <>&#10005;</> : <>&#8801;</>} 
            </NavButton>

        </NavbarContainer>

        {/* The icons would change once we the feather icon website is available */}

        { extendNavButton &&(
          <NavButtonExtendContainer>
            <NavLinkExtended to="/home"><Icon.Camera  style={{marginRight: "8px"}}/>Home</NavLinkExtended>
            <NavLinkExtended to="/tasks"><Icon.Camera  style={{marginRight: "8px"}}/>Tasks</NavLinkExtended>
            <NavLinkExtended to="/members"><Icon.Camera  style={{marginRight: "8px"}}/>Members</NavLinkExtended>
            <NavLinkExtended to="reports"><Icon.Camera  style={{marginRight: "8px"}}/>Reports</NavLinkExtended>
            <hr />
            <NavLinkExtended to="messages"><Icon.Camera  style={{marginRight: "8px"}}/>Messages</NavLinkExtended>
            <NavLinkExtended to="settings"><Icon.Camera  style={{marginRight: "8px"}}/>Settings</NavLinkExtended>
            <NavLinkExtended to="help"><Icon.Camera  style={{marginRight: "8px"}}/>Help</NavLinkExtended>
            <NavLinkExtendedbtn>Sign Out</NavLinkExtendedbtn>
          </NavButtonExtendContainer>
        )}
    </div>
    
  )
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;


export default Navbar;