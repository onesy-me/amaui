import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKidStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KidStarW100Filled'

      short_name='KidStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m331-668 102-137q8.8-11.87 20.9-17.44Q466-828 480-828q14 0 26.1 5.56 12.1 5.57 20.9 17.44l102 137 158 54q20 7 30.5 22.66t10.5 34.6q0 8.74-2.57 17.31-2.56 8.57-8.43 16.43L713-384l4 150q1 26.14-17.35 44.07T657-172q1 0-17-2l-160-48-160 48q-5 2-9.24 2H303q-25 0-43-17.93T243-234l4-151-104-138q-5.87-7.96-8.43-16.64Q132-548.32 132-557q0-18.83 11.07-35.03Q154.15-608.22 174-615l157-53Z"/>
    </Icon>
  );
});

IconMaterialKidStarW100Filled.displayName = 'OnesyIconMaterialKidStarW100Filled';

export default IconMaterialKidStarW100Filled;
