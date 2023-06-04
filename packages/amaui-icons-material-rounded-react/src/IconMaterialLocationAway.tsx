import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationAway = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAway'

      short_name='LocationAway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V9l8-6 5.4 4.05q-.6.075-1.162.288-.563.212-1.063.562L10 5.5 4 10v9h4v2Zm8 0v-1.9q0-.525.262-.988.263-.462.713-.737 1.15-.675 2.412-1.025Q14.65 16 16 16t2.613.35q1.262.35 2.412 1.025.45.275.713.737.262.463.262.988V21Zm2.15-2h7.7q-.875-.5-1.85-.75-.975-.25-2-.25t-2 .25q-.975.25-1.85.75ZM16 15q-1.25 0-2.125-.875T13 12q0-1.25.875-2.125T16 9q1.25 0 2.125.875T19 12q0 1.25-.875 2.125T16 15Zm0-2q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11t-.712.287Q15 11.575 15 12t.288.712Q15.575 13 16 13Z"/>
    </Icon>
  );
});

IconMaterialLocationAway.displayName = 'AmauiIconMaterialLocationAway';

export default IconMaterialLocationAway;
