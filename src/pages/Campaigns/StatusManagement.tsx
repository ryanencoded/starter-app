import { IonButton, IonCol, IonGrid, IonRow, IonToast } from '@ionic/react';
import { UpdateCampaignMutation, UpdateCampaignMutationVariables } from 'API';
import { updateCampaign } from 'graphql/mutations';
import callGraphQL from 'models/graphql-api';
import React, { useState } from 'react';

interface StatusManagementProps {
  campaignId: string;
  onChange: (data: any) => any;
}

const StatusManagement: React.FC<StatusManagementProps> = ({ campaignId, onChange }) => {
  const [message, setMessage] = useState('');

  const approveCampaign = async () => {
    try {
      const response = await callGraphQL<UpdateCampaignMutation>(updateCampaign, {
        input: {
          id: campaignId,
          status: 'active',
        },
      } as UpdateCampaignMutationVariables);

      if (response.data?.updateCampaign?.status === 'active') {
        onChange(response.data?.updateCampaign);
      } else {
        setMessage('The campaign did not update properly.');
      }
    } catch (error) {
      setMessage('We are having issues approving campaign');
    }
  };

  const denyCampaign = async () => {
    try {
      const response = await callGraphQL<UpdateCampaignMutation>(updateCampaign, {
        input: {
          id: campaignId,
          status: 'closed',
        },
      } as UpdateCampaignMutationVariables);

      if (response.data?.updateCampaign?.status === 'closed') {
        onChange(response.data?.updateCampaign);
      } else {
        setMessage('The campaign did not update properly.');
      }
    } catch (error) {
      setMessage('We are having issues denying campaign.');
    }
  };

  return (
    <IonGrid>
      <IonToast
        isOpen={message.length > 0}
        onDidDismiss={() => setMessage('')}
        message={message}
        duration={500}
      />
      <IonRow>
        <IonCol>
          <IonButton
            onClick={approveCampaign}
            expand="full"
            color="success"
            className="ion-no-margin"
          >
            Approve
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton onClick={denyCampaign} expand="full" color="danger" className="ion-no-margin">
            Deny
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default StatusManagement;
