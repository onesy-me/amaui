import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdbFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdbFilled'

      short_name='Adb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-520v-40q0-72 32.5-131.5T320-789l-75-75 35-36 85 85q26-12 55.5-18.5T480-840q30 0 59.5 6.5T595-815l85-85 35 36-75 75q55 38 87.5 97.5T760-560v40H200Zm400-80q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640q0 17 11.5 28.5T600-600Zm-240 0q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600ZM480-40q-117 0-198.5-81.5T200-320v-160h560v160q0 117-81.5 198.5T480-40Z"/>
    </Icon>
  );
});

IconMaterialAdbFilled.displayName = 'OnesyIconMaterialAdbFilled';

export default IconMaterialAdbFilled;
