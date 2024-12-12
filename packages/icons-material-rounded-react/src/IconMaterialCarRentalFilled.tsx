import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarRentalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRentalFilled'

      short_name='CarRental'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-680q-50 0-85-35t-35-85q0-50 35-85t85-35q38 0 69 22.5t45 57.5h286q17 0 28.5 11.5T760-800q0 16-14.5 22.5T720-760v40q0 17-11.5 28.5T680-680q-17 0-28.5-11.5T640-720v-40H434q-14 35-45 57.5T320-680Zm0-80q17 0 28.5-11.5T360-800q0-17-11.5-28.5T320-840q-17 0-28.5 11.5T280-800q0 17 11.5 28.5T320-760Zm40 500q17 0 28.5-11.5T400-300q0-17-11.5-28.5T360-340q-17 0-28.5 11.5T320-300q0 17 11.5 28.5T360-260Zm240 0q17 0 28.5-11.5T640-300q0-17-11.5-28.5T600-340q-17 0-28.5 11.5T560-300q0 17 11.5 28.5T600-260ZM240-80q-17 0-28.5-11.5T200-120v-243q0-7 1-13.5t3-12.5l54-157q8-24 29-39t47-15h292q26 0 47 15t29 39l54 157q2 6 3 12.5t1 13.5v243q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-40H280v40q0 17-11.5 28.5T240-80Zm66-360h348l-28-80H334l-28 80Z"/>
    </Icon>
  );
});

IconMaterialCarRentalFilled.displayName = 'OnesyIconMaterialCarRentalFilled';

export default IconMaterialCarRentalFilled;
