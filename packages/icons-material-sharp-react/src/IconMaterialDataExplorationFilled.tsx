import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataExplorationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExplorationFilled'

      short_name='DataExploration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780-140q17 0 28.5-11.5T820-180q0-17-11.5-28.5T780-220q-17 0-28.5 11.5T740-180q0 17 11.5 28.5T780-140ZM480-80q-103 0-191.5-49T149-256l176-176 131 112 184-183v63h80v-200H520v80h63L452-429 320-540 109-329q-14-33-21.5-74.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v400H480Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationFilled.displayName = 'OnesyIconMaterialDataExplorationFilled';

export default IconMaterialDataExplorationFilled;
