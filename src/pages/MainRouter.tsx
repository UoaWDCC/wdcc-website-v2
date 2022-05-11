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
        <Route exact path={'/team'} component={AboutPage} />
        <Route exact path={'/sponsors'} component={SponsorsPage} />
        <Route exact path={'/faq'} component={FaqPage} />
        <Route exact path={'/discord'}>
          <Redirect redirectUrl={'https://discord.gg/9AC6xeXXzu'} />
        </Route>
        <Route exact path={'/vista-consulting-comp'}>
          <Redirect redirectUrl={'https://fb.me/e/1KsGCuIMD'} />
        </Route>
        <Route exact path={'/vista-workshop-recording'}>
          <Redirect redirectUrl='https://vimeo.com/sppraxmedia/review/708541171/1206cd70d1' />
        </Route>
        <Route exact path={'/vista-case-release'}>
          <Redirect redirectUrl={'https://drive.google.com/drive/folders/1H5O9Jb4iAQN2-7XCOEDSgu1EGqj7RJlh?usp=sharing'} />
        </Route>

        {/* Default path if nothing matches */}
        <Route path={'/'} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
