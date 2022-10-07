import React from "react";
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
  ParagraphOne,
  ParagraphTwo,
  SmallOne,
  SmallTwo,
} from "./TypographyStyle";

const index = ({
  variant,
  weight,
  align,
  className,
  style,
  children,
  ...props
}) => {
  return variant === "h1" ? (
    <HeadingOne
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </HeadingOne>
  ) : variant === "h2" ? (
    <HeadingTwo
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </HeadingTwo>
  ) : variant === "h3" ? (
    <HeadingThree
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </HeadingThree>
  ) : variant === "h4" ? (
    <HeadingFour
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </HeadingFour>
  ) : variant === "h5" ? (
    <HeadingFive
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </HeadingFive>
  ) : variant === "h6" ? (
    <HeadingSix
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </HeadingSix>
  ) : variant === "p1" ? (
    <ParagraphOne
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </ParagraphOne>
  ) : variant === "p2" ? (
    <ParagraphTwo
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </ParagraphTwo>
  ) : variant === "small1" ? (
    <SmallOne
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </SmallOne>
  ) : variant === "small2" ? (
    <SmallTwo
      align={align}
      className={className}
      style={style}
      weight={weight}
      {...props}
    >
      {children}
    </SmallTwo>
  ) : (
    <>{children}</>
  );
};

export default index;
