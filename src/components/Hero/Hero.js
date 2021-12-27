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
        Hi, my name is Hussein B. Fawaz .<br></br>A Full Stack Developer .<br></br> I live in Lebanon and currently studying master's in computer science at Lebanese University.
        </SectionText>
        
        <Button  onClick={(e) => {
      e.preventDefault();
      window.location.href='https://drive.google.com/file/d/16ecCgSDIUT8Gc9qN2GfSfCGPtYfP9AEh/view?usp=sharing';
      }} >My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
