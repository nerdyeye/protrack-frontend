import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../helpers/Container";
import Button from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import Typography from "../../atoms/Typography";
import { Logo } from "../Navbar/NavbarStyle";
import {
  FooterBase,
  FooterMain,
  FooterWrapper,
  FooterCol,
  FooterLinks,
  FooterMenu,
  InputWrapper,
  IconBg,
  FooterIconWrap,
} from "./FooterStyle";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container>
          <FooterMain>
            <FooterCol>
              <Logo style={{ color: "#fff" }}>Protrack </Logo>
              <Typography variant="p2">
                Get the best out of yourself, your team and organization
              </Typography>
            </FooterCol>
            <FooterCol>
              <FooterMenu>
                <FooterLinks>
                  <Link to="/about">About</Link>
                </FooterLinks>
                <FooterLinks>
                  <Link to="#">Pricing</Link>
                </FooterLinks>
                <FooterLinks>
                  <Link to="#">Features</Link>
                </FooterLinks>
                <FooterLinks>
                  <Link to="/contact">Contact</Link>
                </FooterLinks>
                <FooterLinks>
                  <Link to="#">Support</Link>
                </FooterLinks>
              </FooterMenu>
            </FooterCol>
            <FooterCol>
              <Typography variant="p2"> Stay in the loop with us</Typography>
              <InputWrapper>
                <Input placeholder="enter your email address" />
                <Button size="large" label="Submit" />
              </InputWrapper>
            </FooterCol>
          </FooterMain>
        </Container>

        <FooterBase>
          <Container>
            <FooterMain>
              <FooterCol>
                <Typography variant="p2">
                  &copy; 2022 Protrack. All right reserved
                </Typography>
              </FooterCol>
              <FooterCol>
                <FooterIconWrap>
                  <IconBg>
                    <FeatherIcon icon="facebook" />{" "}
                  </IconBg>
                  <IconBg>
                    {" "}
                    <FeatherIcon icon="instagram" />
                  </IconBg>
                  <IconBg>
                    {" "}
                    <FeatherIcon icon="linkedin" />
                  </IconBg>
                </FooterIconWrap>
              </FooterCol>
              <FooterCol>
                <Typography style={{ float: "right" }} variant="p2">
                  Powered by Dungada Tech Ltd.
                </Typography>
              </FooterCol>
            </FooterMain>
          </Container>
        </FooterBase>
      </FooterWrapper>
    </>
  );
};

export default Footer;
