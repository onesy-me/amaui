import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsTennis = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsTennis'

      short_name='SportsTennis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m137-160-57-56 164-164q31-31 42.5-77.5T298-600q0-58 26-114t74-104q91-91 201-103t181 61q72 72 60 182T738-478q-48 48-104 74t-114 26q-97 0-142 11t-77 43L137-160Zm275-334q47 46 127 34t143-75q64-64 76.5-143.5T724-803q-48-48-125.5-36T456-763q-63 63-76.5 142.5T412-494ZM720-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T720-40Zm0-80q33 0 56.5-23.5T800-200q0-33-23.5-56.5T720-280q-33 0-56.5 23.5T640-200q0 33 23.5 56.5T720-120Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialSportsTennis.displayName = 'OnesyIconMaterialSportsTennis';

export default IconMaterialSportsTennis;
