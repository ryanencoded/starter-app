import { JSX } from '@ionic/core';
import { IonInput } from '@ionic/react';
import { AsYouType } from 'libphonenumber-js';
import React from 'react';
import { Rifm } from 'rifm';

interface BaseProps extends React.HTMLAttributes<HTMLIonInputElement> {
  value?: string;
  onChange?: any;
}

export type PhoneInputProps = BaseProps & JSX.IonInput;

const parseDigits = (s: string) => (s.match(/\d+/g) || []).join('');
const formatPhone = (s: string) => {
  const digits = parseDigits(s).substring(0, 12);
  return new AsYouType('US').input(digits);
};

export const PhoneInput: React.FC<PhoneInputProps> = ({ onChange, value = '', ...inputProps }) => {
  return (
    <Rifm
      accept={/\d+/g}
      // do not jump after ) until see number before
      mask={value.length < 6 && /[^\d]+/.test(value[3]) ? undefined : value.length >= 16}
      format={formatPhone}
      value={value}
      onChange={onChange}
    >
      {({ onChange: x, value: y }: any) => (
        <IonInput type="tel" inputmode="tel" {...inputProps} value={y} onIonChange={x} />
      )}
    </Rifm>
  );
};

export default PhoneInput;
