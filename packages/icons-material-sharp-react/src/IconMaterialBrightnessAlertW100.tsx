import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAlertW100'

      short_name='BrightnessAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-308q8.5 0 14.25-5.75T500-328q0-8.5-5.75-14.25T480-348q-8.5 0-14.25 5.75T460-328q0 8.5 5.75 14.25T480-308Zm-14-124h28v-240h-28v240Zm14 332L367.77-212H212v-155.77L100-480l112-112.22V-748h155.77L480-860l112.22 112H748v155.78L860-480 748-367.77V-212H592.22L480-100Zm0-40 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAlertW100.displayName = 'OnesyIconMaterialBrightnessAlertW100';

export default IconMaterialBrightnessAlertW100;
