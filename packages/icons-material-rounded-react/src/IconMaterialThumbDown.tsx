import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDown'

      short_name='ThumbDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-320q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14h440v520L440-82q-15 15-35.5 17.5T365-72q-19-10-28-28t-4-37l45-183H120Zm480-34v-406H240L120-480v80h360l-54 220 174-174Zm200-486q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H680v-80h120v-360H680v-80h120Zm-200 80v406-406Z"/>
    </Icon>
  );
});

IconMaterialThumbDown.displayName = 'OnesyIconMaterialThumbDown';

export default IconMaterialThumbDown;
