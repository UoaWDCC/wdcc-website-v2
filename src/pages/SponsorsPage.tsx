import React from 'react';
import NavBar from '../components/NavBar';
import Screen from '../components/Screen';
import Footer from '../components/Footer';

function SponsorsPage() {
  return (
    <>
      <NavBar hasBg={true} />
      <Screen>
        <h1>Sponsor</h1>
      </Screen>
      <Footer />
    </>
  );
}

export default SponsorsPage;