import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorSliding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSliding'

      short_name='DoorSliding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-440q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520q17 0 28.5 11.5T400-480q0 17-11.5 28.5T360-440Zm240 0q-17 0-28.5-11.5T560-480q0-17 11.5-28.5T600-520q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440ZM160-120q-17 0-28.5-11.5T120-160q0-16 14.5-22.5T160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm80-80h200v-560H240v560Zm280 0h200v-560H520v560Zm-40-320Z"/>
    </Icon>
  );
});

IconMaterialDoorSliding.displayName = 'OnesyIconMaterialDoorSliding';

export default IconMaterialDoorSliding;
