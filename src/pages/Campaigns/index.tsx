import { IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import CampaignEvents from './CampaignEvents';
import Campaigns from './Campaigns';
import CreateCampaign from './CreateCampaign';
import EditCampaign from './EditCampaign';

const CampaignRoutes: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <IonRouterOutlet>
      <Route path={`${path}`} component={Campaigns} exact={true} />
      <Route path={`${path}/create`} component={CreateCampaign} exact={true} />
      <Route path={`${path}/edit/:id`} component={EditCampaign} exact={true} />
      <Route path={`${path}/events/:id`} component={CampaignEvents} exact={true} />
    </IonRouterOutlet>
  );
};
export default CampaignRoutes;
export { CampaignRoutes, Campaigns, CreateCampaign };
