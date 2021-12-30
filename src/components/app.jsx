import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import Parse from 'parse';

import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  Parse.initialize("", "");
  Parse.serverURL = ''

  // Framework7 Parameters
  const f7params = {
    name: 'MSA', // App name
    theme: 'auto', // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV === 'production' ? {
      path: '/service-worker.js',
    } : {},
  };

  f7ready(() => {
    // Call F7 APIs here
  });

  return (
    <App {...f7params} >

      {/* Left panel with cover effect when hidden */}
      <Panel left cover themeDark visibleBreakpoint={960}>
        <View>
          <Page>
            <Navbar title="Left Panel" />
            <BlockTitle>Left View Navigation</BlockTitle>
            <List>
              <ListItem link="/left-page-1/" title="Left Page 1" />
              <ListItem link="/left-page-2/" title="Left Page 2" />
            </List>
            <BlockTitle>Control Main View</BlockTitle>
            <List>
              <ListItem link="/about/" view=".view-main" panelClose title="About" />
              <ListItem link="/form/" view=".view-main" panelClose title="Form" />
              <ListItem link="#" view=".view-main" back panelClose title="Back in history" />
            </List>
          </Page>
        </View>
      </Panel>

      {/* Right panel with reveal effect*/}
      <Panel right reveal themeDark>
        <View>
          <Page>
            <Navbar title="Right Panel" />
            <Block>Right panel content goes here</Block>
          </Page>
        </View>
      </Panel>

      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/" browserHistory={true} browserHistorySeparator="" />

      {/* Popup */}
      <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup>


    </App>
  )
}
export default MyApp;