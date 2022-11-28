import React from "react";
import Typography from "../../atoms/Typography";
import { AboutHeadings, AboutText } from "./AboutStyle";
import { Col, Container, Row } from "../../../helpers/Container";
import { LeftSideImg, RightSideImg } from "../Home/HomeStyle";
import abouthero from "../../../assets/images/team_high_five.jpeg";
const About = () => {
  return (
    <>
      <div className="about">
        <AboutHeadings>
          <Typography variant="h1" weight="bold">
            ABOUT US
          </Typography>
          <Typography variant="h5">
            Compare all plans feature by feature
          </Typography>
        </AboutHeadings>
        <section>
          <Container>
            <Row>
              <Col>
                <RightSideImg
                  style={{ backgroundImage: `url(${abouthero})` }}
                ></RightSideImg>
              </Col>
              <Col>
                <AboutText>
                  <Typography variant="h3" weight="semi-bold">
                    OUR VISION
                  </Typography>
                  <Typography variant="p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                    purus, molestie elit senectus feugiat tellus imperdiet
                    pretium. Feugiat consectetur odio praesent aliquam. Commodo
                    neque dui consectetur dignissim nisl libero neque
                    scelerisque non. Elementum sem pellentesque nulla pretium
                    sem a sed hendrerit porttitor. Nulla cum.
                  </Typography>
                </AboutText>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col>
                <LeftSideImg
                  style={{ backgroundImage: `url(${abouthero})` }}
                ></LeftSideImg>
              </Col>
              <Col>
                <AboutText>
                  <Typography variant="h3" weight="semi-bold">
                    OUR APPROACH
                  </Typography>
                  <Typography variant="p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                    purus, molestie elit senectus feugiat tellus imperdiet
                    pretium. Feugiat consectetur odio praesent aliquam. Commodo
                    neque dui consectetur dignissim nisl libero neque
                    scelerisque non. Elementum sem pellentesque nulla pretium
                    sem a sed hendrerit porttitor. Nulla cum.
                  </Typography>
                </AboutText>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col>
                <RightSideImg
                  style={{ backgroundImage: `url(${abouthero})` }}
                ></RightSideImg>
              </Col>
              <Col>
                <AboutText>
                  <Typography variant="h3" weight="semi-bold">
                    OUR PROCESS
                  </Typography>
                  <Typography variant="p1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                    purus, molestie elit senectus feugiat tellus imperdiet
                    pretium. Feugiat consectetur odio praesent aliquam. Commodo
                    neque dui consectetur dignissim nisl libero neque
                    scelerisque non. Elementum sem pellentesque nulla pretium
                    sem a sed hendrerit porttitor. Nulla cum.
                  </Typography>
                </AboutText>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default About;
