// tslint:disable: no-object-literal-type-assertion
import { GraphQLResult } from '@aws-amplify/api';

import { CampaignsByStatusQuery, GetCampaignQuery, ListCampaignsQuery } from '../API';

interface Campaign {
  id?: string;
  overview?: string;
  description?: string;
  audience?: string;
  campaignType: string;
  status: string;
}

const mapCampaignItem = (campaign: any) => ({
  id: campaign?.id,
  overview: campaign?.overview,
  description: campaign?.description,
  audience: campaign?.audience,
  campaignType: campaign?.campaignType,
  status: campaign?.status,
});

function mapCampaignQuery(getCampaignQuery: GraphQLResult<GetCampaignQuery>): Campaign {
  return mapCampaignItem(getCampaignQuery.data?.getCampaign) || {};
}

function mapListCampaignsQuery(listCampaignsQuery: GraphQLResult<ListCampaignsQuery>): Campaign[] {
  return listCampaignsQuery.data?.listCampaigns?.items?.map(mapCampaignItem) || [];
}

function mapCampaignsByStatusQuery(
  campaignsByStatusQuery: GraphQLResult<CampaignsByStatusQuery>
): Campaign[] {
  return campaignsByStatusQuery.data?.campaignsByStatus?.items?.map(mapCampaignItem) || [];
}

export default Campaign;
export {
  mapListCampaignsQuery as mapListCampaigns,
  mapCampaignsByStatusQuery as mapCampaignsByStatus,
  mapCampaignQuery as mapCampaign,
};
