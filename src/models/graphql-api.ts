import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

export interface GraphQLOptions {
  input?: object;
  variables?: object;
  authMode?: GRAPHQL_AUTH_MODE;
}

export interface SubscriptionValue<T> {
  value: { data: T };
}

async function callGraphQL<T>(query: any, options?: GraphQLOptions): Promise<GraphQLResult<T>> {
  return (await API.graphql(
    graphqlOperation(query, options?.variables || options)
  )) as GraphQLResult<T>;
}

export function subscribeGraphQL<T>(subscription: any, callback: (value: T) => void) {
  // @ts-ignore
  return API.graphql(graphqlOperation(subscription)).subscribe({
    next: (response: SubscriptionValue<T>) => callback(response.value.data),
  });
}

export default callGraphQL;
