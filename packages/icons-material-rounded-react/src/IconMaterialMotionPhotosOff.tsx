import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionPhotosOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosOff'

      short_name='MotionPhotosOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m763-84-63-62q-49 32-104.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-63-63q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm-283-76q43 0 83.5-11t78.5-33L204-642q-22 38-33 78.5T160-480q0 133 93.5 226.5T480-160Zm0-640q-33 0-64.5 6.5T354-774q-16 7-32 2t-24-19q-8-14-3.5-30t19.5-23q39-18 80.5-27t85.5-9q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 44-9 85.5T844-314q-7 15-23 19.5t-30-3.5q-14-8-19-24t2-32q13-30 19.5-61.5T800-480q0-133-93.5-226.5T480-800Zm57 263ZM423-423Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosOff.displayName = 'OnesyIconMaterialMotionPhotosOff';

export default IconMaterialMotionPhotosOff;
