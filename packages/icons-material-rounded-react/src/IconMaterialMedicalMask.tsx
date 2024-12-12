import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMedicalMask = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalMask'

      short_name='MedicalMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q-64 0-127-5t-126-15q-29-4-48-26.5T160-299v-26q-54-14-87-57t-33-98q0-54 33-97t87-57v-46q0-32 22.5-56t55.5-24q29 0 58 5.5t59 7.5q31 4 62 4.5t63 .5q31 0 62-1t63-4q29-2 57.5-7.5T720-760q33 0 56.5 23.5T800-680v46q53 14 86.5 57t33.5 97q0 55-33.5 97.5T800-326v26q0 30-19.5 52.5T732-220q-63 11-126 15.5T480-200Zm0-80q60 0 120-5t120-15l-.5.5.5-.5v-380q-60 9-120 13.5T480-662q-61 0-121-4.5T240-680q-1 0-.5.5t.5-.5v380q60 10 119.5 15t120.5 5Zm0-60q43 0 85.5-5t84.5-16q17-5 25-19t3-30q-5-16-19-24.5t-30-3.5q-37 10-74 14t-75 4q-38 0-75.5-3.5T330-438q-16-5-30 3t-19 24q-5 16 3.5 30t24.5 19q42 13 84.5 17.5T480-340Zm-320-71v-137q-19 11-29.5 29T120-480q0 22 10.5 40t29.5 29Zm640 0q18-11 29-29t11-40q0-21-11-39t-29-29v137Zm-320-89q43 0 85.5-5t84.5-16q17-5 25-19t3-30q-5-16-19-24.5t-30-3.5q-37 10-74 14t-75 4q-38 0-75.5-4T330-598q-16-5-30 3t-19 25q-5 16 3 30t25 19q42 11 84.5 16t86.5 5ZM240-299v-381 381Z"/>
    </Icon>
  );
});

IconMaterialMedicalMask.displayName = 'OnesyIconMaterialMedicalMask';

export default IconMaterialMedicalMask;
