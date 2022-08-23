import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOnRoundedFilled'
      short_name='MediaBluetoothOn'

      {...props}
    >
      <path d="M17.85 20.75Q17.65 20.95 17.325 20.812Q17 20.675 17 20.4V16.45L14.675 18.775Q14.5 18.95 14.25 18.95Q14 18.95 13.825 18.775Q13.65 18.6 13.65 18.35Q13.65 18.1 13.825 17.925L16.75 15L13.775 12.025Q13.6 11.85 13.6 11.6Q13.6 11.35 13.775 11.175Q13.95 11 14.2 11Q14.45 11 14.625 11.175L16.95 13.5V9.6Q16.95 9.325 17.275 9.188Q17.6 9.05 17.8 9.25L20.275 11.725Q20.425 11.875 20.5 12.062Q20.575 12.25 20.575 12.45Q20.575 12.65 20.5 12.825Q20.425 13 20.275 13.15L18.4 15L20.275 16.85Q20.425 17 20.5 17.175Q20.575 17.35 20.575 17.55Q20.575 17.75 20.513 17.938Q20.45 18.125 20.3 18.275ZM18.15 13.55 19.3 12.45 18.15 11.3ZM18.15 18.7 19.3 17.55 18.15 16.45ZM7 21Q5.35 21 4.175 19.825Q3 18.65 3 17Q3 15.35 4.175 14.175Q5.35 13 7 13Q7.575 13 8.062 13.137Q8.55 13.275 9 13.55V5Q9 4.175 9.588 3.587Q10.175 3 11 3H13Q13.825 3 14.413 3.587Q15 4.175 15 5Q15 5.825 14.413 6.412Q13.825 7 13 7H11V17Q11 18.65 9.825 19.825Q8.65 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOnRoundedFilled.displayName = 'AmauiIconMaterialMediaBluetoothOnRoundedFilled';

export default IconMaterialMediaBluetoothOnRoundedFilled;
