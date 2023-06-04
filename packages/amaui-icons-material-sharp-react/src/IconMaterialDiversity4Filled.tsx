import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiversity4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diversity4Filled'

      short_name='Diversity4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.4 22 2.175-2q2.675-2.5 3.55-3.812.875-1.313.875-2.813 0-.65-.175-1.225-.175-.575-.525-1.15H22v11ZM2 22V11h3.675q-.325.525-.5 1.137Q5 12.75 5 13.375q0 1.5.838 2.813Q6.675 17.5 9.4 20l2.2 2Zm17-12q-1.275 0-2.137-.863Q16 8.275 16 7q0-1.25.863-2.125Q17.725 4 19 4q1.25 0 2.125.875T22 7q0 1.275-.875 2.137Q20.25 10 19 10Zm-7-1q-1.475 0-2.488-1.013Q8.5 6.975 8.5 5.5q0-1.45 1.012-2.475Q10.525 2 12 2q1.45 0 2.475 1.025Q15.5 4.05 15.5 5.5q0 1.475-1.025 2.487Q13.45 9 12 9Zm-5 4.375q0 1.025 1 2.3t3.975 3.975q2.95-2.65 3.988-3.938Q17 14.425 17 13.375q0-1-.675-1.687Q15.65 11 14.7 11q-.575 0-1.075.275t-.875.675l-.775.8-.75-.775q-.35-.375-.8-.675-.45-.3-1.125-.3-1.025 0-1.662.688Q7 12.375 7 13.375ZM5 10q-1.275 0-2.138-.863Q2 8.275 2 7q0-1.25.862-2.125Q3.725 4 5 4q1.25 0 2.125.875T8 7q0 1.275-.875 2.137Q6.25 10 5 10Z"/>
    </Icon>
  );
});

IconMaterialDiversity4Filled.displayName = 'AmauiIconMaterialDiversity4Filled';

export default IconMaterialDiversity4Filled;
