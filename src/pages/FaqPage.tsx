import React from 'react';
import Faq from 'react-faq-component';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Screen from '../components/Screen';
import Footer from '../components/Footer';

const Container = styled.div`
  h2 {
    margin-bottom: 20px;
  }
  max-width: 1200px;
  margin: 50px auto;
`;

const data = {
  title: 'Frequently Asked Questions',
  rows: [
    {
      title: 'What do we do?',
      content: `We are a student led club that caters to all UoA students! We have a core focus on web development as well as 
        some areas of tech consulting. Click the join button in the top nav to stay up to date with our events and initiatives for 2022.`,
    },
    {
      title: 'What can you do within this club?',
      content: `Our club hosts multiple pro-bono projects each year which you are able to sign up for by becoming a member. We also host web development technology workshops, social events and competitions throughout the year.`,
    },
    {
      title: 'What are our projects?',
      content: `WDCC projects are student teams that develop web solutions using React/Vue/other web technologies, we learn all sorts of new tech and 
        contribute to a project you can showcase. These projects may involve building a website for a third party organisation or other university clubs. 
        Sign ups are early semester 1 (around Week 3) and you can get an idea of what projects are 
        available at our annual Projects Night/Showcase in Semester 1 `,
    },
    {
      title: 'What workshops do we host?',
      content: `Workshops events focus on web dev fundamental skills such as HTML/CSS/React. We'll have plenty plenty of mentors to help out along the way so come along if even if you're a bit unsure of your skill level!`,
    },
    {
      title: 'What are WDCC events?',
      content: `We host a few events throughout the year, these include the annual WDCC hackathon, social events, as well as tech consulting competitions all coming
        this year!`,
    },
    {
      title: 'How do I join the exec team?',
      content: `We will hold a BAGM (Biannual General Meeting) in July and November. This is a chance to give a speech and you can be voted in to join our exec team.`,
    },
  ],
};

const styles = {
  bgColor: 'white',
  titleTextColor: 'rgb(29, 96, 157)',
  rowTitleColor: '#444',
  rowContentColor: 'grey',
  rowContentPaddingBottom: '50px'
  // arrowColor: 'red',
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

function FAQPage() {
  return (
    <>
      <NavBar hasBg={true} />
      <Screen>
        <Container>
          <Faq data={data} styles={styles} config={config} />
        </Container>
      </Screen>
      <Footer />
    </>
  );
}

export default FAQPage;
