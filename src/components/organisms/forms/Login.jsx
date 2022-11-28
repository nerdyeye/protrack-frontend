import React from "react";
import { Container } from "../../../helpers/Container";
import {
  FormContent,
  FormWrapper,
  SidePic,
  FormLine,
  SocialIconBg,
  SocialIcon,
} from "./FormStyle";
import Typography from "../../atoms/Typography";
import Teampic from "../../../assets/images/teamoffice.jpg";
import { Input } from "../../atoms/Input";
import { Grey, Primary } from "../../../helpers/Colors";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import { Checkbox, FormControlLabel, InputLabel } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebookF,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";

const Login = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Incorrect email format";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
  });
  return (
    <>
      <FormWrapper>
        <FormContent>
          <Container>
            <Typography variant="h1" weight={"bold"} color={Grey[800]}>
              Sign In
            </Typography>
            <Typography variant="p1" color={Grey[800]}>
              Get the best out of yourself, your team and organization.
            </Typography>
            <form>
              <FormLine>
                <div>
                  <InputLabel style={{ float: "left" }}>Email</InputLabel>
                  <Input
                    placeholder="email address"
                    type="email"
                    id="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <InputLabel style={{ float: "left" }}>Password</InputLabel>
                  <Input
                    placeholder="password"
                    type="password"
                    id="password"
                    value={formik.values.paasword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </div>
              </FormLine>
              <Button
                label="Sign In"
                size="large"
                weight="semibold"
                style={{ width: "100%", margin: "25px 0" }}
                type="submit"
              />
            </form>
            <FormControlLabel
              style={{
                float: "left",
                color: `${Grey[500]}`,
              }}
              control={<Checkbox style={{ color: `${Primary[400]}` }} />}
              label="Remember me"
            />

            <Typography variant="p2" style={{ paddingTop: "50px" }}>
              Or sign in with
            </Typography>
            <SocialIcon>
              <SocialIconBg>
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </SocialIconBg>
              <SocialIconBg>
                {" "}
                <FontAwesomeIcon
                  icon={faApple}
                  size="2x"
                  color={`${Grey[600]}`}
                />{" "}
              </SocialIconBg>
              <SocialIconBg>
                {" "}
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </SocialIconBg>
            </SocialIcon>
            <Typography variant="p2">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: `${Primary[500]}`,
                  fontWeight: "700",
                }}
              >
                sign up
              </Link>
            </Typography>
          </Container>
        </FormContent>
        <SidePic style={{ backgroundImage: `url(${Teampic})` }}></SidePic>
      </FormWrapper>
    </>
  );
};

export default Login;
