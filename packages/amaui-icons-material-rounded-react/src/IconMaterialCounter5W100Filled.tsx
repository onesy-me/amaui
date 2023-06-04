import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter5W100Filled'

      short_name='Counter5'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM400 750h114q26 0 43-17t17-43v-68q0-26-17-43t-43-17H414V430h146q5.95 0 9.975-4.035 4.025-4.035 4.025-10T569.975 406q-4.025-4-9.975-4H416q-12.75 0-21.375 8.5T386 432.495v127.01q0 13.495 8.625 21.995Q403.25 590 416 590h98q14 0 23 9t9 23v68q0 14-9 23t-23 9H400q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Z"/>
    </Icon>
  );
});

IconMaterialCounter5W100Filled.displayName = 'AmauiIconMaterialCounter5W100Filled';

export default IconMaterialCounter5W100Filled;
