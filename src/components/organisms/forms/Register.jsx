import React from "react";
import Typography from "../../atoms/Typography";
import {
  FormContent,
  FormLine,
  FormWrapper,
  SocialIconBg,
  SidePic,
  SocialIcon,
} from "./FormStyle";
import Teampic from "../../../assets/images/teamoffice.jpg";
import { Input } from "../../atoms/Input";
import { Grey, Primary } from "../../../helpers/Colors";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { Container } from "../../../helpers/Container";
import { InputLabel } from "@mui/material";

const Register = () => {
  return (
    <>
      <FormWrapper>
        <FormContent>
          <Container>
            <Typography variant="h1" weight={"bold"} color={Grey[800]}>
              Welcome to Protrack
            </Typography>
            <Typography variant="p1" color={Grey[800]}>
              Get the best out of yourself, your team and organization.
            </Typography>
            <FormLine>
              <div>
                <InputLabel style={{ float: "left" }}>Full Name</InputLabel>
                <Input placeholder="Jane Doe" />
              </div>
              <div>
                <InputLabel style={{ float: "left" }}>Phone Number</InputLabel>
                <Input placeholder="+2348070987654" type="tel" />
              </div>
            </FormLine>
            <FormLine>
              <div>
                <InputLabel style={{ float: "left" }}>Email</InputLabel>
                <Input placeholder="email address" type="email" />
              </div>
              <div>
                <InputLabel style={{ float: "left" }}>Password</InputLabel>
                <Input placeholder="password" type="password" />
              </div>
            </FormLine>
            <Typography variant="small1" style={{ textAlign: "right" }}>
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: `${Primary[500]}`,
                }}
              >
                Forgot Password?
              </Link>
            </Typography>
            <Button
              label="Sign Up"
              size="large"
              weight="semibold"
              style={{ width: "100%", margin: "15px 0" }}
            />

            <Typography variant="p2">Or sign up with</Typography>
            <SocialIcon>
              <SocialIconBg></SocialIconBg>
              <SocialIconBg></SocialIconBg>
              <SocialIconBg></SocialIconBg>
            </SocialIcon>
            <Typography variant="p2">
              Already have an account?{" "}
              <Link
                to="#"
                style={{
                  textDecoration: "none",
                  color: `${Primary[500]}`,
                  fontWeight: "700",
                }}
              >
                sign in
              </Link>
            </Typography>
          </Container>
        </FormContent>
        <SidePic style={{ backgroundImage: `url(${Teampic})` }}></SidePic>
      </FormWrapper>
    </>
  );
};

export default Register;
