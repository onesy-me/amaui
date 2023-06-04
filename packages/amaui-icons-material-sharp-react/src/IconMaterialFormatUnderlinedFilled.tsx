import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedFilled'

      short_name='FormatUnderlined'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21v-2h14v2Zm7-4q-2.525 0-4.263-1.738Q6 13.525 6 11V3h2.5v8q0 1.475 1.012 2.488Q10.525 14.5 12 14.5t2.488-1.012Q15.5 12.475 15.5 11V3H18v8q0 2.525-1.738 4.262Q14.525 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlinedFilled.displayName = 'AmauiIconMaterialFormatUnderlinedFilled';

export default IconMaterialFormatUnderlinedFilled;
