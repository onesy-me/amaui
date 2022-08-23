import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermostatAutoTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatAutoTwoTone'
      short_name='ThermostatAuto'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M9.8,13.6L9,13V6c0-0.55-0.45-1-1-1S7,5.45,7,6v7l-0.8,0.6C5.45,14.16,5,15.06,5,16h6 C11,15.06,10.55,14.17,9.8,13.6z" opacity=".3"/><path d="M11,12V6c0-1.66-1.34-3-3-3S5,4.34,5,6v6c-1.21,0.91-2,2.37-2,4c0,1.12,0.38,2.14,1,2.97V19h0.02c0.91,1.21,2.35,2,3.98,2 s3.06-0.79,3.98-2H12v-0.03c0.62-0.83,1-1.85,1-2.97C13,14.37,12.21,12.91,11,12z M5,16c0-0.94,0.45-1.84,1.2-2.4L7,13V6 c0-0.55,0.45-1,1-1s1,0.45,1,1v7l0.8,0.6c0.75,0.57,1.2,1.46,1.2,2.4H5z M18.62,4h-1.61l-3.38,9h1.56L16,10.7h3.63l0.8,2.3H22 L18.62,4z M16.47,9.39l1.31-3.72h0.08l1.31,3.72H16.47z"/></g></g>
    </Icon>
  );
});

IconMaterialThermostatAutoTwoTone.displayName = 'AmauiIconMaterialThermostatAutoTwoTone';

export default IconMaterialThermostatAutoTwoTone;
