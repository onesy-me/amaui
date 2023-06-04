import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraVideoFilled'

      short_name='CameraVideo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576q-33 0-56.5-23.5T400 496q0-33 23.5-56.5T480 416q33 0 56.5 23.5T560 496q0 33-23.5 56.5T480 576ZM260 456q17 0 28.5-11.5T300 416q0-17-11.5-28.5T260 376q-17 0-28.5 11.5T220 416q0 17 11.5 28.5T260 456ZM160 936v-80h129l21-84q-99-17-164.5-94.5T80 496q0-117 81.5-198.5T360 216h240q117 0 198.5 81.5T880 496q0 104-65.5 181.5T650 772l21 84h129v80H160Zm320-280q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
    </Icon>
  );
});

IconMaterialCameraVideoFilled.displayName = 'AmauiIconMaterialCameraVideoFilled';

export default IconMaterialCameraVideoFilled;
