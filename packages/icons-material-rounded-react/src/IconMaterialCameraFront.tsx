import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraFront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFront'

      short_name='CameraFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-160H240q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h142l-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l84 84q12 12 12 28t-12 28l-84 84q-11 11-28 11t-28-11q-11-11-11-28t11-28l16-16ZM200-800q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v480q0 17-11.5 28.5T720-280q-17 0-28.5-11.5T680-320v-22q-40-29-90.5-43.5T480-400q-59 0-109.5 14.5T280-342v22q0 17-11.5 28.5T240-280q-17 0-28.5-11.5T200-320v-480Zm80 366q48-23 98.5-34.5T480-480q51 0 101.5 11.5T680-434v-366H280v366Zm320 274q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h120q17 0 28.5 11.5T760-200q0 17-11.5 28.5T720-160H600ZM480-400Zm0-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0-40Z"/>
    </Icon>
  );
});

IconMaterialCameraFront.displayName = 'OnesyIconMaterialCameraFront';

export default IconMaterialCameraFront;
