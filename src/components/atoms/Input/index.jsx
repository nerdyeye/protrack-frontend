import React from "react";
import { InputStyle, TextAreaStyle } from "./InputStyle";

export const Input = ({ size, state, ...props }) => (
  <InputStyle state={state} size={size} {...props} />
);

export const TextArea = ({ state, size, children, ...props }) => (
  <TextAreaStyle state={state} size={size} {...props}>
    {children}
  </TextAreaStyle>
);
