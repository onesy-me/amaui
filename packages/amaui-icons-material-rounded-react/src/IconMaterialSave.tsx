import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSave = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Save'

      short_name='Save'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h11.175q.4 0 .763.15.362.15.637.425l2.85 2.85q.275.275.425.637.15.363.15.763V19q0 .825-.587 1.413Q19.825 21 19 21ZM19 7.85 16.15 5H5v14h14ZM12 18q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-5-8h7q.425 0 .713-.288Q15 9.425 15 9V7q0-.425-.287-.713Q14.425 6 14 6H7q-.425 0-.713.287Q6 6.575 6 7v2q0 .425.287.712Q6.575 10 7 10ZM5 7.85V19 5Z"/>
    </Icon>
  );
});

IconMaterialSave.displayName = 'AmauiIconMaterialSave';

export default IconMaterialSave;
