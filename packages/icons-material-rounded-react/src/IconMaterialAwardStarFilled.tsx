import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAwardStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AwardStarFilled'

      short_name='AwardStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-381 77 46q11 7 21.5-.5T586-356l-20-87 68-59q10-9 6-21.5T622-537l-89-7-35-83q-5-12-18-12t-18 12l-35 83-89 7q-14 1-18 13.5t6 21.5l68 59-20 87q-3 13 7.5 20.5t21.5.5l77-46ZM346-160H240q-33 0-56.5-23.5T160-240v-106l-77-78q-11-12-17-26.5T60-480q0-15 6-29.5T83-536l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q12-11 26.5-17t29.5-6q15 0 29.5 6t26.5 17l78 77h106q33 0 56.5 23.5T800-720v106l77 78q11 12 17 26.5t6 29.5q0 15-6 29.5T877-424l-77 78v106q0 33-23.5 56.5T720-160H614l-78 77q-12 11-26.5 17T480-60q-15 0-29.5-6T424-83l-78-77Z"/>
    </Icon>
  );
});

IconMaterialAwardStarFilled.displayName = 'OnesyIconMaterialAwardStarFilled';

export default IconMaterialAwardStarFilled;
