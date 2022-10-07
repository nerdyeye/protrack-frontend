import styled from "styled-components";
import {
  Primary,
  Sec,
  Success,
  Info,
  Err,
  Warn,
  Grey,
} from "../../../helpers/Colors";

const regular = 400;
const semiBold = 600;
const bold = 700;

const fontWeight = (props) => {
  return props.weight === "semi-bold"
    ? semiBold
    : props.weight === "bold"
    ? bold
    : regular;
};

export const ButtonStyle = styled.button`
  font-size: ${(props) =>
    props.size === "large" ? "20px" : props.size === "small" ? "12px" : "16px"};
  font-weight: ${fontWeight};
  cursor: pointer;
  border-radius: 30px;
  padding: ${(props) =>
    props.size === "large"
      ? "15px 25px"
      : props.size === "small"
      ? "5px 10px"
      : "10px 15px"};

  color: ${(props) =>
    props.type !== "outline" && props.type !== "text"
      ? "#fff"
      : props.color === "secondary"
      ? Sec[500]
      : props.color === "success"
      ? Success[500]
      : props.color === "warning"
      ? Warn[500]
      : props.color === "error"
      ? Err[500]
      : props.color === "info"
      ? Info[500]
      : props.color === "grey"
      ? Grey[500]
      : props.type === "outline" || props.type === "text"
      ? Primary[500]
      : "#fff"};

  border: ${(props) =>
    props.type === "outline"
      ? `2px solid 
    ${
      props.color === "secondary"
        ? Sec[500]
        : props.color === "success"
        ? Success[500]
        : props.color === "warning"
        ? Warn[500]
        : props.color === "error"
        ? Err[500]
        : props.color === "info"
        ? Info[500]
        : props.color === "grey"
        ? Grey[500]
        : Primary[500]
    }`
      : "none"};

  background: ${(props) =>
    props.type === "outline" || props.type === "text"
      ? "none"
      : props.color === "secondary"
      ? Sec[500]
      : props.color === "success"
      ? Success[500]
      : props.color === "warning"
      ? Warn[500]
      : props.color === "error"
      ? Err[500]
      : props.color === "info"
      ? Info[500]
      : props.color === "grey"
      ? Grey[500]
      : Primary[500]};

  &:hover {
    background: ${(props) =>
      props.type === "outline" || props.type === "text"
        ? "none"
        : props.color === "secondary"
        ? Sec[700]
        : props.color === "success"
        ? Success[700]
        : props.color === "warning"
        ? Warn[700]
        : props.color === "error"
        ? Err[700]
        : props.color === "info"
        ? Info[700]
        : props.color === "grey"
        ? Grey[700]
        : Primary[700]};
    cursor: pointer;
    border: ${(props) =>
      props.type === "outline"
        ? `2px solid 
            ${
              props.color === "secondary"
                ? Sec[700]
                : props.color === "success"
                ? Success[700]
                : props.color === "warning"
                ? Warn[700]
                : props.color === "error"
                ? Err[700]
                : props.color === "info"
                ? Info[700]
                : props.color === "grey"
                ? Grey[700]
                : Primary[700]
            }`
        : "none"};
    color: ${(props) =>
      props.type !== "outline" && props.type !== "text"
        ? "#fff"
        : props.color === "secondary"
        ? Sec[700]
        : props.color === "success"
        ? Success[700]
        : props.color === "warning"
        ? Warn[700]
        : props.color === "error"
        ? Err[700]
        : props.color === "info"
        ? Info[700]
        : props.color === "grey"
        ? Grey[700]
        : props.type === "outline" || props.type === "text"
        ? Primary[700]
        : "#fff"};
  }

  ${(props) => props.sx}
`;
