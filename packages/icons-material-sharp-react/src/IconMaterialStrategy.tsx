import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrategy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Strategy'

      short_name='Strategy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-520 80-600v-160l140-80 140 80v160l-140 80Zm0-92 60-34v-68l-60-34-60 34v68l60 34Zm440 123v-93l140 82v280L560-80 320-220v-280l140-82v93l-60 35v188l160 93 160-93v-188l-60-35Zm-140 89v-480h360l-80 120 80 120H600v240h-80Zm40 69ZM220-680Z"/>
    </Icon>
  );
});

IconMaterialStrategy.displayName = 'OnesyIconMaterialStrategy';

export default IconMaterialStrategy;
