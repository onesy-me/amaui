import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNephrology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nephrology'

      short_name='Nephrology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280q-100 0-170-70T80-520v-80q0-100 70-170t170-70q50 0 85 35t35 85q0 50-35 85t-85 35h-40q-17 0-28.5-11.5T240-640q0-17 11.5-28.5T280-680h40q17 0 28.5-11.5T360-720q0-17-11.5-28.5T320-760q-66 0-113 47t-47 113v80q0 66 47 113t113 47q17 0 28.5-11.5T360-400q0-17-11.5-28.5T320-440h-40q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520h40q50 0 85 35t35 85v240q0 17-11.5 28.5T400-120q-17 0-28.5-11.5T360-160v-127q-10 4-19.5 5.5T320-280Zm320 0q-11 0-20.5-1.5T600-287v127q0 17-11.5 28.5T560-120q-17 0-28.5-11.5T520-160v-240q0-50 35-85t85-35h40q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440h-40q-17 0-28.5 11.5T600-400q0 17 11.5 28.5T640-360q66 0 113-47t47-113v-80q0-66-47-113t-113-47q-17 0-28.5 11.5T600-720q0 17 11.5 28.5T640-680h40q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600h-40q-50 0-85-35t-35-85q0-50 35-85t85-35q100 0 170 70t70 170v80q0 100-70 170t-170 70ZM160-520v-80 80Zm640-80v80-80Z"/>
    </Icon>
  );
});

IconMaterialNephrology.displayName = 'OnesyIconMaterialNephrology';

export default IconMaterialNephrology;
