import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalMaskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMaskFilled'

      short_name='MedicalMask'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 856q-64 0-127-5.5T227 836q-29-5-48-27.5T160 757v-26q-53-14-86.5-57T40 576q0-54 33.5-97t86.5-57v-46q0-33 23-56.5t55-23.5q29 0 58.5 5.5T355 309q32 3 62.5 4t62.5 1q32 0 62.5-1t62.5-4q29-2 57.5-7.5T720 296q33 0 56.5 23.5T800 376v46q53 14 86.5 56.5T920 576q0 55-33.5 97.5T800 730v26q0 30-19.5 52.5T732 836q-63 10-126 15t-126 5Zm0-140q43 0 85.5-5t84.5-16q17-5 25-19t3-30q-5-16-19-24.5t-30-3.5q-37 10-74 14t-75 4q-38 0-75.5-3.5T330 618q-16-5-30 3t-19 24q-5 16 3.5 30t24.5 19q42 13 84.5 17.5T480 716Zm-320-71V508q-19 11-29.5 29T120 576q0 22 10.5 40t29.5 29Zm640 0q18-11 29-29t11-40q0-21-11-39t-29-29v137Zm-320-89q43 0 85.5-5t84.5-16q17-5 25-19t3-30q-5-16-19-24.5t-30-3.5q-37 10-74 14t-75 4q-38 0-75.5-4T330 458q-16-5-30 3t-19 25q-5 16 3 30t25 19q42 11 84.5 16t86.5 5Z"/>
    </Icon>
  );
});

IconMaterialMedicalMaskFilled.displayName = 'AmauiIconMaterialMedicalMaskFilled';

export default IconMaterialMedicalMaskFilled;
