import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwordRose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordRose'

      short_name='SwordRose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m644-484-56-57 212-212v-47h-47L541-588l-57-56 236-236h160v160L644-484ZM170-64 64-170l144-145-88-88 84-84 62 61 48-48 57 56-48 48 47 47 48-48 56 57-48 48 62 61-85 85-88-88L170-64Zm668-329q5-23 0-46t-15-45q-17 16-30 35.5T775-406q-5 23 .5 45.5T790-316q17-16 30-35t18-42ZM207-626q19 19 43.5 25t47.5-2l-19-19q-18-18-43-24.5t-48 1.5l19 19Zm73-180-79 78q36-3 71.5 9t63.5 40l19 19q8-23 3-48t-25-44l-53-54ZM823-80 357-544q-49 30-107 23.5T150-569L40-680l240-239 110 110q43 43 48.5 101T414-601l289 289q-8-26-10-54t3-56q6-30 20.5-56t34-48.5q19.5-22.5 44.5-41t52-32.5q39 48 60 105t9 117q-11 51-42.5 91T797-218l82 82-56 56ZM310-650Z"/>
    </Icon>
  );
});

IconMaterialSwordRose.displayName = 'OnesyIconMaterialSwordRose';

export default IconMaterialSwordRose;
