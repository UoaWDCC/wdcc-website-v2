import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IndexPage from './IndexPage';
import AboutPage from './AboutPage';
import SponsorsPage from './SponsorsPage';
import FaqPage from './FaqPage';

function Redirect({ redirectUrl }: { redirectUrl: string }) {
  useEffect(() => {
    window.location.href = redirectUrl;
  }, [redirectUrl]);

  return <></>;
}

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={IndexPage} />
        <Route exact path={'/about'} component={AboutPage} />
        <Route exact path={'/sponsors'} component={SponsorsPage} />
        <Route exact path={'/faq'} component={FaqPage} />
        <Route exact path={'/expo'}>
          <Redirect redirectUrl={'https://auckland.zoom.us/j/98145219755?pwd=c01iS0ZuMWFGc250OWJUa1BLeVkydz09'} />
        </Route>

        {/* Default path if nothing matches */}
        <Route path={'/'} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
