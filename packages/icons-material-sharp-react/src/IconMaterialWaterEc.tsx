import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterEc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterEc'

      short_name='WaterEc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240h40l160-240H520v-160h-40L320-400h120v160Zm40 160q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialWaterEc.displayName = 'OnesyIconMaterialWaterEc';

export default IconMaterialWaterEc;
