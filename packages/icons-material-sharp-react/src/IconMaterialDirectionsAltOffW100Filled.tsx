import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsAltOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOffW100Filled'

      short_name='DirectionsAltOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 639-281 480-122 122-480l159-159L90-830l20-20L872-88l-20 20ZM522-398l-62 62 20 20 62-62-20-20Zm193 41L613-459l20-20-164-164-20 20-92-92 123-123 358 358-123 123ZM316-494v28h138l-28-28H316Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOffW100Filled.displayName = 'OnesyIconMaterialDirectionsAltOffW100Filled';

export default IconMaterialDirectionsAltOffW100Filled;
