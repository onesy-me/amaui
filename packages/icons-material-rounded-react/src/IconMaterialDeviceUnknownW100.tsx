import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceUnknownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknownW100'

      short_name='DeviceUnknown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-303q-9 0-15.5-6.5T458-325q0-9 6.5-15.5T480-347q9 0 15.5 6.5T502-325q0 9-6.5 15.5T480-303Zm-84-284q-5-3-5-8t3-10q14-23 37-35.5t49-12.5q42 0 70 24t28 65q0 21-10.5 39.5T542-491q-15 15-28.5 31.5T496-422q-1 6-5.5 9.5T480-409q-5 0-9-3.5t-4-8.5q0-23 14-42t31-36q14-14 26-29.5t12-35.5q0-26-21-43.5T480-625q-19 0-35.5 8.5T418-592q-4 5-10.5 7t-11.5-2ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-28h400v-532H280v532Zm0-560h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownW100.displayName = 'OnesyIconMaterialDeviceUnknownW100';

export default IconMaterialDeviceUnknownW100;
