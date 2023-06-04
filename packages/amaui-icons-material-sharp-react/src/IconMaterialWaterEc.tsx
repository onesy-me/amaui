import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterEc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterEc'

      short_name='WaterEc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 18h1l4-6h-3V8h-1l-4 6h3Zm1 4q-3.425 0-5.712-2.35Q4 17.3 4 13.8q0-2.5 1.988-5.437Q7.975 5.425 12 2q4.025 3.425 6.013 6.363Q20 11.3 20 13.8q0 3.5-2.288 5.85Q15.425 22 12 22Zm0-2q2.6 0 4.3-1.762Q18 16.475 18 13.8q0-1.825-1.512-4.125Q14.975 7.375 12 4.65 9.025 7.375 7.513 9.675 6 11.975 6 13.8q0 2.675 1.7 4.438Q9.4 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialWaterEc.displayName = 'AmauiIconMaterialWaterEc';

export default IconMaterialWaterEc;
