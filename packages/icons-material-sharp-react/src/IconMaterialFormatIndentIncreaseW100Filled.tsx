import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatIndentIncreaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncreaseW100Filled'

      short_name='FormatIndentIncrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28h616v28H172Zm320-147v-28h296v28H492Zm0-147v-28h296v28H492Zm0-147v-28h296v28H492ZM172-760v-28h616v28H172Zm0 378v-196l98 98-98 98Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentIncreaseW100Filled.displayName = 'OnesyIconMaterialFormatIndentIncreaseW100Filled';

export default IconMaterialFormatIndentIncreaseW100Filled;
