import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPedalBike = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBike'

      short_name='PedalBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-2.125 0-3.562-1.438Q0 17.125 0 15t1.463-3.562Q2.925 10 5 10q1.925 0 3.238 1.15Q9.55 12.3 9.9 14h.65l-1.8-5H7V7h5v2h-1.1l.35 1h4.8L14.6 6H12V4h4.025L18.2 9.95h.8q2.075 0 3.538 1.462Q24 12.875 24 14.95q0 2.1-1.45 3.575T19 20q-1.8 0-3.162-1.125Q14.475 17.75 14.1 16H9.9q-.35 1.725-1.7 2.863Q6.85 20 5 20Zm0-2q1.025 0 1.763-.562Q7.5 16.875 7.8 16H5v-2h2.8q-.3-.9-1.037-1.45Q6.025 12 5 12q-1.275 0-2.138.863Q2 13.725 2 15q0 1.25.862 2.125Q3.725 18 5 18Zm7.7-4h1.4q.125-.575.338-1.075.212-.5.562-.925h-3.05Zm6.3 4q1.275 0 2.138-.875Q22 16.25 22 15q0-1.275-.862-2.137Q20.275 12 19 12h-.1l1 2.65-1.9.7-.95-2.65q-.5.425-.775 1T16 15q0 1.25.863 2.125Q17.725 18 19 18Z"/>
    </Icon>
  );
});

IconMaterialPedalBike.displayName = 'AmauiIconMaterialPedalBike';

export default IconMaterialPedalBike;
