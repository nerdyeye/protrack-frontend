import styled from "styled-components";

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

export const HeadingOne = styled.h1`
  font-size: 32px;
  ${(props) => props.style}
  font-weight: ${fontWeight};
  font-family: "sora", cursive;
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const HeadingTwo = styled.h2`
  font-size: 28px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
  text-transform: capitalize;
`;

export const HeadingThree = styled.h3`
  font-size: 24px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const HeadingFour = styled.h4`
  font-size: 22px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
  margin: 0px;
`;

export const HeadingFive = styled.h5`
  font-size: 20px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const HeadingSix = styled.h5`
  font-size: 18px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const ParagraphOne = styled.p`
  font-size: 16px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const ParagraphTwo = styled.p`
  font-size: 14px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const SmallOne = styled.p`
  font-size: 12px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;

export const SmallTwo = styled.p`
  font-size: 10px;
  ${(props) => props.style}
  font-weight: ${(props) => fontWeight(props)};
  text-align: ${(props) => (props.align ? props.align : "inherit")};
`;
