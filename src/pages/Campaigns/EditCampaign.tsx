import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import {
  GetCampaignQuery,
  GetCampaignQueryVariables,
  UpdateCampaignMutation,
  UpdateCampaignMutationVariables,
} from 'API';
import { MagicField, MagicForm, MagicRadio, RadioOption } from 'components/MagicForm';
import { updateCampaign } from 'graphql/mutations';
import { getCampaign } from 'graphql/queries';
import {
  pencil as pencilIcon,
  person as personIcon,
  send as sendIcon,
  text as textIcon,
} from 'ionicons/icons';
import Campaign, { mapCampaign } from 'models/campaign';
import callGraphQL from 'models/graphql-api';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

interface EditCampaignInput {
  overview: string;
  description: string;
  audience: string;
}

const EditCampaign = () => {
  const history = useHistory();
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [campaign, setCampaign] = useState<Campaign>();
  const [campaignType, setCampaignType] = useState(campaign?.campaignType);

  const editCampaign = async (data: EditCampaignInput) => {
    try {
      const response = await callGraphQL<UpdateCampaignMutation>(updateCampaign, {
        input: { id, campaignType, ...data },
      } as UpdateCampaignMutationVariables);

      if (response.data?.updateCampaign?.id) {
        history.push('/campaigns');
      } else {
        setMessage('There was an issue verifying the campaign was updated.');
      }
    } catch (error) {
      setMessage('There was an issue creating the campaign.');
    }
  };

  const fetchCampaign = useCallback(async () => {
    try {
      const campaignData = await callGraphQL<GetCampaignQuery>(getCampaign, {
        variables: { id } as GetCampaignQueryVariables,
      });
      const item = mapCampaign(campaignData);
      setCampaignType(item.campaignType);
      setCampaign(item);
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.error('Error fetching campaign', error);
    }
  }, [id]);

  useEffect(() => {
    fetchCampaign();
  }, [fetchCampaign]);

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

  if (!campaign) {
    return (
      <IonContent>
        <IonLoading isOpen={true} />
      </IonContent>
    );
  }

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
        <MagicForm<EditCampaignInput>
          title="Edit Campaign"
          subtitle={`Update your campaign with the latest information.`}
          onSubmit={editCampaign}
          submitText="Update"
        >
          <MagicRadio
            name="campaignType"
            label="What type of campaign?"
            value={campaignType}
            onIonChange={(e) => setCampaignType(e.detail.value)}
            icon={sendIcon}
            options={options}
            defaultValue={campaign?.campaignType}
          />

          <MagicField
            name="overview"
            fieldType="text"
            icon={textIcon}
            placeholder="Overview of the campaign"
            rules={{
              required: 'You must provide an overview.',
            }}
            defaultValue={campaign?.overview}
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
            defaultValue={campaign?.description}
          />

          <MagicField
            name="audience"
            fieldType="text"
            icon={personIcon}
            placeholder="Who is the target audience?"
            rules={{
              required: 'You must provide an audience.',
            }}
            defaultValue={campaign?.audience}
          />
        </MagicForm>
      </IonContent>
    </IonPage>
  );
};

export default EditCampaign;
