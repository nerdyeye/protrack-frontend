import React from "react";
import Typography from "../../atoms/Typography";
import { FormContent, FormLine, FormWrapper, SidePic } from "./FormStyle";
import Teampic from "../../../assets/images/teamoffice.jpg";
import { Input } from "../../atoms/Input";
import { Grey, Primary } from "../../../helpers/Colors";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { Container } from "../../../helpers/Container";

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
              <Input placeholder="Jane Doe" Label="Fullname" />
              <Input placeholder="+2348070987654" type="tel" />
            </FormLine>
            <FormLine>
              <Input placeholder="email address" Label="" type="email" />
              <Input placeholder="password" type="password" />
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
          </Container>
        </FormContent>
        <SidePic style={{ backgroundImage: `url(${Teampic})` }}></SidePic>
      </FormWrapper>
    </>
  );
};

export default Register;
