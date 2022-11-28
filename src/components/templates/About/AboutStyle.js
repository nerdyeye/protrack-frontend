import styled from "styled-components";
import { Grey } from "../../../helpers/Colors";

export const AboutText = styled.div`
  color: ${Grey[800]};
  padding-top: 200px;
  line-height: 30px;

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;
export const AboutHeadings = styled.div`
  text-align: center;
  padding-top: 50px;
  @media (max-width: 768px) {
  }
`;
