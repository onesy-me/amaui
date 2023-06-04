import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter4W100Filled'

      short_name='Counter4'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM546 750h28V402h-28v160H414V402h-28v188h160v160Z"/>
    </Icon>
  );
});

IconMaterialCounter4W100Filled.displayName = 'AmauiIconMaterialCounter4W100Filled';

export default IconMaterialCounter4W100Filled;
