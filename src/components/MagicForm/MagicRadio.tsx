import { JSX } from '@ionic/core';
import {
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonRow,
} from '@ionic/react';
import React from 'react';
import { createUseStyles } from 'react-jss';

export interface RadioOption extends JSX.IonRadio {
  label: string;
}

interface BaseProps extends React.HTMLAttributes<HTMLIonRadioGroupElement> {
  name: string;
  message?: string;
  label?: string;
  icon?: string;
  options: RadioOption[];
}

export type MagicRadioProps = BaseProps & JSX.IonRadioGroup;

const useStyles = createUseStyles({
  message: {
    color: 'var(--ion-color-danger)',
  },
  container: {
    '--padding-start': '10px',
    border: '1px solid var(--ion-color-light)',
    margin: {
      top: 15,
      bottom: 15,
    },
  },
});

export const MagicRadio: React.FC<MagicRadioProps> = ({
  name,
  message,
  icon,
  label,
  options,
  ...props
}) => {
  const classes = useStyles();
  const noSpace = { margin: 0, padding: 0 };

  return (
    <div key={name} className={classes.container}>
      <IonItem lines="none">
        {icon && <IonIcon icon={icon} slot="start" size="small" />}
        {label && <IonLabel>{label}</IonLabel>}
      </IonItem>
      <IonRadioGroup {...props}>
        <IonGrid style={noSpace}>
          <IonRow style={noSpace}>
            {options.map((option) => (
              <IonCol style={noSpace} key={option.value}>
                <IonItem lines="none">
                  <IonLabel>{option.label}</IonLabel>
                  <IonRadio slot="start" value={option.value} {...option} />
                </IonItem>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonRadioGroup>

      {message && <p className={classes.message}>{message}</p>}
    </div>
  );
};

export default MagicRadio;
