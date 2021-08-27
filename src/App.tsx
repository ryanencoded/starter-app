/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import 'assets/overrides.css';
/* Theme variables */
import 'assets/theme.css';

import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { IonApp, IonContent, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from 'components/Menu';
import { CampaignRoutes } from 'pages/Campaigns';
import Dashboard from 'pages/Dashboard';
import Documents from 'pages/Documents';
import Events from 'pages/Events';
import Resources from 'pages/Resources';
import Settings from 'pages/Settings';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { routes } from './routes';

const App: React.FC = () => {
  return (
    <IonApp>
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: 'name',
              label: 'Your Full Name',
              placeholder: 'First Last',
              required: true,
            },
            {
              type: 'email',
              label: 'Your Email',
              placeholder: 'jdoe@me.com',
              required: true,
            },
            {
              type: 'password',
              label: 'Desired Password',
              placeholder: '*********',
              required: true,
            },
            {
              type: 'phone_number',
              label: 'Your Mobile Phone',
              placeholder: '(XXX)-XXX-XXXX',
              required: false,
            },
          ]}
        />

        <AmplifySignIn slot="sign-in" usernameAlias="email" />

        <IonReactRouter>
          <IonSplitPane contentId="main-content">
            <Menu
              contentId="main-content"
              items={routes}
              renderBottomPanel={() => <AmplifySignOut />}
            />
            <IonContent id="main-content">
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/campaigns" component={CampaignRoutes} />
                <Route path="/resources" component={Resources} />
                <Route path="/documents" component={Documents} />
                <Route path="/events" component={Events} />
                <Route path="/settings" component={Settings} />
                <Redirect from="/" to="/dashboard" exact={true} />
              </Switch>
            </IonContent>
          </IonSplitPane>
        </IonReactRouter>
      </AmplifyAuthenticator>
    </IonApp>
  );
};

export default App;
