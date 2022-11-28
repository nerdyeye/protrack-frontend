import styled from "styled-components";
import { Grey } from "../../../helpers/Colors";
import { ButtonStyle } from "../../atoms/Button/ButtonStyle";
import { InputStyle, TextAreaStyle } from "../../atoms/Input/InputStyle";

export const Contactpage = styled.div`
  color: ${Grey[800]};
  display: flex;
`;

export const ContactHolder = styled.div`
  flex: 70%;
  justify-content: center;
  padding: 0 15%;

  ${ButtonStyle} {
    margin: 20px 0;
    width: 30%;
  }

  @media (max-width: 768px) {
    padding: 0 2%;

    ${ButtonStyle} {
      margin: 20px 0;
      width: 100%;
    }
  }
`;

export const ContactInput = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
  > div {
    color: ${Grey[400]};
    flex-direction: column;
    width: 50%;
  }
  ${InputStyle} {
    width: 100%;
    height: 60px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
    > div {
      width: 100%;
    }
    ${InputStyle} {
      width: 100%;
    }
  }
`;
export const ContactTextArea = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;
  > div {
    color: ${Grey[400]};
    flex-direction: column;
    width: 100%;
  }
  ${TextAreaStyle} {
    width: 100%;
  }
`;
