import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityMidW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityMidW100Filled'

      short_name='HumidityMid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-152q-111.39 0-189.69-76.71Q212-305.41 212-415.47 212-468 233.5-516t56.5-86l148-145q8.96-8.13 19.78-12.57Q468.61-764 479.8-764q11.2 0 22.16 4.43Q512.93-755.13 522-747l148 145q35 38 56.5 86.04Q748-467.92 748-415.28 748-305 669.69-228.5 591.39-152 480-152ZM240-415h480q0-47-18-89.86-18-42.87-52-75.14L502-726q-9-9-22-9t-22 9L310-580q-34 32.27-52 75.14Q240-462 240-415Z"/>
    </Icon>
  );
});

IconMaterialHumidityMidW100Filled.displayName = 'OnesyIconMaterialHumidityMidW100Filled';

export default IconMaterialHumidityMidW100Filled;
