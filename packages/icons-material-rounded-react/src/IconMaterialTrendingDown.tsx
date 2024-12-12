import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingDown'

      short_name='TrendingDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M744-320 536-526 433-423q-23 23-57 23t-57-23L108-636q-11-11-11.5-27.5T108-692q11-11 28-11t28 11l212 212 103-103q23-23 57-23t57 23l207 207v-64q0-17 11.5-28.5T840-480q17 0 28.5 11.5T880-440v160q0 17-11.5 28.5T840-240H680q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320h64Z"/>
    </Icon>
  );
});

IconMaterialTrendingDown.displayName = 'OnesyIconMaterialTrendingDown';

export default IconMaterialTrendingDown;
