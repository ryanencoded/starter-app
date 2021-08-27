import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { CreateCampaignMutation, CreateCampaignMutationVariables } from 'API';
import { MagicField, MagicForm, MagicRadio, RadioOption } from 'components/MagicForm';
import { createCampaign } from 'graphql/mutations';
import {
  pencil as pencilIcon,
  person as personIcon,
  send as sendIcon,
  text as textIcon,
} from 'ionicons/icons';
import callGraphQL from 'models/graphql-api';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface CreateCampaignInput {
  overview: string;
  description: string;
  audience: string;
}

const CreateCampaign = () => {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [campaignType, setCampaignType] = useState('protest');

  const saveCampaign = async (data: CreateCampaignInput) => {
    try {
      const response = await callGraphQL<CreateCampaignMutation>(createCampaign, {
        input: { ...data, status: 'pending', campaignType },
      } as CreateCampaignMutationVariables);

      if (response.data?.createCampaign?.id) {
        history.push('/campaigns');
      } else {
        setMessage('There was an issue verifying the campaign was successlly created.');
      }
    } catch (error) {
      setMessage('There was an issue creating the campaign.');
    }
  };

  const options: RadioOption[] = [];
  options.push({
    label: 'Protest',
    value: 'protest',
  });
  options.push({
    label: 'Blitz',
    value: 'blitz',
  });
  options.push({
    label: 'Outreach',
    value: 'outreach',
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/campaigns" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonToast
          isOpen={message.length > 0}
          onDidDismiss={() => setMessage('')}
          message={message}
          duration={500}
        />
        <MagicForm<CreateCampaignInput>
          title="Create Campaign"
          subtitle={`Keep everything organized by campaigns.`}
          onSubmit={saveCampaign}
          submitText="Create"
        >
          <MagicRadio
            name="campaignType"
            label="What type of campaign?"
            value={campaignType}
            onIonChange={(e) => setCampaignType(e.detail.value)}
            icon={sendIcon}
            options={options}
          />

          <MagicField
            name="overview"
            fieldType="text"
            icon={textIcon}
            placeholder="Overview of the campaign"
            rules={{
              required: 'You must provide an overview.',
            }}
          />

          <MagicField
            name="description"
            fieldType="text"
            icon={pencilIcon}
            placeholder="Please describe the campaign in detail."
            multiline={true}
            rules={{
              required: 'You must provide a description.',
            }}
          />

          <MagicField
            name="audience"
            fieldType="text"
            icon={personIcon}
            placeholder="Who is the target audience?"
            rules={{
              required: 'You must provide an audience.',
            }}
          />
        </MagicForm>
      </IonContent>
    </IonPage>
  );
};

export default CreateCampaign;
