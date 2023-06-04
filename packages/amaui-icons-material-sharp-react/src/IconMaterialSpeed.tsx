import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed'

      short_name='Speed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.45 15.5q.6.6 1.55.587.95-.012 1.4-.687L19 7l-8.4 5.6q-.675.45-.712 1.375-.038.925.562 1.525ZM5.1 20q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387Q2 15.4 2 14q0-2.075.788-3.888.787-1.812 2.15-3.175Q6.3 5.575 8.125 4.787 9.95 4 12 4q1.475 0 2.838.412Q16.2 4.825 17.4 5.65l-1.9 1.2q-.825-.425-1.712-.637Q12.9 6 12 6 8.675 6 6.338 8.337 4 10.675 4 14q0 1.05.287 2.075Q4.575 17.1 5.1 18h13.8q.575-.95.838-1.975Q20 15 20 13.9q0-.9-.212-1.75-.213-.85-.638-1.65l1.2-1.9q.75 1.175 1.188 2.5.437 1.325.462 2.75.025 1.425-.325 2.725-.35 1.3-1.025 2.475-.275.45-.75.7-.475.25-1 .25Zm7.075-8.175Z"/>
    </Icon>
  );
});

IconMaterialSpeed.displayName = 'AmauiIconMaterialSpeed';

export default IconMaterialSpeed;
