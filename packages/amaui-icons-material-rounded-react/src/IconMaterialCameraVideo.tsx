import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraVideo'

      short_name='CameraVideo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M371 856h218l-20-80H391l-20 80Zm-11-160h240q83 0 141.5-58.5T800 496q0-83-58.5-141.5T600 296H360q-83 0-141.5 58.5T160 496q0 83 58.5 141.5T360 696Zm120-120q-33 0-56.5-23.5T400 496q0-33 23.5-56.5T480 416q33 0 56.5 23.5T560 496q0 33-23.5 56.5T480 576ZM260 456q17 0 28.5-11.5T300 416q0-17-11.5-28.5T260 376q-17 0-28.5 11.5T220 416q0 17 11.5 28.5T260 456Zm-60 480q-17 0-28.5-11.5T160 896q0-17 11.5-28.5T200 856h89l21-84q-99-17-164.5-94.5T80 496q0-117 81.5-198.5T360 216h240q117 0 198.5 81.5T880 496q0 104-65.5 181.5T650 772l21 84h89q17 0 28.5 11.5T800 896q0 17-11.5 28.5T760 936H200Zm280-280q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160ZM371 856h218-218Z"/>
    </Icon>
  );
});

IconMaterialCameraVideo.displayName = 'AmauiIconMaterialCameraVideo';

export default IconMaterialCameraVideo;
