import { JSX } from '@ionic/core';
import { IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { createUseStyles } from 'react-jss';

export interface SelectionItemProps extends React.HTMLAttributes<HTMLIonItemElement> {
  title: string;
  subtitle?: string;
}

const useStyles = createUseStyles({
  selectionItem: {
    '--inner-padding-top': '12px',
    '--inner-padding-bottom': '12px',
    '&:not(.in-list)': {
      margin: {
        top: 15,
        bottom: 15,
      },
    },
    cursor: 'pointer',
  },
});

const SelectionItem: React.FC<SelectionItemProps & JSX.IonItem> = ({
  title,
  subtitle,
  ...inputProps
}) => {
  const classes = useStyles();

  return (
    <IonItem {...inputProps} className={classes.selectionItem}>
      <IonLabel>
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
      </IonLabel>
    </IonItem>
  );
};

export default SelectionItem;
