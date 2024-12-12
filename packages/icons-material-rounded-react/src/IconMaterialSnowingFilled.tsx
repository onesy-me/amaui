import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowingFilled'

      short_name='Snowing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-350q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T290-400q0 20-14.5 35T240-350Zm0-320q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T290-720q0 20-14.5 35T240-670Zm120 480q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T410-240q0 20-14.5 35T360-190Zm0-320q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T410-560q0 20-14.5 35T360-510Zm120 160q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T530-400q0 20-14.5 35T480-350Zm0-320q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T530-720q0 20-14.5 35T480-670Zm120 480q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T650-240q0 20-14.5 35T600-190Zm0-320q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T650-560q0 20-14.5 35T600-510Zm120 160q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T770-400q0 20-14.5 35T720-350Zm0-320q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T770-720q0 20-14.5 35T720-670Z"/>
    </Icon>
  );
});

IconMaterialSnowingFilled.displayName = 'OnesyIconMaterialSnowingFilled';

export default IconMaterialSnowingFilled;
