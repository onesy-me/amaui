import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRebaseEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseEdit'

      short_name='RebaseEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-120v-107q0-8 3-15t9-13l282-281q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l49 50q11 12 17 26.5t6 29.5q0 15-6.5 29.5T856-374L575-92q-6 6-13 9t-15 3H440q-17 0-28.5-11.5T400-120Zm397-308-50-49 50 49ZM480-160h50l162-162-25-25-25-25-162 162v50Zm187-187-25-25 25 25 25 25-25-25ZM200-80q-50 0-85-35t-35-85q0-39 22.5-69t57.5-43v-335q-35-13-57.5-43.5T80-760q0-50 35-85t85-35q39 0 69.5 22.5T313-800h134l-45-45q-12-12-12-28t12-28q12-12 28.5-12t28.5 12l113 113q12 12 12 28t-12 28L458-618q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l45-45H313q-9 26-28 45t-45 28v334q35 13 57.5 43.5T320-200q0 50-35 85t-85 35Zm560-800q50 0 85 35t35 85q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-50 35-85t85-35ZM200-160q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm0-560q17 0 28.5-11.5T240-760q0-17-11.5-28.5T200-800q-17 0-28.5 11.5T160-760q0 17 11.5 28.5T200-720Zm560 0q17 0 28.5-11.5T800-760q0-17-11.5-28.5T760-800q-17 0-28.5 11.5T720-760q0 17 11.5 28.5T760-720ZM200-200Zm0-560Zm560 0Z"/>
    </Icon>
  );
});

IconMaterialRebaseEdit.displayName = 'OnesyIconMaterialRebaseEdit';

export default IconMaterialRebaseEdit;
