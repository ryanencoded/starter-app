import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { chevronDownOutline } from 'ionicons/icons';
import React, { PropsWithChildren, useState } from 'react';

import { useFuzzySearch } from './useFuzzySearch';

export interface RenderProps<T> {
  onClick?: any;
  value: T;
}

export interface ISearchModal<T> {
  items: T[];
  keys?: string[];
  onSelect: (props: T) => void;
  value?: T;
  label?: string;
  renderSearchItem?: (props: RenderProps<T>) => JSX.Element;
  renderDisplayItem?: (props: RenderProps<T>) => JSX.Element;
}

const SearchModal = <T, >({
  items,
  keys = ['name'],
  onSelect,
  value,
  label = 'Select Item',
  renderSearchItem,
  renderDisplayItem,
}: PropsWithChildren<ISearchModal<T>>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<T>(value as T);

  const { results, setQuery } = useFuzzySearch({
    list: items,
    options: { keys },
  });

  const handleSelect = (props: T) => {
    setSelected(props);
    onSelect(props);
    setIsModalOpen(false);
  };

  return (
    <>
      {renderDisplayItem &&
        renderDisplayItem({
          onClick: () => setIsModalOpen(true),
          value: selected,
        })}

      <IonModal onDidDismiss={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{label}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsModalOpen(false)}>
                <IonIcon icon={chevronDownOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar
              debounce={500}
              onIonChange={({ target }: any) => setQuery(target.value)}
            />
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList lines="full">
            {results && results.length > 0 ? (
              results.map((result, i) => (
                <React.Fragment key={i}>
                  {renderSearchItem &&
                    renderSearchItem({
                      onClick: () => handleSelect(result),
                      value: result,
                    })}
                </React.Fragment>
              ))
            ) : (
              <IonItem>
                <IonLabel> No Results </IonLabel>
              </IonItem>
            )}
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};

export default SearchModal;
