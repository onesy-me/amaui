import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBathtubFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathtubFilled'

      short_name='Bathtub'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM160-80v-40H80v-320h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v320h-80v40H160Z"/>
    </Icon>
  );
});

IconMaterialBathtubFilled.displayName = 'OnesyIconMaterialBathtubFilled';

export default IconMaterialBathtubFilled;
