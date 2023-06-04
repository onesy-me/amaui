import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCalling1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCalling1Filled'

      short_name='WifiCalling1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 10.975q-.425 0-.713-.287-.287-.288-.287-.713t.287-.713q.288-.287.713-.287t.712.287q.288.288.288.713t-.288.713q-.287.287-.712.287ZM14 8.525l-1.05-1.05q.725-.725 1.638-1.113.912-.387 1.912-.387 1 0 1.913.387.912.388 1.637 1.113L19 8.525q-.5-.5-1.137-.775-.638-.275-1.363-.275t-1.363.275q-.637.275-1.137.775Zm-2.1-2.15-1.05-1.05q1.125-1.125 2.588-1.738 1.462-.612 3.062-.612 1.6 0 3.062.612 1.463.613 2.588 1.738l-1.05 1.05q-.925-.925-2.112-1.413-1.188-.487-2.488-.487t-2.475.5q-1.175.5-2.125 1.4ZM19.95 21q-3.225 0-6.287-1.425-3.063-1.425-5.425-3.8-2.363-2.375-3.8-5.438Q3 7.275 3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025-2.85 2.875q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.9-2.9 5 1v5.85q-.25.025-.525.038Q20.2 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialWifiCalling1Filled.displayName = 'AmauiIconMaterialWifiCalling1Filled';

export default IconMaterialWifiCalling1Filled;
