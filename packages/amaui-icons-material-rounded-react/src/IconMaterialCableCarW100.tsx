import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCableCarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableCarW100'

      short_name='CableCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h26v-480h-26q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h102l15-25q4-7 10.79-11 6.8-4 15.21-4h301q8.41 0 15.21 3.5Q652-781 656-774l16 26h102q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-26v480h26q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H641q0 11-8.5 19.5T613-184H347q-11 0-19.5-8.5T319-212H186Zm54-284h141v-154q0-29.17-20.38-49.58Q340.24-720 311.12-720T261-699.58q-21 20.41-21 49.58v154Zm169 0h141v-154q0-29.17-20.38-49.58Q509.24-720 480.12-720T430-699.58q-21 20.41-21 49.58v154Zm170 0h141v-154q0-29.17-21-49.58Q678-720 648.88-720q-29.12 0-49.5 20.42Q579-679.17 579-650v154ZM240-240h480v-228H240v228Zm240.24-73q16.76 0 28.26-11t11.5-27.76q0-16.77-11.74-28.5Q496.53-392 479.76-392q-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5Q440-335 451.74-324q11.73 11 28.5 11ZM240-468h480-480Z"/>
    </Icon>
  );
});

IconMaterialCableCarW100.displayName = 'AmauiIconMaterialCableCarW100';

export default IconMaterialCableCarW100;
