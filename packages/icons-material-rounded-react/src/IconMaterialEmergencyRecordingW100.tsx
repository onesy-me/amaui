import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyRecordingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecordingW100'

      short_name='EmergencyRecording'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-456v136q0 6 4 10t10 4q6 0 10-4t4-10v-136l125 72q5 3 10.5 1.5t8.5-6.5q3-5 1.5-10.5T578-408l-125-72 125-72q5-3 6.5-8.5T583-571q-3-5-8.5-6.5T564-576l-125 72v-136q0-6-4-10t-10-4q-6 0-10 4t-4 10v136l-124-72q-5-3-10.5-1.5T268-571q-3 5-1.5 10.5t6.5 8.5l124 72-124 72q-5 3-6.5 8.5T268-389q3 5 8.5 6.5T287-384l124-72ZM217-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T803-574v188q0 10-9.5 13.5T777-376l-84-84v188q0 26-17 43t-43 17H217Zm0-28h416q14 0 23-9t9-23v-416q0-14-9-23t-23-9H217q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRecordingW100.displayName = 'OnesyIconMaterialEmergencyRecordingW100';

export default IconMaterialEmergencyRecordingW100;
