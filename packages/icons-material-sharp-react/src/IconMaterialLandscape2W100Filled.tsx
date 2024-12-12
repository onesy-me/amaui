import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandscape2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2W100Filled'

      short_name='Landscape2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m98-212 108.16-204.2q7.84-14.8 21.72-23.3Q241.75-448 259-448q18 0 33.1 9.37 15.1 9.38 21.9 26.63l19 44q9 19 33.06 17.43Q390.13-352.14 397-371l83-261q12-37 44-58.5t70.38-21.5Q632-712 664-691q32 21 44 57l155 422H98Zm148.94-353q-37.94 0-65.44-27.22Q154-619.43 154-657q0-39 27.5-65.5t65.44-26.5q37.94 0 64.5 26.5Q338-696 338-657.11 338-619 311.44-592t-64.5 27Z"/>
    </Icon>
  );
});

IconMaterialLandscape2W100Filled.displayName = 'OnesyIconMaterialLandscape2W100Filled';

export default IconMaterialLandscape2W100Filled;
