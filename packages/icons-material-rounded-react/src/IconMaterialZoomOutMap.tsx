import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialZoomOutMap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutMap'

      short_name='ZoomOutMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M256-200h64q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H160q-17 0-28.5-11.5T120-160v-160q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320v64l96-96q11-11 28-11t28 11q11 11 11 28t-11 28l-96 96Zm448 0-96-96q-11-11-11-28t11-28q11-11 28-11t28 11l96 96v-64q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320v160q0 17-11.5 28.5T800-120H640q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h64ZM200-704v64q0 17-11.5 28.5T160-600q-17 0-28.5-11.5T120-640v-160q0-17 11.5-28.5T160-840h160q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760h-64l96 96q11 11 11 28t-11 28q-11 11-28 11t-28-11l-96-96Zm560 0-96 96q-11 11-28 11t-28-11q-11-11-11-28t11-28l96-96h-64q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h160q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600q-17 0-28.5-11.5T760-640v-64Z"/>
    </Icon>
  );
});

IconMaterialZoomOutMap.displayName = 'OnesyIconMaterialZoomOutMap';

export default IconMaterialZoomOutMap;
