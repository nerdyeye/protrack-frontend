import styled from "styled-components";
import { InputStyle } from "../../atoms/Input/InputStyle";

export const FormWrapper = styled.div`
  display: flex;
`;
export const FormContent = styled.div`
  flex: 70%;
  text-align: center;
  margin-top: 40px;
`;
export const FormLine = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
  ${InputStyle} {
    width: 50%;
    height: 50px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
    ${InputStyle} {
      width: 100%;
    }
  }
`;
export const SidePic = styled.div`
  flex: 30%;
  background-size: cover !important;
  width: 100%;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
