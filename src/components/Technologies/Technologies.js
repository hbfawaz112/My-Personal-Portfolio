import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAndroid ,DiPython } from 'react-icons/di';
import { BsDisplay } from 'react-icons/bs';
import { BiBrain } from 'react-icons/bi';
import {GiBrain} from 'react-icons/gi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development from backend to frontend , 
      mobile app development to desktop applications.
<br /><br />
    <ListTitle>Programming languages  </ListTitle>C/C++  -  Java  - Python  -  C#  -  PHP - JavaScript - Dart - SQL . 
    
      
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML5 - CSS3 - Bootstrap  JavaScript - JQuery - Reactjs - Vuejs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End And Data Bases</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django and Djago Rest Framework - PHP - ASP.NET C# - Nodejs.
            <br />
            Microsoft SQL Server - MySQL - MongoDB - Firebase(Real Time DB and Firestore)
         
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiAndroid size="5rem" />
        
                  </picture>
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            native android development using Java and cross platform mobile applications using Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <BsDisplay size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Desktop Application Development </ListTitle>
          <ListParagraph>
            Experience with <br />
            Java Swing - JavaFX - Windows C#.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      
      

    </List>
    
  </Section>
);

export default Technologies;
