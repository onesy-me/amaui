import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSingleBedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedSharpW100Filled'
      short_name='SingleBed'

      {...props}
    >
      <path d="M6.7 17.7H6.3L6 15.7H5.3V11.3H7.3V7.6H16.7V11.3H18.7V15.7H18L17.7 17.7H17.3L17 15.7H7ZM12.35 11.3H16V8.3H12.35ZM8 11.3H11.65V8.3H8Z"/>
    </Icon>
  );
});

IconMaterialSingleBedSharpW100Filled.displayName = 'AmauiIconMaterialSingleBedSharpW100Filled';

export default IconMaterialSingleBedSharpW100Filled;
