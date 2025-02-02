import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFileW100Filled'

      short_name='VideoFile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550q0 13 8.5 21.5T602-652h118L572-800v118ZM366-260h160q8 0 14-6t6-14v-64l50 26q8 4 15-.5t7-12.5v-58q0-8-7-12.5t-15-.5l-50 26v-64q0-8-6-14t-14-6H366q-8 0-14 6t-6 14v160q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialVideoFileW100Filled.displayName = 'OnesyIconMaterialVideoFileW100Filled';

export default IconMaterialVideoFileW100Filled;
