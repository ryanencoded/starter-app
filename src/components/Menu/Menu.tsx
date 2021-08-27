import './Menu.css';

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface MenuItem {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface IMenu {
  contentId: string;
  items: MenuItem[];
  renderTopPanel?: () => JSX.Element;
  renderBottomPanel?: () => JSX.Element;
}

const Menu: React.FC<IMenu> = ({ contentId, items = [], renderTopPanel, renderBottomPanel }) => {
  const location = useLocation();

  return (
    <IonMenu contentId={contentId} type="push">
      <IonContent>
        <IonList id="nav-list">
          <React.Fragment>{renderTopPanel && renderTopPanel()}</React.Fragment>

          {items.map((page, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === page.url ? 'selected' : ''}
                  routerLink={page.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={page.iosIcon} md={page.mdIcon} />
                  <IonLabel>{page.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <React.Fragment>{renderBottomPanel && renderBottomPanel()}</React.Fragment>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
