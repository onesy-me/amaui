import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFertileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FertileW100Filled'

      short_name='Fertile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.4-63.56-27.41-110.57-74.39-47.02-46.98-74.44-110.49Q132-407.79 132-480v-276l202 152q35-54 72-103.5t74-93.5q33 39 70 88.5T625-604l203-152v276q0 72.21-27.39 135.72-27.39 63.51-74.35 110.49-46.96 46.98-110.43 74.39Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialFertileW100Filled.displayName = 'OnesyIconMaterialFertileW100Filled';

export default IconMaterialFertileW100Filled;
