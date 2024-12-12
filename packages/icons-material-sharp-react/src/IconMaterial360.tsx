import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial360 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360'

      short_name='360'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-160-56-56 70-72q-128-17-211-70T80-480q0-83 115.5-141.5T480-680q169 0 284.5 58.5T880-480q0 62-66.5 111T640-296v-82q77-20 118.5-49.5T800-480q0-32-85.5-76T480-600q-149 0-234.5 44T160-480q0 24 51 57.5T356-372l-52-52 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterial360.displayName = 'OnesyIconMaterial360';

export default IconMaterial360;
