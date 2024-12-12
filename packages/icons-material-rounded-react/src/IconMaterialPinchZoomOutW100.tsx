import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchZoomOutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomOutW100'

      short_name='PinchZoomOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-508h106q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H102q-12.75 0-21.37-8.63Q72-497.25 72-510v-124q0-6.07 3.95-10.03 3.96-3.97 10-3.97Q92-648 96-644.03q4 3.96 4 10.03v106l124-124q4.36-4 10.18-4 5.82 0 9.82 4t4 9.82q0 5.82-4 10.18L120-508Zm332-332L328-716q-4.36 4-10.18 4-5.82 0-9.82-4t-4-9.82q0-5.82 4-10.18l124-124H326q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h124q12.75 0 21.38 8.62Q480-870.75 480-858v124q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-106Zm101 736q-19 0-35.5-7T487-132L307-311q-7-6-6.43-14.94.57-8.93 7.43-15.06 7-6 15.5-7.5t17.5.5l125 30v-334q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v333q0 15-12 24t-26 5l-122-33 173 172q9 9 21.07 14 12.06 5 24.93 5h141q45 0 75.5-30.5T800-238v-160q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v160q0 56-39 95t-94.8 39H553Zm94-141Zm-55.96-287q5.96 0 9.96 4.03 4 4.02 4 9.97v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03Zm112 40q5.96 0 9.96 4.02 4 4.03 4 9.98v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomOutW100.displayName = 'OnesyIconMaterialPinchZoomOutW100';

export default IconMaterialPinchZoomOutW100;
