import styled from "styled-components";
import { Success, Err, Info, Grey } from "../../helpers/Colors";

export const Input = styled.input`
  width: 50%;
  padding: 20px 24px;
  border-radius: 30px;
  color: ${Grey[400]};

  background-color: ${(props) =>
    props.status !== "error" && props.status !== "success"
      ? Grey[50]
      : props.status === "error"
      ? Err[50]
      : props.status === "success"
      ? Success[50]
      : Grey[50]};

  border: ${(props) => `2px solid
    ${
      props.status !== "error" &&
      props.status !== "success" &&
      props.status !== "disabled"
        ? "#fff"
        : props.status === "disabled"
        ? Grey[500]
        : props.status === "success"
        ? Success[500]
        : props.status === "error"
        ? Err[500]
        : "#fff"
    }`};

  &:hover {
    border: ${(props) =>
      `2px solid ${
        props.status !== "error" &&
        props.status !== "success" &&
        props.status !== "disabled"
          ? Info[500]
          : props.status === "error"
          ? Err[500]
          : props.status === "success"
          ? Success[500]
          : props.status === "disabled"
          ? Grey[500]
          : Info[500]
      }`};
  }
`;

export const PasswordInput = styled(Input).attrs({
  type: "password",
})``;
