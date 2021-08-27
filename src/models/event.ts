import { GraphQLResult } from '@aws-amplify/api';

import { ListEventsQuery } from '../API';

interface Event {
  id?: string;
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

const mapEventItem = (event: any) => ({
  id: event?.id,
  title: event?.title,
  description: event?.description,
  startDate: event?.startDate,
  endDate: event?.endDate,
});

function mapListEventsQuery(listEventsQuery: GraphQLResult<ListEventsQuery>): Event[] {
  // tslint:disable: no-object-literal-type-assertion
  return listEventsQuery.data?.listEvents?.items?.map(mapEventItem) || [];
}

export default Event;
export { mapListEventsQuery as mapListEvents };
