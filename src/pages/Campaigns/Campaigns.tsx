import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { CampaignsByStatusQuery } from 'API';
import GridList from 'components/GridList';
import { campaignsByStatus } from 'graphql/queries';
import { add as addIcon } from 'ionicons/icons';
import Campaign, { mapCampaignsByStatus } from 'models/campaign';
import callGraphQL from 'models/graphql-api';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import StatusManagement from './StatusManagement';

const Projects: React.FC = () => {
  const history = useHistory();
  const [status, setStatus] = useState<string | undefined>('active');
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const fetchCampaigns = useCallback(async () => {
    try {
      const campaignsData = await callGraphQL<CampaignsByStatusQuery>(campaignsByStatus, {
        variables: {
          status,
        },
      });
      const items = mapCampaignsByStatus(campaignsData);
      setCampaigns(items);
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.error('Error fetching campaigns', error);
    }
  }, [status]);

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Campaigns</IonTitle>
        </IonToolbar>
        <IonSegment onIonChange={(e) => setStatus(e.detail.value)} value={status}>
          <IonSegmentButton value="active">
            <IonLabel>Active</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="pending">
            <IonLabel>Pending</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonHeader>

      <IonContent>
        <GridList<Campaign>
          keyName="id"
          items={campaigns}
          renderListItem={({ value }) => (
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>{value.audience}</IonCardSubtitle>
                <IonCardTitle>{value.overview}</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>{value.description}</IonCardContent>
              <IonItem
                button={true}
                onClick={() => history.push(`/campaigns/edit/${value.id}`)}
                detail={true}
              >
                <IonLabel>Edit Campaign</IonLabel>
              </IonItem>
              {value.id && value.status === 'pending' && (
                <StatusManagement campaignId={value.id} onChange={fetchCampaigns} />
              )}
              {value.status === 'active' && (
                <IonButton
                  expand="full"
                  color="primary"
                  className="ion-no-margin"
                  onClick={() => history.push(`/campaigns/events/${value.id}`)}
                >
                  Manage Events
                </IonButton>
              )}
            </IonCard>
          )}
        />

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => history.push('/campaigns/create')} color="secondary">
            <IonIcon icon={addIcon} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
