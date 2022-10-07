import React from "react";
import { ButtonStyle } from "./ButtonStyle";

const index = ({
  label,
  type = "solid",
  size,
  color = "primary",
  showIcon = "none",
  icon = null,
  block = false,
  state = "",
  className = "",
  onClick,
  style,
  ...props
}) => {
  return (
    <>
      <ButtonStyle
        type={type}
        size={size}
        color={color}
        showIcon={showIcon}
        state={state}
        block={block}
        style={style}
        className={className}
        onClick={onClick}
        {...props}
      >
        {showIcon === "left" && <span style={{ paddingRight: 5 }}>{icon}</span>}
        {label}
        {showIcon === "right" && <span style={{ paddingLeft: 5 }}>{icon}</span>}
      </ButtonStyle>
    </>
  );
};

export default index;
