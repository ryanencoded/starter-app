import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { GetCampaignQuery, GetCampaignQueryVariables } from 'API';
import { getCampaign } from 'graphql/queries';
import Campaign, { mapCampaign } from 'models/campaign';
import callGraphQL from 'models/graphql-api';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const CampaignEvents: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [campaign, setCampaign] = useState<Campaign>();

  const fetchCampaign = useCallback(async () => {
    try {
      const campaignData = await callGraphQL<GetCampaignQuery>(getCampaign, {
        variables: { id } as GetCampaignQueryVariables,
      });
      const item = mapCampaign(campaignData);
      setCampaign(item);
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.error('Error fetching campaign', error);
    }
  }, [id]);

  useEffect(() => {
    fetchCampaign();
  }, [fetchCampaign]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Campaign Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption onClick={() => history.push(`/events/${id}`)}>Edit</IonItemOption>
              <IonItemOption color="danger" onClick={() => history.push(`/events/${id}`)}>
                Delete
              </IonItemOption>
            </IonItemOptions>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <IonText color="primary">
                  <h3>{campaign?.overview}</h3>
                </IonText>
                <p>{campaign?.description}</p>
                <IonText color="secondary">
                  <p>{campaign?.audience}</p>
                </IonText>
              </IonLabel>
            </IonItem>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CampaignEvents;
