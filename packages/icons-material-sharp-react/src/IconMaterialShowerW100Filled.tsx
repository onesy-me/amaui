import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowerW100Filled'

      short_name='Shower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M323.93-296Q312-296 304-304.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm156 0Q468-296 460-304.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm156 0Q624-296 616-304.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8ZM252-452v-28q0-91 62.5-156.5T466-708v-80h28v80q89 6 151.5 71.5T708-480v28H252Zm71.93 272Q312-180 304-188.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm156 0Q468-180 460-188.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Zm156 0Q624-180 616-188.07t-8-20q0-11.93 8.07-19.93t20-8q11.93 0 19.93 8.07t8 20q0 11.93-8.07 19.93t-20 8Z"/>
    </Icon>
  );
});

IconMaterialShowerW100Filled.displayName = 'OnesyIconMaterialShowerW100Filled';

export default IconMaterialShowerW100Filled;
