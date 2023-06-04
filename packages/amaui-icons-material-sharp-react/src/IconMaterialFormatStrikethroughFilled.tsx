import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatStrikethroughFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughFilled'

      short_name='FormatStrikethrough'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 14v-2h20v2Zm8.5-4V7H5V4h14v3h-5.5v3Zm0 10v-4h3v4Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughFilled.displayName = 'AmauiIconMaterialFormatStrikethroughFilled';

export default IconMaterialFormatStrikethroughFilled;
