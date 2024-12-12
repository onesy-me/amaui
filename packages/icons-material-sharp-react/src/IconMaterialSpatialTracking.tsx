import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialTracking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialTracking'

      short_name='SpatialTracking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H160Zm80-80h480v-32q0-11-5.5-20T700-266q-36-18-92.5-36T480-320q-71 0-127.5 18T260-266q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM39-760v-80q17 0 31-6.5T95-864q11-11 17-25t6-31h81q0 33-12.5 62T152-807q-22 22-51 34.5T39-760Zm0 161v-80q51 0 94.5-19t75.5-52q32-33 51-76.5t19-93.5h81q0 66-25 124.5T266-693q-44 44-102 69T39-599Zm881 0q-66 0-124.5-25T693-693q-44-44-69-102.5T599-920h80q0 50 19 93.5t52 76.5q33 33 76.5 52t93.5 19v80Zm0-161q-33 0-62-12.5T807-807q-22-22-34.5-51T760-920h80q0 17 6.5 31t17.5 25q11 11 25 17.5t31 6.5v80ZM480-600Zm0 400Z"/>
    </Icon>
  );
});

IconMaterialSpatialTracking.displayName = 'OnesyIconMaterialSpatialTracking';

export default IconMaterialSpatialTracking;
