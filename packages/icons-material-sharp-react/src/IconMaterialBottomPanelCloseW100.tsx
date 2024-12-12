import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomPanelCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelCloseW100'

      short_name='BottomPanelClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-495 117-118H363l117 118ZM200-200h560v-120H200v120Zm0-148h560v-412H200v412Zm0 28v120-120Zm-28 148v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelCloseW100.displayName = 'OnesyIconMaterialBottomPanelCloseW100';

export default IconMaterialBottomPanelCloseW100;
