import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermDeviceInformationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermDeviceInformationW100Filled'

      short_name='PermDeviceInformation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.8q-.15 0-.25-.1t-.1-.25V11.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.15q0 .15-.1.25t-.25.1Zm0-6.6q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 18.65h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialPermDeviceInformationW100Filled.displayName = 'AmauiIconMaterialPermDeviceInformationW100Filled';

export default IconMaterialPermDeviceInformationW100Filled;
