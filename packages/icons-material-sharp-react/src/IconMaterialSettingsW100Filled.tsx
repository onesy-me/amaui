import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsW100Filled'

      short_name='Settings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m416-132-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l91 68-64 112-104-45q-21 18-42 30.5T558-245l-14 113H416Zm62-260q37 0 62.5-25.5T566-480q0-37-25.5-62.5T478-568q-37 0-62.5 25.5T390-480q0 37 25.5 62.5T478-392Z"/>
    </Icon>
  );
});

IconMaterialSettingsW100Filled.displayName = 'OnesyIconMaterialSettingsW100Filled';

export default IconMaterialSettingsW100Filled;
