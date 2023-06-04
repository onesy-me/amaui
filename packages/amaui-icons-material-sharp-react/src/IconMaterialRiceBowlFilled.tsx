import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRiceBowlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RiceBowlFilled'

      short_name='RiceBowl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22v-1.75Q5.35 19.2 3.675 17 2 14.8 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 2.8-1.675 5T16 20.25V22Zm2-10h4V4.25q-.5-.125-.988-.188Q12.525 4 12 4t-1.012.062q-.488.063-.988.188Zm-6 0h4V5.075q-1.8 1.05-2.9 2.863Q4 9.75 4 12Zm12 0h4q0-2.25-1.1-4.062-1.1-1.813-2.9-2.863Z"/>
    </Icon>
  );
});

IconMaterialRiceBowlFilled.displayName = 'AmauiIconMaterialRiceBowlFilled';

export default IconMaterialRiceBowlFilled;
