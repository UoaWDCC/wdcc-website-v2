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
        <Route exact path={'/apply'}>
          <Redirect redirectUrl={'https://forms.gle/oGREN8zHBpn8S51r9'} />
        </Route>
        <Route exact path={'/bagm-2022'}>
          <Redirect redirectUrl={'https://drive.google.com/drive/folders/1jDqER9V3ZfH8Ubq7mgI3P7CjkWK_wyS_?usp=sharing'} />
        </Route>

        {/* Default path if nothing matches */}
        <Route path={'/'} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
