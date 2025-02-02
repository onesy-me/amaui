import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRightPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpenW100Filled'

      short_name='RightPanelOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M465-399v-161.88q0-10.12-9.5-14.12t-16.75 3.25L367.7-500.7Q359-492 359-480t9 21l70.78 70.78q7.22 7.22 16.72 3.47Q465-388.5 465-399ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-496q0-24.75 17.63-42.38Q207.25-788 232-788h496q24.75 0 42.38 17.62Q788-752.75 788-728v496q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm380-28v-560H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h380Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpenW100Filled.displayName = 'OnesyIconMaterialRightPanelOpenW100Filled';

export default IconMaterialRightPanelOpenW100Filled;
