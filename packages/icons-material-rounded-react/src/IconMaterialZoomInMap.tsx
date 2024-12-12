import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomInMap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInMap'

      short_name='ZoomInMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-224-96 96q-11 11-28 11t-28-11q-11-11-11-28t11-28l96-96h-64q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h160q17 0 28.5 11.5T360-320v160q0 17-11.5 28.5T320-120q-17 0-28.5-11.5T280-160v-64Zm400 0v64q0 17-11.5 28.5T640-120q-17 0-28.5-11.5T600-160v-160q0-17 11.5-28.5T640-360h160q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280h-64l96 96q11 11 11 28t-11 28q-11 11-28 11t-28-11l-96-96ZM224-680l-96-96q-11-11-11-28t11-28q11-11 28-11t28 11l96 96v-64q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v160q0 17-11.5 28.5T320-600H160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h64Zm512 0h64q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H640q-17 0-28.5-11.5T600-640v-160q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v64l96-96q11-11 28-11t28 11q11 11 11 28t-11 28l-96 96Z"/>
    </Icon>
  );
});

IconMaterialZoomInMap.displayName = 'OnesyIconMaterialZoomInMap';

export default IconMaterialZoomInMap;
