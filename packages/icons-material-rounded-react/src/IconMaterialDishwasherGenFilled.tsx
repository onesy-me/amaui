import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDishwasherGenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DishwasherGenFilled'

      short_name='DishwasherGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-680q17 0 28.5-11.5T360-720q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720q0 17 11.5 28.5T320-680Zm120 0q17 0 28.5-11.5T480-720q0-17-11.5-28.5T440-760q-17 0-28.5 11.5T400-720q0 17 11.5 28.5T440-680Zm40 440q63 0 107.5-43T632-388q0-29-10-56.5T592-492l-84-84q-12-12-28-12t-28 12l-80 80q-22 22-33.5 50T328-388q2 62 46 105t106 43Zm0-76q-30 0-51-21t-21-51q0-15 5.5-28.5T430-441l50-50 49 49q11 11 17 25t6 29q0 30-21 51t-51 21ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Z"/>
    </Icon>
  );
});

IconMaterialDishwasherGenFilled.displayName = 'OnesyIconMaterialDishwasherGenFilled';

export default IconMaterialDishwasherGenFilled;
