import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCompassCalibration = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibration'

      short_name='CompassCalibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-141.5-58.5T280-280q0-83 58.5-141.5T480-480q83 0 141.5 58.5T680-280q0 83-58.5 141.5T480-80Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM280-474 80-674q80-80 183.5-123T480-840q113 0 216.5 43T880-674L680-474q-41-41-92-63.5T480-560q-57 0-108 22.5T280-474Zm6-106q42-30 91.5-45T480-640q53 0 101.5 14.5T674-582l88-88q-62-44-133.5-67T480-760q-77 0-148.5 23T198-670l88 90Zm194-60Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibration.displayName = 'OnesyIconMaterialCompassCalibration';

export default IconMaterialCompassCalibration;
