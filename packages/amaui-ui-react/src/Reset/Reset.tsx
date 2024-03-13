import React from 'react';

import { reset } from '@amaui/style-react';

import { IBaseElement } from '../types';

const useReset = reset();

export interface IReset extends IBaseElement {

}

const Reset: React.FC<IReset> = (props) => {
  const { children, ...other } = props;

  useReset(other);

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

Reset.displayName = 'amaui-Reset';

export default Reset;
