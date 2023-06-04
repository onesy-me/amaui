import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyRecordingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecordingW100Filled'

      short_name='EmergencyRecording'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.275 16.35h.7V12.6l3.425 1.975.325-.6-3.4-1.975 3.4-1.975-.325-.6-3.425 1.975V7.65h-.7v3.75l-3.4-1.975-.35.6L9.925 12l-3.4 1.975.35.6 3.4-1.975Zm-6.35 2.35V5.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRecordingW100Filled.displayName = 'AmauiIconMaterialEmergencyRecordingW100Filled';

export default IconMaterialEmergencyRecordingW100Filled;
