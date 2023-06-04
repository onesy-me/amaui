import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Podium'

      short_name='Podium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 276q0 33-23.5 56.5T420 356q-13 0-24-3.5T374 341q-24 8-38.5 29T321 416h473q18 0 29.5 14t9.5 32l-28 200q-2 15-13.5 24.5T765 696H604v-80h127q5-30 8.5-60t8.5-60H212q5 30 8.5 60t8.5 60h127v80H195q-15 0-26.5-9.5T155 662l-28-200q-2-18 9.5-32t29.5-14h74q0-49 27-89t73-59q3-31 26-51.5t54-20.5q33 0 56.5 23.5T500 276ZM391 856h178l23-240H368l23 240Zm213 80H356q-16 0-26.5-10T317 900l-27-276q-4-35 20-61.5t59-26.5h222q35 0 59 26.5t20 61.5l-27 276q-2 16-12.5 26T604 936Z"/>
    </Icon>
  );
});

IconMaterialPodium.displayName = 'AmauiIconMaterialPodium';

export default IconMaterialPodium;
