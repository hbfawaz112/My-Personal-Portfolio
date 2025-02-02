import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi, my name is Hussein B. Fawaz .<br></br>A Full Stack Developer at Aphelio - Grenoble .<br></br> I live in France and currently studying master's in computer science at Lebanese University.
        </SectionText>
        
        <Button  onClick={(e) => {
      e.preventDefault();
      window.location.href='https://drive.google.com/file/d/1CTWOww5e7KFebWsLJuccSC69_GM-t3yR/view?usp=sharing';
      }} >My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
