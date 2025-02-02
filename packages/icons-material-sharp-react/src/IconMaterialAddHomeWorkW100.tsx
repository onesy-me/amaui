import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHomeWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWorkW100'

      short_name='AddHomeWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M238-200v-174h164v174-174H238v174Zm390-334ZM92-172v-322l228-162 243 173q-5 5-9 10.5t-9 10.5L320-620 120-480v280h118v-174h164v202h-28v-174H266v174H92Zm776-616v324q-7-5-13.5-8.5T840-480v-280H448v97l-28-20v-105h448ZM692-612h56v-56h-56v56Zm28 520q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105T720-92Zm-14-34h28v-100h100v-28H734v-100h-28v100H606v28h100v100Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWorkW100.displayName = 'OnesyIconMaterialAddHomeWorkW100';

export default IconMaterialAddHomeWorkW100;
