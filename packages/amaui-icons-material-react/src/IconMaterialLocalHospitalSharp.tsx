import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalHospitalSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalHospitalSharp'
      short_name='LocalHospital'

      {...props}
    >
      <path d="M10.5 17H13.5V13.5H17V10.5H13.5V7H10.5V10.5H7V13.5H10.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialLocalHospitalSharp.displayName = 'AmauiIconMaterialLocalHospitalSharp';

export default IconMaterialLocalHospitalSharp;
