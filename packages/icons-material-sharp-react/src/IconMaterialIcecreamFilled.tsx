import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIcecreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IcecreamFilled'

      short_name='Icecream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-40 294-400q-71 3-122.5-41T120-560q0-51 29.5-92t74.5-58q18-91 89.5-150.5T480-920q95 0 166.5 59.5T736-710q45 17 74.5 58t29.5 92q0 75-53 119t-119 41L482-40Zm0-174 108-210q-24 12-52 18t-58 6q-27 0-54.5-6T372-424l110 210Z"/>
    </Icon>
  );
});

IconMaterialIcecreamFilled.displayName = 'OnesyIconMaterialIcecreamFilled';

export default IconMaterialIcecreamFilled;
