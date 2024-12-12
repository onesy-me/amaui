import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeAndGarden = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGarden'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-375l-72 55-47-63 439-337 440 336-48 64-392-300-240 184v356h160v80H160Zm540 95q-42 29-92.5 24.5T521-81q-36-36-40.5-86.5T505-260q-29-42-24.5-92.5T521-439q36-36 86.5-40.5T700-455q42-29 92.5-24.5T879-439q36 36 40.5 86.5T895-260q29 42 24.5 92.5T879-81q-36 36-86.5 40.5T700-65Zm0-98 46 32q18 13 39 11t37-18q16-16 18-37t-11-39l-32-46 32-46q13-18 11-39t-18-37q-16-16-37-18t-39 11l-46 32-46-32q-18-13-39-11t-37 18q-16 16-18 37t11 39l32 46-32 46q-13 18-11 39t18 37q16 16 37 18t39-11l46-32Zm0-47q21 0 35.5-14.5T750-260q0-21-14.5-35.5T700-310q-21 0-35.5 14.5T650-260q0 21 14.5 35.5T700-210ZM480-470Zm220 210Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGarden.displayName = 'OnesyIconMaterialHomeAndGarden';

export default IconMaterialHomeAndGarden;
