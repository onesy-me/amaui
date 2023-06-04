import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDermatologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DermatologyFilled'

      short_name='Dermatology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 936V496h280v80q0 50 35 85t85 35q50 0 85-35t35-85v-80h280v440H80Zm400-320q-17 0-28.5-11.5T440 576q0-109 25-215t109-175q13-11 29-9.5t27 14.5q11 13 9.5 29T625 247q-70 59-87.5 148T520 576q0 17-11.5 28.5T480 616ZM230 716q13 0 21.5-8.5T260 686q0-13-8.5-21.5T230 656q-13 0-21.5 8.5T200 686q0 13 8.5 21.5T230 716Zm40 100q13 0 21.5-8.5T300 786q0-13-8.5-21.5T270 756q-13 0-21.5 8.5T240 786q0 13 8.5 21.5T270 816Zm460-100q13 0 21.5-8.5T760 686q0-13-8.5-21.5T730 656q-13 0-21.5 8.5T700 686q0 13 8.5 21.5T730 716Z"/>
    </Icon>
  );
});

IconMaterialDermatologyFilled.displayName = 'AmauiIconMaterialDermatologyFilled';

export default IconMaterialDermatologyFilled;
