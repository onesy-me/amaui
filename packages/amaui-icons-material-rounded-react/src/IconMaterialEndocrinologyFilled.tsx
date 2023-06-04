import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEndocrinologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EndocrinologyFilled'

      short_name='Endocrinology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 730V312q-18-20-33.5-42T98 223q-7-14 0-27.5t22-19.5q15-6 30-1t23 19q47 84 128.5 133T480 376q95 0 174.5-47T782 202q10-16 25.5-24.5T840 176q16 7 21 23t-3 31q-12 23-26.5 43T800 312v418q0 35 16.5 64.5T862 843q13 8 18 23t0 30q-5 16-18.5 23.5t-27.5.5q-53-28-83.5-78.5T720 730V382q-53 35-113.5 54.5T480 456q-66 0-127-19.5T240 382v348q0 61-31 111.5T125 920q-14 7-27-.5T80 896q-5-15 0-30t18-23q29-18 45.5-48t16.5-65Zm240 126q-50 0-85-35t-35-85V523q0-15 11.5-24t25.5-5l17 4q46 11 83.5 38.5T480 602q25-38 62.5-65.5T626 498l17-4q14-4 25.5 5t11.5 24v213q0 50-35 85t-85 35q-23 0-43.5-8.5T480 825q-16 14-36.5 22.5T400 856Z"/>
    </Icon>
  );
});

IconMaterialEndocrinologyFilled.displayName = 'AmauiIconMaterialEndocrinologyFilled';

export default IconMaterialEndocrinologyFilled;
