import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdminMedsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminMedsW100Filled'

      short_name='AdminMeds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M347-347q21 21 50 21t50-21l73-73-100-100-73 73q-20 20-20 50t20 50Zm265.86-265.86Q592-633 563-633.5T513-613l-73 73 100 100 73-73q21-21.41 20.5-50.21-.5-28.79-20.64-49.65ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h194q-11-29 6-54.5t48.5-25.5q31.5 0 48.5 25.5t5 54.5h194q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm248-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Z"/>
    </Icon>
  );
});

IconMaterialAdminMedsW100Filled.displayName = 'OnesyIconMaterialAdminMedsW100Filled';

export default IconMaterialAdminMedsW100Filled;
