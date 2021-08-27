import React from 'react';

export interface ListGeneratorProps {
  renderItem: (props: any) => JSX.Element;
  multiplier?: number;
}

const ListGenerator: React.FC<ListGeneratorProps> = ({ renderItem: Item, multiplier = 4 }) => {
  return (
    <React.Fragment>
      {[...Array(multiplier)].map((_, index) => (
        <Item key={index} />
      ))}
    </React.Fragment>
  );
};

export default ListGenerator;
