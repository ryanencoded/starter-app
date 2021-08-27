/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null;
  sub: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipcode: number;
  profiles?: SocialProfilesInput | null;
};

export type SocialProfilesInput = {
  facebook?: string | null;
  twitter?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  discord?: string | null;
};

export type ModelAccountConditionInput = {
  sub?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  zipcode?: ModelIntInput | null;
  and?: Array<ModelAccountConditionInput | null> | null;
  or?: Array<ModelAccountConditionInput | null> | null;
  not?: ModelAccountConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateAccountInput = {
  id: string;
  sub?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  zipcode?: number | null;
  profiles?: SocialProfilesInput | null;
};

export type DeleteAccountInput = {
  id?: string | null;
};

export type CreateCampaignInput = {
  id?: string | null;
  overview: string;
  description: string;
  status: string;
  campaignType: string;
  leaderID?: string | null;
  audience?: string | null;
};

export type ModelCampaignConditionInput = {
  overview?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  campaignType?: ModelStringInput | null;
  leaderID?: ModelIDInput | null;
  audience?: ModelStringInput | null;
  and?: Array<ModelCampaignConditionInput | null> | null;
  or?: Array<ModelCampaignConditionInput | null> | null;
  not?: ModelCampaignConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCampaignInput = {
  id: string;
  overview?: string | null;
  description?: string | null;
  status?: string | null;
  campaignType?: string | null;
  leaderID?: string | null;
  audience?: string | null;
};

export type DeleteCampaignInput = {
  id?: string | null;
};

export type CreateEventInput = {
  id?: string | null;
  title: string;
  campaignID: string;
  description: string;
  location: EventLocationInput;
};

export type EventLocationInput = {
  latitude: number;
  longitude: number;
  address: string;
};

export type ModelEventConditionInput = {
  title?: ModelStringInput | null;
  campaignID?: ModelIDInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type UpdateEventInput = {
  id: string;
  title?: string | null;
  campaignID?: string | null;
  description?: string | null;
  location?: EventLocationInput | null;
};

export type DeleteEventInput = {
  id?: string | null;
};

export type CreateActionStepInput = {
  id?: string | null;
  instructions: string;
  dueBy?: string | null;
  priority: number;
  eventID: string;
};

export type ModelActionStepConditionInput = {
  instructions?: ModelStringInput | null;
  dueBy?: ModelStringInput | null;
  priority?: ModelIntInput | null;
  eventID?: ModelIDInput | null;
  and?: Array<ModelActionStepConditionInput | null> | null;
  or?: Array<ModelActionStepConditionInput | null> | null;
  not?: ModelActionStepConditionInput | null;
};

export type UpdateActionStepInput = {
  id: string;
  instructions?: string | null;
  dueBy?: string | null;
  priority?: number | null;
  eventID?: string | null;
};

export type DeleteActionStepInput = {
  id?: string | null;
};

export type CreateResourceInput = {
  id?: string | null;
  summary: string;
  eventID: string;
  description?: string | null;
  file?: S3ObjectInput | null;
  link?: string | null;
};

export type S3ObjectInput = {
  bucket: string;
  key: string;
  region: string;
};

export type ModelResourceConditionInput = {
  summary?: ModelStringInput | null;
  eventID?: ModelIDInput | null;
  description?: ModelStringInput | null;
  link?: ModelStringInput | null;
  and?: Array<ModelResourceConditionInput | null> | null;
  or?: Array<ModelResourceConditionInput | null> | null;
  not?: ModelResourceConditionInput | null;
};

export type UpdateResourceInput = {
  id: string;
  summary?: string | null;
  eventID?: string | null;
  description?: string | null;
  file?: S3ObjectInput | null;
  link?: string | null;
};

export type DeleteResourceInput = {
  id?: string | null;
};

export type CreateTopicInput = {
  id?: string | null;
  summary: string;
  content: string;
  category: string;
  tags?: Array<string> | null;
};

export type ModelTopicConditionInput = {
  summary?: ModelStringInput | null;
  content?: ModelStringInput | null;
  category?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelTopicConditionInput | null> | null;
  or?: Array<ModelTopicConditionInput | null> | null;
  not?: ModelTopicConditionInput | null;
};

export type UpdateTopicInput = {
  id: string;
  summary?: string | null;
  content?: string | null;
  category?: string | null;
  tags?: Array<string> | null;
};

export type DeleteTopicInput = {
  id?: string | null;
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null;
  sub?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  zipcode?: ModelIntInput | null;
  and?: Array<ModelAccountFilterInput | null> | null;
  or?: Array<ModelAccountFilterInput | null> | null;
  not?: ModelAccountFilterInput | null;
};

export type ModelCampaignFilterInput = {
  id?: ModelIDInput | null;
  overview?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  campaignType?: ModelStringInput | null;
  leaderID?: ModelIDInput | null;
  audience?: ModelStringInput | null;
  and?: Array<ModelCampaignFilterInput | null> | null;
  or?: Array<ModelCampaignFilterInput | null> | null;
  not?: ModelCampaignFilterInput | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  campaignID?: ModelIDInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelActionStepFilterInput = {
  id?: ModelIDInput | null;
  instructions?: ModelStringInput | null;
  dueBy?: ModelStringInput | null;
  priority?: ModelIntInput | null;
  eventID?: ModelIDInput | null;
  and?: Array<ModelActionStepFilterInput | null> | null;
  or?: Array<ModelActionStepFilterInput | null> | null;
  not?: ModelActionStepFilterInput | null;
};

export type ModelResourceFilterInput = {
  id?: ModelIDInput | null;
  summary?: ModelStringInput | null;
  eventID?: ModelIDInput | null;
  description?: ModelStringInput | null;
  link?: ModelStringInput | null;
  and?: Array<ModelResourceFilterInput | null> | null;
  or?: Array<ModelResourceFilterInput | null> | null;
  not?: ModelResourceFilterInput | null;
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null;
  summary?: ModelStringInput | null;
  content?: ModelStringInput | null;
  category?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelTopicFilterInput | null> | null;
  or?: Array<ModelTopicFilterInput | null> | null;
  not?: ModelTopicFilterInput | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type CreateAccountMutationVariables = {
  input: CreateAccountInput;
  condition?: ModelAccountConditionInput | null;
};

export type CreateAccountMutation = {
  createAccount: {
    __typename: 'Account';
    id: string;
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: number;
    profiles: {
      __typename: 'SocialProfiles';
      facebook: string | null;
      twitter: string | null;
      linkedin: string | null;
      instagram: string | null;
      tiktok: string | null;
      discord: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput;
  condition?: ModelAccountConditionInput | null;
};

export type UpdateAccountMutation = {
  updateAccount: {
    __typename: 'Account';
    id: string;
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: number;
    profiles: {
      __typename: 'SocialProfiles';
      facebook: string | null;
      twitter: string | null;
      linkedin: string | null;
      instagram: string | null;
      tiktok: string | null;
      discord: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput;
  condition?: ModelAccountConditionInput | null;
};

export type DeleteAccountMutation = {
  deleteAccount: {
    __typename: 'Account';
    id: string;
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: number;
    profiles: {
      __typename: 'SocialProfiles';
      facebook: string | null;
      twitter: string | null;
      linkedin: string | null;
      instagram: string | null;
      tiktok: string | null;
      discord: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput;
  condition?: ModelCampaignConditionInput | null;
};

export type CreateCampaignMutation = {
  createCampaign: {
    __typename: 'Campaign';
    id: string;
    overview: string;
    description: string;
    status: string;
    campaignType: string;
    events: {
      __typename: 'ModelEventConnection';
      items: Array<{
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    leaderID: string | null;
    audience: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput;
  condition?: ModelCampaignConditionInput | null;
};

export type UpdateCampaignMutation = {
  updateCampaign: {
    __typename: 'Campaign';
    id: string;
    overview: string;
    description: string;
    status: string;
    campaignType: string;
    events: {
      __typename: 'ModelEventConnection';
      items: Array<{
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    leaderID: string | null;
    audience: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput;
  condition?: ModelCampaignConditionInput | null;
};

export type DeleteCampaignMutation = {
  deleteCampaign: {
    __typename: 'Campaign';
    id: string;
    overview: string;
    description: string;
    status: string;
    campaignType: string;
    events: {
      __typename: 'ModelEventConnection';
      items: Array<{
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    leaderID: string | null;
    audience: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type CreateEventMutationVariables = {
  input: CreateEventInput;
  condition?: ModelEventConditionInput | null;
};

export type CreateEventMutation = {
  createEvent: {
    __typename: 'Event';
    id: string;
    title: string;
    campaignID: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string;
    resources: {
      __typename: 'ModelResourceConnection';
      items: Array<{
        __typename: 'Resource';
        id: string;
        summary: string;
        eventID: string;
        description: string | null;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    steps: {
      __typename: 'ModelActionStepConnection';
      items: Array<{
        __typename: 'ActionStep';
        id: string;
        instructions: string;
        dueBy: string | null;
        priority: number;
        eventID: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    location: {
      __typename: 'EventLocation';
      latitude: number;
      longitude: number;
      address: string;
    };
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput;
  condition?: ModelEventConditionInput | null;
};

export type UpdateEventMutation = {
  updateEvent: {
    __typename: 'Event';
    id: string;
    title: string;
    campaignID: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string;
    resources: {
      __typename: 'ModelResourceConnection';
      items: Array<{
        __typename: 'Resource';
        id: string;
        summary: string;
        eventID: string;
        description: string | null;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    steps: {
      __typename: 'ModelActionStepConnection';
      items: Array<{
        __typename: 'ActionStep';
        id: string;
        instructions: string;
        dueBy: string | null;
        priority: number;
        eventID: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    location: {
      __typename: 'EventLocation';
      latitude: number;
      longitude: number;
      address: string;
    };
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput;
  condition?: ModelEventConditionInput | null;
};

export type DeleteEventMutation = {
  deleteEvent: {
    __typename: 'Event';
    id: string;
    title: string;
    campaignID: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string;
    resources: {
      __typename: 'ModelResourceConnection';
      items: Array<{
        __typename: 'Resource';
        id: string;
        summary: string;
        eventID: string;
        description: string | null;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    steps: {
      __typename: 'ModelActionStepConnection';
      items: Array<{
        __typename: 'ActionStep';
        id: string;
        instructions: string;
        dueBy: string | null;
        priority: number;
        eventID: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    location: {
      __typename: 'EventLocation';
      latitude: number;
      longitude: number;
      address: string;
    };
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type CreateActionStepMutationVariables = {
  input: CreateActionStepInput;
  condition?: ModelActionStepConditionInput | null;
};

export type CreateActionStepMutation = {
  createActionStep: {
    __typename: 'ActionStep';
    id: string;
    instructions: string;
    dueBy: string | null;
    priority: number;
    resource: {
      __typename: 'Resource';
      id: string;
      summary: string;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string | null;
      file: {
        __typename: 'S3Object';
        bucket: string;
        key: string;
        region: string;
      } | null;
      link: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type UpdateActionStepMutationVariables = {
  input: UpdateActionStepInput;
  condition?: ModelActionStepConditionInput | null;
};

export type UpdateActionStepMutation = {
  updateActionStep: {
    __typename: 'ActionStep';
    id: string;
    instructions: string;
    dueBy: string | null;
    priority: number;
    resource: {
      __typename: 'Resource';
      id: string;
      summary: string;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string | null;
      file: {
        __typename: 'S3Object';
        bucket: string;
        key: string;
        region: string;
      } | null;
      link: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type DeleteActionStepMutationVariables = {
  input: DeleteActionStepInput;
  condition?: ModelActionStepConditionInput | null;
};

export type DeleteActionStepMutation = {
  deleteActionStep: {
    __typename: 'ActionStep';
    id: string;
    instructions: string;
    dueBy: string | null;
    priority: number;
    resource: {
      __typename: 'Resource';
      id: string;
      summary: string;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string | null;
      file: {
        __typename: 'S3Object';
        bucket: string;
        key: string;
        region: string;
      } | null;
      link: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type CreateResourceMutationVariables = {
  input: CreateResourceInput;
  condition?: ModelResourceConditionInput | null;
};

export type CreateResourceMutation = {
  createResource: {
    __typename: 'Resource';
    id: string;
    summary: string;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string | null;
    file: {
      __typename: 'S3Object';
      bucket: string;
      key: string;
      region: string;
    } | null;
    link: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type UpdateResourceMutationVariables = {
  input: UpdateResourceInput;
  condition?: ModelResourceConditionInput | null;
};

export type UpdateResourceMutation = {
  updateResource: {
    __typename: 'Resource';
    id: string;
    summary: string;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string | null;
    file: {
      __typename: 'S3Object';
      bucket: string;
      key: string;
      region: string;
    } | null;
    link: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type DeleteResourceMutationVariables = {
  input: DeleteResourceInput;
  condition?: ModelResourceConditionInput | null;
};

export type DeleteResourceMutation = {
  deleteResource: {
    __typename: 'Resource';
    id: string;
    summary: string;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string | null;
    file: {
      __typename: 'S3Object';
      bucket: string;
      key: string;
      region: string;
    } | null;
    link: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput;
  condition?: ModelTopicConditionInput | null;
};

export type CreateTopicMutation = {
  createTopic: {
    __typename: 'Topic';
    id: string;
    summary: string;
    content: string;
    category: string;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput;
  condition?: ModelTopicConditionInput | null;
};

export type UpdateTopicMutation = {
  updateTopic: {
    __typename: 'Topic';
    id: string;
    summary: string;
    content: string;
    category: string;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput;
  condition?: ModelTopicConditionInput | null;
};

export type DeleteTopicMutation = {
  deleteTopic: {
    __typename: 'Topic';
    id: string;
    summary: string;
    content: string;
    category: string;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type GetAccountQueryVariables = {
  id: string;
};

export type GetAccountQuery = {
  getAccount: {
    __typename: 'Account';
    id: string;
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: number;
    profiles: {
      __typename: 'SocialProfiles';
      facebook: string | null;
      twitter: string | null;
      linkedin: string | null;
      instagram: string | null;
      tiktok: string | null;
      discord: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAccountsQuery = {
  listAccounts: {
    __typename: 'ModelAccountConnection';
    items: Array<{
      __typename: 'Account';
      id: string;
      sub: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      zipcode: number;
      profiles: {
        __typename: 'SocialProfiles';
        facebook: string | null;
        twitter: string | null;
        linkedin: string | null;
        instagram: string | null;
        tiktok: string | null;
        discord: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetCampaignQueryVariables = {
  id: string;
};

export type GetCampaignQuery = {
  getCampaign: {
    __typename: 'Campaign';
    id: string;
    overview: string;
    description: string;
    status: string;
    campaignType: string;
    events: {
      __typename: 'ModelEventConnection';
      items: Array<{
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    leaderID: string | null;
    audience: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type ListCampaignsQueryVariables = {
  filter?: ModelCampaignFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCampaignsQuery = {
  listCampaigns: {
    __typename: 'ModelCampaignConnection';
    items: Array<{
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetEventQueryVariables = {
  id: string;
};

export type GetEventQuery = {
  getEvent: {
    __typename: 'Event';
    id: string;
    title: string;
    campaignID: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string;
    resources: {
      __typename: 'ModelResourceConnection';
      items: Array<{
        __typename: 'Resource';
        id: string;
        summary: string;
        eventID: string;
        description: string | null;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    steps: {
      __typename: 'ModelActionStepConnection';
      items: Array<{
        __typename: 'ActionStep';
        id: string;
        instructions: string;
        dueBy: string | null;
        priority: number;
        eventID: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    location: {
      __typename: 'EventLocation';
      latitude: number;
      longitude: number;
      address: string;
    };
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListEventsQuery = {
  listEvents: {
    __typename: 'ModelEventConnection';
    items: Array<{
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetActionStepQueryVariables = {
  id: string;
};

export type GetActionStepQuery = {
  getActionStep: {
    __typename: 'ActionStep';
    id: string;
    instructions: string;
    dueBy: string | null;
    priority: number;
    resource: {
      __typename: 'Resource';
      id: string;
      summary: string;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string | null;
      file: {
        __typename: 'S3Object';
        bucket: string;
        key: string;
        region: string;
      } | null;
      link: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type ListActionStepsQueryVariables = {
  filter?: ModelActionStepFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListActionStepsQuery = {
  listActionSteps: {
    __typename: 'ModelActionStepConnection';
    items: Array<{
      __typename: 'ActionStep';
      id: string;
      instructions: string;
      dueBy: string | null;
      priority: number;
      resource: {
        __typename: 'Resource';
        id: string;
        summary: string;
        eventID: string;
        description: string | null;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetResourceQueryVariables = {
  id: string;
};

export type GetResourceQuery = {
  getResource: {
    __typename: 'Resource';
    id: string;
    summary: string;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string | null;
    file: {
      __typename: 'S3Object';
      bucket: string;
      key: string;
      region: string;
    } | null;
    link: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type ListResourcesQueryVariables = {
  filter?: ModelResourceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListResourcesQuery = {
  listResources: {
    __typename: 'ModelResourceConnection';
    items: Array<{
      __typename: 'Resource';
      id: string;
      summary: string;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string | null;
      file: {
        __typename: 'S3Object';
        bucket: string;
        key: string;
        region: string;
      } | null;
      link: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetTopicQueryVariables = {
  id: string;
};

export type GetTopicQuery = {
  getTopic: {
    __typename: 'Topic';
    id: string;
    summary: string;
    content: string;
    category: string;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTopicsQuery = {
  listTopics: {
    __typename: 'ModelTopicConnection';
    items: Array<{
      __typename: 'Topic';
      id: string;
      summary: string;
      content: string;
      category: string;
      tags: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CampaignsByStatusQueryVariables = {
  status?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCampaignFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CampaignsByStatusQuery = {
  campaignsByStatus: {
    __typename: 'ModelCampaignConnection';
    items: Array<{
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateAccountSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateAccountSubscription = {
  onCreateAccount: {
    __typename: 'Account';
    id: string;
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: number;
    profiles: {
      __typename: 'SocialProfiles';
      facebook: string | null;
      twitter: string | null;
      linkedin: string | null;
      instagram: string | null;
      tiktok: string | null;
      discord: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnUpdateAccountSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount: {
    __typename: 'Account';
    id: string;
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: number;
    profiles: {
      __typename: 'SocialProfiles';
      facebook: string | null;
      twitter: string | null;
      linkedin: string | null;
      instagram: string | null;
      tiktok: string | null;
      discord: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnDeleteAccountSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount: {
    __typename: 'Account';
    id: string;
    sub: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zipcode: number;
    profiles: {
      __typename: 'SocialProfiles';
      facebook: string | null;
      twitter: string | null;
      linkedin: string | null;
      instagram: string | null;
      tiktok: string | null;
      discord: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnCreateCampaignSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateCampaignSubscription = {
  onCreateCampaign: {
    __typename: 'Campaign';
    id: string;
    overview: string;
    description: string;
    status: string;
    campaignType: string;
    events: {
      __typename: 'ModelEventConnection';
      items: Array<{
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    leaderID: string | null;
    audience: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnUpdateCampaignSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateCampaignSubscription = {
  onUpdateCampaign: {
    __typename: 'Campaign';
    id: string;
    overview: string;
    description: string;
    status: string;
    campaignType: string;
    events: {
      __typename: 'ModelEventConnection';
      items: Array<{
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    leaderID: string | null;
    audience: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnDeleteCampaignSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteCampaignSubscription = {
  onDeleteCampaign: {
    __typename: 'Campaign';
    id: string;
    overview: string;
    description: string;
    status: string;
    campaignType: string;
    events: {
      __typename: 'ModelEventConnection';
      items: Array<{
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    leaderID: string | null;
    audience: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnCreateEventSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateEventSubscription = {
  onCreateEvent: {
    __typename: 'Event';
    id: string;
    title: string;
    campaignID: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string;
    resources: {
      __typename: 'ModelResourceConnection';
      items: Array<{
        __typename: 'Resource';
        id: string;
        summary: string;
        eventID: string;
        description: string | null;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    steps: {
      __typename: 'ModelActionStepConnection';
      items: Array<{
        __typename: 'ActionStep';
        id: string;
        instructions: string;
        dueBy: string | null;
        priority: number;
        eventID: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    location: {
      __typename: 'EventLocation';
      latitude: number;
      longitude: number;
      address: string;
    };
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnUpdateEventSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateEventSubscription = {
  onUpdateEvent: {
    __typename: 'Event';
    id: string;
    title: string;
    campaignID: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string;
    resources: {
      __typename: 'ModelResourceConnection';
      items: Array<{
        __typename: 'Resource';
        id: string;
        summary: string;
        eventID: string;
        description: string | null;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    steps: {
      __typename: 'ModelActionStepConnection';
      items: Array<{
        __typename: 'ActionStep';
        id: string;
        instructions: string;
        dueBy: string | null;
        priority: number;
        eventID: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    location: {
      __typename: 'EventLocation';
      latitude: number;
      longitude: number;
      address: string;
    };
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnDeleteEventSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteEventSubscription = {
  onDeleteEvent: {
    __typename: 'Event';
    id: string;
    title: string;
    campaignID: string;
    campaign: {
      __typename: 'Campaign';
      id: string;
      overview: string;
      description: string;
      status: string;
      campaignType: string;
      events: {
        __typename: 'ModelEventConnection';
        nextToken: string | null;
      } | null;
      leaderID: string | null;
      audience: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string;
    resources: {
      __typename: 'ModelResourceConnection';
      items: Array<{
        __typename: 'Resource';
        id: string;
        summary: string;
        eventID: string;
        description: string | null;
        link: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    steps: {
      __typename: 'ModelActionStepConnection';
      items: Array<{
        __typename: 'ActionStep';
        id: string;
        instructions: string;
        dueBy: string | null;
        priority: number;
        eventID: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    location: {
      __typename: 'EventLocation';
      latitude: number;
      longitude: number;
      address: string;
    };
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnCreateActionStepSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateActionStepSubscription = {
  onCreateActionStep: {
    __typename: 'ActionStep';
    id: string;
    instructions: string;
    dueBy: string | null;
    priority: number;
    resource: {
      __typename: 'Resource';
      id: string;
      summary: string;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string | null;
      file: {
        __typename: 'S3Object';
        bucket: string;
        key: string;
        region: string;
      } | null;
      link: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnUpdateActionStepSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateActionStepSubscription = {
  onUpdateActionStep: {
    __typename: 'ActionStep';
    id: string;
    instructions: string;
    dueBy: string | null;
    priority: number;
    resource: {
      __typename: 'Resource';
      id: string;
      summary: string;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string | null;
      file: {
        __typename: 'S3Object';
        bucket: string;
        key: string;
        region: string;
      } | null;
      link: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnDeleteActionStepSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteActionStepSubscription = {
  onDeleteActionStep: {
    __typename: 'ActionStep';
    id: string;
    instructions: string;
    dueBy: string | null;
    priority: number;
    resource: {
      __typename: 'Resource';
      id: string;
      summary: string;
      eventID: string;
      event: {
        __typename: 'Event';
        id: string;
        title: string;
        campaignID: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string | null;
      file: {
        __typename: 'S3Object';
        bucket: string;
        key: string;
        region: string;
      } | null;
      link: string | null;
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnCreateResourceSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateResourceSubscription = {
  onCreateResource: {
    __typename: 'Resource';
    id: string;
    summary: string;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string | null;
    file: {
      __typename: 'S3Object';
      bucket: string;
      key: string;
      region: string;
    } | null;
    link: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnUpdateResourceSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateResourceSubscription = {
  onUpdateResource: {
    __typename: 'Resource';
    id: string;
    summary: string;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string | null;
    file: {
      __typename: 'S3Object';
      bucket: string;
      key: string;
      region: string;
    } | null;
    link: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnDeleteResourceSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteResourceSubscription = {
  onDeleteResource: {
    __typename: 'Resource';
    id: string;
    summary: string;
    eventID: string;
    event: {
      __typename: 'Event';
      id: string;
      title: string;
      campaignID: string;
      campaign: {
        __typename: 'Campaign';
        id: string;
        overview: string;
        description: string;
        status: string;
        campaignType: string;
        leaderID: string | null;
        audience: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
      } | null;
      description: string;
      resources: {
        __typename: 'ModelResourceConnection';
        nextToken: string | null;
      } | null;
      steps: {
        __typename: 'ModelActionStepConnection';
        nextToken: string | null;
      } | null;
      location: {
        __typename: 'EventLocation';
        latitude: number;
        longitude: number;
        address: string;
      };
      createdAt: string;
      updatedAt: string;
      owner: string | null;
    } | null;
    description: string | null;
    file: {
      __typename: 'S3Object';
      bucket: string;
      key: string;
      region: string;
    } | null;
    link: string | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnCreateTopicSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateTopicSubscription = {
  onCreateTopic: {
    __typename: 'Topic';
    id: string;
    summary: string;
    content: string;
    category: string;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnUpdateTopicSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic: {
    __typename: 'Topic';
    id: string;
    summary: string;
    content: string;
    category: string;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};

export type OnDeleteTopicSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic: {
    __typename: 'Topic';
    id: string;
    summary: string;
    content: string;
    category: string;
    tags: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null;
};
