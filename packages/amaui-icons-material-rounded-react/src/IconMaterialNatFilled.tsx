import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatFilled'

      short_name='Nat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15q-1.25 0-2.125-.875T1 12q0-1.25.875-2.125T4 9q.975 0 1.738.562Q6.5 10.125 6.8 11H11v2H6.8q-.3.875-1.062 1.438Q4.975 15 4 15Zm0-2q.425 0 .713-.288Q5 12.425 5 12t-.287-.713Q4.425 11 4 11t-.712.287Q3 11.575 3 12t.288.712Q3.575 13 4 13Zm2 8.95q-.4.05-.7-.238Q5 21.425 5 21q0-.4.287-.7.288-.3.713-.35 2.975-.375 4.988-2.625Q13 15.075 13 12t-2.012-5.325Q8.975 4.425 6 4.05q-.425-.05-.713-.338Q5 3.425 5 3t.3-.713Q5.6 2 6 2.05q3.575.35 6.088 2.862Q14.6 7.425 14.95 11h4.2l-.875-.9Q18 9.8 18 9.4q0-.4.3-.7.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.7.275-.425 0-.7-.275-.3-.3-.3-.7 0-.4.275-.7l.875-.9h-4.2q-.35 3.575-2.862 6.087Q9.575 21.6 6 21.95Z"/>
    </Icon>
  );
});

IconMaterialNatFilled.displayName = 'AmauiIconMaterialNatFilled';

export default IconMaterialNatFilled;
