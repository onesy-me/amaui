import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVentilator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ventilator'

      short_name='Ventilator'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 376h160v-80H520v80ZM160 776q17 0 28.5-11.5T200 736q0-17-11.5-28.5T160 696q-17 0-28.5 11.5T120 736q0 17 11.5 28.5T160 776Zm320 160q-76 0-144-24t-125-67q-11 5-24 8t-27 3q-50 0-85-35t-35-85q0-23 8-43t22-36q-11-28-18-57t-10-60l80-8q2 23 6.5 44t12.5 41q5-1 9.5-1h9.5q50 0 85 35t35 85q0 14-3 26.5t-8 24.5q37 27 80 44.5t91 22.5V656q0-17-11.5-28.5T400 616q-66 0-113-47t-47-113q0-66 47-113t113-47h40v-80h320v80h80v80h-80v80H440v-80h-40q-33 0-56.5 23.5T320 456q0 33 23.5 56.5T400 536q50 0 85 35t35 85v198q87-10 158-57t113-120l-49-25 36-71 46 23q5-17 8.5-35t5.5-37l80 8q-2 26-8 51t-14 49l42 21-36 71-38-19q-57 101-159 162t-225 61Zm40-560v-80 80ZM160 736Z"/>
    </Icon>
  );
});

IconMaterialVentilator.displayName = 'AmauiIconMaterialVentilator';

export default IconMaterialVentilator;
