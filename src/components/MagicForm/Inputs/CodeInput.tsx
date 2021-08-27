import { JSX } from '@ionic/core';
import { IonInput } from '@ionic/react';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Rifm } from 'rifm';

interface BaseProps extends React.HTMLAttributes<HTMLIonInputElement> {
  value?: string;
  onChange?: any;
}

export type CodeInputProps = BaseProps & JSX.IonInput;

const useStyles = createUseStyles({
  input: {
    textAlign: 'center',
    letterSpacing: '0.3em',
    '& .native-input': {
      '--padding-start': '10px',
    },
  },
});

export const CodeInput: React.FC<CodeInputProps> = ({ onChange, value = '', ...inputProps }) => {
  const classes = useStyles();

  return (
    <Rifm
      accept={/[\d.$]/g}
      mask={value.length < 6 ? undefined : value.length === 6}
      format={(v) => v}
      value={value}
      onChange={onChange}
    >
      {({ onChange: x, value: y }: any) => (
        <IonInput
          inputmode="numeric"
          type="tel"
          className={classes.input}
          {...inputProps}
          value={y}
          onIonChange={x}
        />
      )}
    </Rifm>
  );
};

export default CodeInput;
