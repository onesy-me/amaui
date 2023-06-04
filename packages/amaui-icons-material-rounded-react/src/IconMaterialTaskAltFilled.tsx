import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaskAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskAltFilled'

      short_name='TaskAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.875 10.325q.075.425.1.837.025.413.025.838 0 2.075-.788 3.9-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22t-3.9-.788q-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2q1.275 0 2.463.312 1.187.313 2.237.863.375.2.463.612.087.413-.188.763-.25.325-.65.425-.4.1-.75-.1-.8-.425-1.712-.65Q12.95 4 12 4 8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-.325-.025-.638-.025-.312-.075-.637-.05-.35.113-.65.162-.3.462-.475.425-.25.863-.013.437.238.537.738ZM9.9 15.9l-2.875-2.875q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l2.15 2.15 9.325-9.35q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7L11.3 15.9q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialTaskAltFilled.displayName = 'AmauiIconMaterialTaskAltFilled';

export default IconMaterialTaskAltFilled;
