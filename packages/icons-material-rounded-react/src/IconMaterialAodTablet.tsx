import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAodTablet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTablet'

      short_name='AodTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M350-500q-13 0-21.5-8.5T320-530q0-13 8.5-21.5T350-560h260q13 0 21.5 8.5T640-530q0 13-8.5 21.5T610-500H350Zm40 120q-13 0-21.5-8.5T360-410q0-13 8.5-21.5T390-440h180q13 0 21.5 8.5T600-410q0 13-8.5 21.5T570-380H390ZM120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm40-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z"/>
    </Icon>
  );
});

IconMaterialAodTablet.displayName = 'OnesyIconMaterialAodTablet';

export default IconMaterialAodTablet;
