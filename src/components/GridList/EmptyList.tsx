import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import emptyListGraphic from './empty-list.svg';

type IEmptyList = {
  title?: string;
  subtitle?: string;
  graphic?: string | ReactNode;
};

const useStyles = createUseStyles({
  root: {
    textAlign: 'center',
    margin: {
      top: '10%',
      bottom: '10%',
    },
  },
  title: {
    fontWeight: 'bold !important',
    color: 'var(--ion-color-medium) !important',
  },
  subtitle: {
    color: 'var(--ion-color-medium) !important',
  },
  graphic: {
    maxHeight: 150,
  },
});

const EmptyList = ({
  title = 'No items available.',
  subtitle,
  graphic = emptyListGraphic,
}: IEmptyList) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="ion-padding">
        {typeof graphic === 'string' ? (
          <img src={graphic} alt="Empty List" className={classes.graphic} />
        ) : (
          graphic
        )}
        {title && <p className={classes.title}>{title}</p>}
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default EmptyList;
