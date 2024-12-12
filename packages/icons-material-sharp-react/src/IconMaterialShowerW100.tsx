import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowerW100'

      short_name='Shower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M323.93-296Q312-296 304-304.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm156 0Q468-296 460-304.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm156 0Q624-296 616-304.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8ZM252-452v-28q0-91 62.5-156.5T466-708v-80h28v80q89 6 151.5 71.5T708-480v28H252Zm28-28h400q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480Zm43.93 300Q312-180 304-188.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm156 0Q468-180 460-188.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm156 0Q624-180 616-188.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialShowerW100.displayName = 'OnesyIconMaterialShowerW100';

export default IconMaterialShowerW100;
