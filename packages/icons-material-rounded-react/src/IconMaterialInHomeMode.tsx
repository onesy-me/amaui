import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInHomeMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeMode'

      short_name='InHomeMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-510ZM240-160q-33 0-56.5-23.5T160-240v-295l-40 31q-13 10-29.5 8T64-512q-10-13-7.5-29T72-567l359-276q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l359 275q13 10 15.5 26t-7.5 30q-10 14-26 15.5t-30-8.5L480-780 240-596v356h81q17 0 28 11.5t11 28.5q0 17-11.5 28.5T320-160h-80Zm357 63q-8 0-15-3t-13-9L456-222q-12-12-12-28t12-28q12-12 28-12t28 12l85 84 198-198q12-12 28.5-11.5T852-391q12 12 12 28t-12 28L625-109q-6 6-13 9t-15 3Z"/>
    </Icon>
  );
});

IconMaterialInHomeMode.displayName = 'OnesyIconMaterialInHomeMode';

export default IconMaterialInHomeMode;
