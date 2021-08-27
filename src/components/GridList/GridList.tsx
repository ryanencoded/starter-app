import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { PropsWithChildren } from 'react';

import EmptyList from './EmptyList';
import ListGenerator from './ListGenerator';

interface RenderProps<T> {
  value: T;
}

interface EmptyOptions {
  title?: string;
  subtitle?: string;
}

interface IGridList<T> {
  loading?: boolean;
  multiplier?: number;
  items: T[];
  renderListItem?: (props: RenderProps<T>) => JSX.Element;
  renderSkeletonItem?: () => JSX.Element;
  emptyOptions?: EmptyOptions;
  keyName?: any;
}

const GridList = <T, >({
  loading,
  multiplier = 6,
  items,
  renderListItem,
  renderSkeletonItem,
  emptyOptions = {
    title: 'It feels a little bit empty',
  },
  keyName,
}: PropsWithChildren<IGridList<T>>) => {
  const noSpace = {
    padding: 0,
    margin: 0,
  };

  if (!loading && items.length > 0) {
    return (
      <IonGrid style={noSpace}>
        <IonRow style={noSpace}>
          {items.map((props: any, i: number) => {
            const key = keyName ? props[keyName] : i;
            return (
              <IonCol sizeXs="12" sizeSm="6" sizeMd="6" sizeLg="6" key={key}>
                {renderListItem && renderListItem({ value: props })}
              </IonCol>
            );
          })}
        </IonRow>
      </IonGrid>
    );
  }

  if (!loading && items.length === 0) {
    return <EmptyList {...emptyOptions} />;
  }

  return (
    <IonGrid style={noSpace}>
      <IonRow style={noSpace}>
        <ListGenerator
          multiplier={multiplier}
          renderItem={() => (
            <IonCol sizeXs="12" sizeSm="6" sizeMd="6" sizeLg="6">
              {renderSkeletonItem && renderSkeletonItem()}
            </IonCol>
          )}
        />
      </IonRow>
    </IonGrid>
  );
};

export default GridList;
