import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraswitch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cameraswitch'

      short_name='Cameraswitch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280v-400h120l40-40h160l40 40h120v400H240Zm80-80h320v-240H320v240Zm160-40q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM342-940q34-11 68.5-15.5T480-960q94 0 177.5 33.5t148 93Q870-774 911-693.5T960-520h-80q-7-72-38-134.5t-79.5-110Q714-812 651-842t-135-36l62 62-56 56-180-180ZM618-20Q584-9 549.5-4.5T480 0q-94 0-177.5-33.5t-148-93Q90-186 49-266.5T0-440h80q8 72 38.5 134.5t79 110Q246-148 309-118t135 36l-62-62 56-56L618-20ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialCameraswitch.displayName = 'OnesyIconMaterialCameraswitch';

export default IconMaterialCameraswitch;
