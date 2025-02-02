import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIceSkatingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingW100Filled'

      short_name='IceSkating'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-106q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h146v-132h-60q-24.75 0-42.37-17.63Q146-301.25 146-326v-428q0-24.75 17.63-42.38Q181.25-814 206-814h164q24.75 0 42.38 17.62Q430-778.75 430-754v40h-90q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2h93v52h-93q-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8 0 5.6 4.2 9.8 4.2 4.2 9.8 4.2h102.62q12.38 23 32.88 39t46.5 24l105 29q44 11 70.5 46.77Q724-431.45 724-386v60q0 24.75-17.62 42.37Q688.75-266 664-266h-50v132h106q55 0 97-33t49-87q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98-7 65-57.5 106.5T720-106H120Zm174-28h292v-132H294v132Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingW100Filled.displayName = 'OnesyIconMaterialIceSkatingW100Filled';

export default IconMaterialIceSkatingW100Filled;
