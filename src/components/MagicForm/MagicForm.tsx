import { IonButton, IonLoading } from '@ionic/react';
import React, { PropsWithChildren, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

export interface MagicFormProps<I> {
  title?: string;
  subtitle?: string;
  error?: string;
  onSubmit: (input: I) => Promise<any>;
  submitText?: string;
}

const useStyles = createUseStyles({
  title: {
    marginTop: 0,
  },
  subtitle: {
    fontSize: 'small',
    color: 'var(--ion-color-medium)',
  },
  message: {
    color: 'var(--ion-color-danger)',
  },
});

export const MagicForm = <I, >({
  title,
  subtitle,
  error,
  onSubmit,
  submitText = 'Submit',
  children,
}: PropsWithChildren<MagicFormProps<I>>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formEl: any = useRef();
  const classes = useStyles();
  const methods = useForm({ mode: 'onBlur' });

  const onFinalSubmit = async (data: any) => {
    setIsSubmitting(true);
    await onSubmit(data);
    methods.reset();
    setIsSubmitting(false);
  };

  const onKeyDown = (e: any) => e.keyCode === 13 && methods.handleSubmit(onFinalSubmit)();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onFinalSubmit)}
        onKeyDown={onKeyDown}
        className="ion-padding"
        ref={(el) => (formEl.current = el)}
      >
        {title && <h2 className={classes.title}>{title}</h2>}
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
        {error && <p className={classes.message}>{error}</p>}
        {children}
        <IonButton type="submit" expand="full" size="large" className="ion-no-margin">
          {submitText}
        </IonButton>
        <IonLoading isOpen={isSubmitting} />
      </form>
    </FormProvider>
  );
};

export default MagicForm;
