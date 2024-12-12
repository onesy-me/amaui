import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHistoryW100Filled'

      short_name='FamilyHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.99-121q-49.99 0-84.49-34.51Q361-190.02 361-240q0-46 30-79.5t75-38.5v-108H252v-139h-95v-218h218v218h-95v111h400v-112q-45-5-75-38.5T575-724q0-49.98 34.51-84.49Q644.03-843 694.01-843q49.99 0 84.49 34.51Q813-773.98 813-724q0 46-30 79.5T708-606v140H494v108q45 5 75 38.5t30 79.5q0 49.98-34.51 84.49Q529.97-121 479.99-121Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistoryW100Filled.displayName = 'OnesyIconMaterialFamilyHistoryW100Filled';

export default IconMaterialFamilyHistoryW100Filled;
