import { IonIcon, IonInput, IonItem } from '@ionic/react';
import React from 'react';
import { Controller } from 'react-hook-form';
// tslint:disable: no-duplicate-imports
import { useFormContext } from 'react-hook-form';
import { ValidationRules } from 'react-hook-form/dist/types/form.d';
// tslint:enable: no-duplicate-imports
import { createUseStyles } from 'react-jss';

import { FieldTypes } from './FieldTypes';
import {
  CodeInput,
  CodeInputProps,
  PhoneInput,
  PhoneInputProps,
  TextInput,
  TextInputProps,
} from './Inputs';

interface InputBase {
  name: string;
  fieldType?: keyof typeof FieldTypes;
  label?: string;
  icon?: string;
  rules?: ValidationRules;
  defaultValue?: any;
}

export type MagicFieldProps = InputBase & (TextInputProps | PhoneInputProps | CodeInputProps);

const useStyles = createUseStyles({
  message: {
    color: 'var(--ion-color-danger)',
  },
  field: {
    '--padding-start': '10px',
    border: '1px solid var(--ion-color-light)',
    margin: {
      top: 15,
      bottom: 15,
    },
  },
});

export const MagicField: React.FC<MagicFieldProps> = ({
  name,
  fieldType,
  icon,
  rules,
  defaultValue = '',
  ...props
}) => {
  const classes = useStyles();
  const { control, errors } = useFormContext();
  const error = errors && errors[name];

  switch (fieldType) {
    case FieldTypes.text:
      return (
        <div key={name}>
          <IonItem lines="none" className={classes.field}>
            {icon && <IonIcon icon={icon} slot="start" size="small" />}
            <Controller
              control={control}
              name={name}
              rules={rules}
              render={({ onChange, onBlur, value }) => (
                <TextInput onChange={onChange} value={value} onIonBlur={onBlur} {...props} />
              )}
              defaultValue={defaultValue}
            />
          </IonItem>
          {error && <p className={classes.message}>{error.message}</p>}
        </div>
      );
    case FieldTypes.phone:
      return (
        <div key={name}>
          <IonItem lines="none" className={classes.field}>
            {icon && <IonIcon icon={icon} slot="start" size="small" />}
            <Controller
              control={control}
              name={name}
              rules={rules}
              render={({ onChange, onBlur, value }) => (
                <PhoneInput onChange={onChange} value={value} onIonBlur={onBlur} {...props} />
              )}
              defaultValue={defaultValue}
            />
          </IonItem>
          {error && <p className={classes.message}>{error.message}</p>}
        </div>
      );
    case FieldTypes.code:
      return (
        <div key={name}>
          <IonItem lines="none" className={classes.field}>
            {icon && <IonIcon icon={icon} slot="start" size="small" />}
            <Controller
              control={control}
              name={name}
              rules={rules}
              render={({ onChange, onBlur, value }) => (
                <CodeInput onChange={onChange} value={value} onIonBlur={onBlur} {...props} />
              )}
              defaultValue={defaultValue}
            />
          </IonItem>
          {error && <p className={classes.message}>{error.message}</p>}
        </div>
      );
    default:
      return (
        <div key={name}>
          <IonItem lines="none" className={classes.field}>
            {icon && <IonIcon icon={icon} slot="start" size="small" />}
            <Controller
              control={control}
              name={name}
              rules={rules}
              render={({ onChange, onBlur, value }) => (
                <IonInput
                  onIonChange={(e: any) => onChange(e.target.value)}
                  value={value}
                  onIonBlur={onBlur}
                  {...props}
                />
              )}
              defaultValue={defaultValue}
            />
          </IonItem>
          {error && <p className={classes.message}>{error.message}</p>}
        </div>
      );
  }
};

export default MagicField;
