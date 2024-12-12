import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLock'

      short_name='WifiLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40ZM480-800q113 0 218.5 35.5T892-660q14 11 21.5 26.5T922-601q1 17-5.5 33.5T896-537l-45 46q-12 11-28.5 11.5T794-491q-12-12-12-28.5t12-28.5l50-50q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 11-11q12-12 28.5-12t28.5 12q12 12 12 28.5T548-188l-11 11q-12 12-27 18t-30 6q-15 0-30-6t-27-18L63-537q-13-13-19.5-29.5T38-600q1-17 8-32.5T67-660q88-69 194-104.5T480-800Zm0 323Z"/>
    </Icon>
  );
});

IconMaterialWifiLock.displayName = 'OnesyIconMaterialWifiLock';

export default IconMaterialWifiLock;
