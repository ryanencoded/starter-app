import { JSX } from '@ionic/core';
import { IonInput, IonTextarea } from '@ionic/react';
import React from 'react';
import { Rifm } from 'rifm';

interface BaseProps extends React.HTMLAttributes<HTMLIonInputElement | HTMLIonTextareaElement> {
  value?: string;
  onChange?: any;
  multiline?: boolean;
}

export type TextInputProps = BaseProps & (JSX.IonInput | JSX.IonTextarea);

export const TextInput: React.FC<TextInputProps> = ({
  multiline = false,
  onChange,
  value = '',
  ...inputProps
}) => {
  return (
    <Rifm
      accept={/./g}
      replace={(v) => v.slice(0, 1).toUpperCase() + v.slice(1)}
      format={(v) => v}
      value={value}
      onChange={onChange}
    >
      {({ onChange: x, value: y }: any) => {
        if (multiline) {
          return <IonTextarea inputmode="text" {...inputProps} value={y} onIonChange={x} />;
        } else {
          return (
            <IonInput inputmode="text" type="text" {...inputProps} value={y} onIonChange={x} />
          );
        }
      }}
    </Rifm>
  );
};

export default TextInput;
