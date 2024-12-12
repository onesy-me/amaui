import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataBadgeW100Filled'

      short_name='GMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm174-134h148q25 0 42.5-17.5T614-366v-98q0-13-8.5-21.5T584-494h-44q-6 0-10 4t-4 10q0 6 4 10t10 4h46v100q0 14-9 23t-23 9H406q-14 0-23-9t-9-23v-228q0-14 9-23t23-9h208q-8-14-22-21t-30-7H406q-25 0-42.5 17.5T346-594v228q0 25 17.5 42.5T406-306Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterialGMobiledataBadgeW100Filled';

export default IconMaterialGMobiledataBadgeW100Filled;
