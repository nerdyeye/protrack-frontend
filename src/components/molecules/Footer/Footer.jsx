import React from 'react'
import { Section, FooterSection, Wrapper, FooterItem, FooterColumn, FooterForm, FooterButton, FooterBox, FooterBoxItem, FooterBoxColumn, FooterSocials, FooterRights, FooterDungada, LinkWrapper, FooterMobile} from './FooterStyle'
import { HeadingOne, Paragraph, } from '../../atoms/Text'
import { Input } from '../../atoms/Inputs'
import { pri50 } from '../../../helpers/Colors'
import { Button } from '../../atoms/Buttons'
import { Link } from 'react-router-dom'
import FacebookIcon from '../../../helpers/Icon/FacebookIcon'
import InstagramIcon from '../../../helpers/Icon/InstagramIcon'
import LinkedinIcon from '../../../helpers/Icon/LinkedinIcon'


function Footer() {
  return (
    <Section>
      <FooterSection>
        <Wrapper>
          <FooterItem style={{color: pri50}}>
           <FooterColumn>
            <HeadingOne>LOGO</HeadingOne>
            <Paragraph>Get the best out of yourself, your team and organization</Paragraph>
           </FooterColumn>
           <FooterColumn>
            <Paragraph><LinkWrapper><Link to='#'>About</Link></LinkWrapper></Paragraph>
            <Paragraph><LinkWrapper><Link to='#'>Pricing</Link></LinkWrapper></Paragraph>
            <Paragraph><LinkWrapper><Link to='#'>Features</Link></LinkWrapper></Paragraph>
            <Paragraph><LinkWrapper><Link to='#'>Support</Link></LinkWrapper></Paragraph>
            <Paragraph><LinkWrapper><Link to='#'>Contact</Link></LinkWrapper></Paragraph>
           </FooterColumn>
           <FooterColumn>
            <Paragraph>Stay in the loop with us</Paragraph>
            <FooterForm >
              <Input placeholder="Enter Email Address" style={{width: '100%', boxSizing:'border-box', position: 'relative'}} />
              <FooterButton>
                <Button>Submit</Button>
              </FooterButton>
            </FooterForm>
           </FooterColumn>
          </FooterItem>
        </Wrapper>
        <br />
        <FooterMobile>
          <Wrapper>
            <Paragraph>&copy; 2022 Protrack.All right reserved.</Paragraph>
            <Paragraph>Powered by Dungada Tech LTD.</Paragraph>
          </Wrapper>
        </FooterMobile>
        <br />
      </FooterSection> 
      <FooterBox>
          <Wrapper>
            <FooterBoxItem style={{color: pri50}}>
              <FooterBoxColumn>
                <FooterRights>
                  <Paragraph>&copy; 2022 Protrack.All right reserved.</Paragraph>
                </FooterRights>
              </FooterBoxColumn>
              <FooterBoxColumn style={{display: 'inline-flex', justifyContent: 'center'}}>
                <FooterSocials style={{marginRight: '10px'}}><LinkWrapper><Link to='#'><FacebookIcon /></Link></LinkWrapper></FooterSocials>
                <FooterSocials style={{marginRight: '10px'}}><LinkWrapper><Link to='#'><InstagramIcon /></Link></LinkWrapper></FooterSocials>
                <FooterSocials><LinkWrapper><Link to='#'><LinkedinIcon /></Link></LinkWrapper></FooterSocials>
              </FooterBoxColumn>
              <FooterBoxColumn>
                <FooterDungada>
                  <Paragraph>Powered by Dungada Tech LTD.</Paragraph>
                </FooterDungada>
              </FooterBoxColumn>
            </FooterBoxItem>
          </Wrapper>
        </FooterBox>  
    </Section>
  )
}


export default Footer;
