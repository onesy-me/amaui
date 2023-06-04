import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterBottleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleFilled'

      short_name='WaterBottle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M393 976q-31 0-54-20.5T313 904l-31-346q-1-10 3.5-18.5T299 526q8-5 14-12t6-17q0-9-4-16.5T303 468q-10-5-15-15.5t-2-21.5l26-105q3-14 14-22t25-8h109v-40h-20q-17 0-28.5-11.5T400 216q0-17 11.5-28.5T440 176h120q17 0 28.5 11.5T600 216q0 17-11.5 28.5T560 256h-20v40h109q14 0 24.5 8t13.5 22l27 105q3 11-2 21.5T697 468q-8 4-12.5 11t-4.5 16q0 11 5.5 18.5T700 526q9 5 14 13.5t4 18.5l-31 345q-3 31-26 52t-54 21H393Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleFilled.displayName = 'AmauiIconMaterialWaterBottleFilled';

export default IconMaterialWaterBottleFilled;
