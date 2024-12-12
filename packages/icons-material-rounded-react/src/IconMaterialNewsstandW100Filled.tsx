import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewsstandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsstandW100Filled'

      short_name='Newsstand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-192q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h720q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H120Zm97.96-148q-5.96 0-9.96-4.02-4-4.03-4-9.98v-240q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v240q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm148 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-400q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v400q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm148 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-400q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v400q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm241.96-6.78q-4.92 2.78-10.55 1.21-5.64-1.56-8.37-6.43L617-562q-3-5-1.42-10.72 1.58-5.73 6.5-8.5 4.92-2.78 10.55-1.21 5.64 1.56 8.37 6.43l120 210q3 5 1.42 10.72-1.58 5.73-6.5 8.5Z"/>
    </Icon>
  );
});

IconMaterialNewsstandW100Filled.displayName = 'OnesyIconMaterialNewsstandW100Filled';

export default IconMaterialNewsstandW100Filled;
