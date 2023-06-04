import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusLaserPointer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusLaserPointer'

      short_name='StylusLaserPointer'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 976q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm179-139q-6-55-41-97t-87-57l106-107H236q-32 0-54-22t-22-54q0-20 10.5-37.5T198 434l486-291q18-11 38-5.5t31 23.5q11 18 5.5 37.5T736 229L360 456h364q32 0 54 22t22 54q0 18-4.5 35.5T778 598L539 837Z"/>
    </Icon>
  );
});

IconMaterialStylusLaserPointer.displayName = 'AmauiIconMaterialStylusLaserPointer';

export default IconMaterialStylusLaserPointer;
