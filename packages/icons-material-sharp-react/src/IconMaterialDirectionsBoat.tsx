import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsBoat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBoat'

      short_name='DirectionsBoat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-418ZM158-200 71-505l89-31v-264h200v-120h240v120h200v264l89 31-87 305q-50 0-91-23.5T640-280q-30 33-71 56.5T480-200q-48 0-89-23.5T320-280q-30 33-71 56.5T158-200ZM80-40v-80h80q42 0 83-13t77-39q36 26 77 38t83 12q42 0 83-12t77-38q36 26 77 39t83 13h80v80h-80q-42 0-82-10t-78-30q-38 20-78.5 30T480-40q-41 0-81.5-10T320-80q-38 20-78 30t-82 10H80Zm160-522 240-78 240 78v-158H240v158Zm240 282q47 0 79.5-33t80.5-89q48 54 65 74t41 34l44-160-310-102-312 102 46 158q24-14 41-32t65-74q50 57 81.5 89.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBoat.displayName = 'OnesyIconMaterialDirectionsBoat';

export default IconMaterialDirectionsBoat;
