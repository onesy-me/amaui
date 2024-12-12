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
      <path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-200q0-17 11.5-28.5T120-440h80v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h40q17 0 28.5 11.5T880-400v200q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Z"/>
    </Icon>
  );
});

IconMaterialBathtubFilled.displayName = 'OnesyIconMaterialBathtubFilled';

export default IconMaterialBathtubFilled;
