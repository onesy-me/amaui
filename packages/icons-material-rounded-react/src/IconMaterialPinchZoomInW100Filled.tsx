import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinchZoomInW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchZoomInW100Filled'

      short_name='PinchZoomIn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-600 88-476q-4.09 4.44-9.55 4.72Q73-471 68-476q-5-5-5-10t5-10l124-124H86q-6.07 0-10.03-3.95-3.97-3.96-3.97-10Q72-640 75.97-644q3.96-4 10.03-4h124q12.75 0 21.38 8.62Q240-630.75 240-618v124q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-106Zm148-148h106q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4H342q-12.75 0-21.37-8.63Q312-737.25 312-750v-124q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v106l124-124q4-4 9.5-4.5T484-892q5 5 5 10t-5 10L360-748Zm193 644q-19 0-35.5-7T487-132L307-311q-6-6-6-15t7-15q7-6 15.5-7.5t17.5.5l125 30v-334q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v294h83v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160h84v-120q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v120h83v-40q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v160q0 56-39 95t-94.8 39H553Z"/>
    </Icon>
  );
});

IconMaterialPinchZoomInW100Filled.displayName = 'OnesyIconMaterialPinchZoomInW100Filled';

export default IconMaterialPinchZoomInW100Filled;
