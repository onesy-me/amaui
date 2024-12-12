import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmokingRoomsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokingRoomsFilled'

      short_name='SmokingRooms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M140-200q-25 0-42.5-17.5T80-260q0-25 17.5-42.5T140-320h510q13 0 21.5 8.5T680-290v60q0 13-8.5 21.5T650-200H140Zm610 0q-13 0-21.5-8.5T720-230v-60q0-13 8.5-21.5T750-320q13 0 21.5 8.5T780-290v60q0 13-8.5 21.5T750-200Zm100 0q-13 0-21.5-8.5T820-230v-60q0-13 8.5-21.5T850-320q13 0 21.5 8.5T880-290v60q0 13-8.5 21.5T850-200ZM750-360q-13 0-21.5-8.5T720-390v-22q0-39-23-59.5T642-492h-62q-56 0-95-39t-39-95q0-56 39-95t95-39q13 0 21.5 8.5T610-730q0 13-8.5 21.5T580-700q-30 0-52 21t-22 53q0 32 22 53t52 21h62q56 0 97 36t41 90v36q0 13-8.5 21.5T750-360Zm100 0q-13 0-21.5-8.5T820-390v-60q0-66-46-114t-114-48q-13 0-21.5-8.5T630-642q0-13 8.5-21.5T660-672q30 0 52-22t22-52q0-30-22-52t-52-22q-13 0-21.5-8.5T630-850q0-13 8.5-21.5T660-880q56 0 95 39t39 95q0 29-11 52.5T754-650q56 26 91 80t35 120v60q0 13-8.5 21.5T850-360Z"/>
    </Icon>
  );
});

IconMaterialSmokingRoomsFilled.displayName = 'OnesyIconMaterialSmokingRoomsFilled';

export default IconMaterialSmokingRoomsFilled;
