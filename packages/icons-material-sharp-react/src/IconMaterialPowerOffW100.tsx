import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffW100'

      short_name='PowerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-172v-102L292-402v-215h25l23 23h-20v180l128 128v86h64v-86l48-48L78-816l20-20 736 736-20 20-234-234-40 40v102H420Zm236-218-16-16v-194H446l-56-56v-132h28v160h124v-160h28v160h98v226l-12 12ZM545-501Zm-105 47Z"/>
    </Icon>
  );
});

IconMaterialPowerOffW100.displayName = 'OnesyIconMaterialPowerOffW100';

export default IconMaterialPowerOffW100;
