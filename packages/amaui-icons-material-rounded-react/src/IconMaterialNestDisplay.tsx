import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestDisplay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplay'

      short_name='NestDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-2.5 0-4.25-.337Q6 18.325 6 17.85V17H4.175Q3.3 17 2.7 16.35q-.6-.65-.525-1.525l.675-8q.05-.775.625-1.3T4.85 5h14.3q.8 0 1.375.525t.625 1.3l.675 8q.075.875-.525 1.525-.6.65-1.475.65H18v.85q0 .475-1.75.813Q14.5 19 12 19Zm-7.825-4h15.65l-.675-8H4.85l-.675 8Z"/>
    </Icon>
  );
});

IconMaterialNestDisplay.displayName = 'AmauiIconMaterialNestDisplay';

export default IconMaterialNestDisplay;
