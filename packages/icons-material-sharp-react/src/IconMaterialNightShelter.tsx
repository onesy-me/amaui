import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightShelter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelter'

      short_name='NightShelter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240h40v-60h320v60h40v-160q0-33-23.5-56.5T600-480H460v140H320v-180h-40v280Zm110-120q21 0 35.5-14.5T440-410q0-21-14.5-35.5T390-460q-21 0-35.5 14.5T340-410q0 21 14.5 35.5T390-360ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
});

IconMaterialNightShelter.displayName = 'OnesyIconMaterialNightShelter';

export default IconMaterialNightShelter;
