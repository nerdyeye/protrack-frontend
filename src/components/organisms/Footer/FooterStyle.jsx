import styled from "styled-components";
import { Primary, Grey } from "../../../helpers/Colors";
import { InputStyle } from "../../atoms/Input/InputStyle";

export const FooterWrapper = styled.section`
  background: ${Primary[500]};
  color: #fff;
`;
export const FooterMain = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FooterBase = styled.div`
  background: ${Primary[600]};
`;
export const FooterCol = styled.div`
  flex: 1;
  padding: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FooterMenu = styled.ul`
  list-style: none;
  @media (max-width: 768px) {
    float: left;
  }
`;
export const FooterLinks = styled.li`
  display: block;
  text-align: center;
  padding: 10px 0px;
  > a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${Grey[50]};
  border-radius: 30px;
  height: 50px;
  padding: 3px;
  ${InputStyle} {
    background: none;
    ::placeholder {
      color: ${Grey[400]};
    }
    &:focus {
      outline: 0;
    }
    @media (max-width: 768px) {
      height: 40px;
      ${InputStyle} {
        height: 40px;
      }
    }
  }
`;

export const FooterIconWrap = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: center;
`;
export const IconBg = styled.div`
  display: block;
  background: #fff;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  color: ${Primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
