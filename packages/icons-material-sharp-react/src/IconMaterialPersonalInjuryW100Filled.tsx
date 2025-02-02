import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonalInjuryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalInjuryW100Filled'

      short_name='PersonalInjury'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-578q-44.55 0-76.27-31.72Q372-641.45 372-686t31.73-76.28Q435.45-794 480-794t76.28 31.72Q588-730.55 588-686t-31.72 76.28Q524.55-578 480-578Zm-64 364q-19 0-32.5-13.5T370-260q0-19 13.5-32.5t32.63-13.5H528l-46 92h-66Zm-204 28v-183.92Q212-393 226-412t36-30q51.09-25.16 106.02-38.58Q422.95-494 480-494q34 0 67.5 5t65.5 15l-71 140H416q-30.95 0-52.47 21.54Q342-290.92 342-259.96t21.53 52.46Q385.05-186 416-186H212Zm429 0v-279q15 5 29 10.5t28 12.5q22 11 36 30.1 14 19.11 14 41.9v124q0 24.75-17.62 42.37Q712.75-186 688-186h-47Z"/>
    </Icon>
  );
});

IconMaterialPersonalInjuryW100Filled.displayName = 'OnesyIconMaterialPersonalInjuryW100Filled';

export default IconMaterialPersonalInjuryW100Filled;
