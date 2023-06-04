import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorResetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorResetFilled'

      short_name='FormatColorReset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.25 16.4 8.4 5.55l2.9-2.85q.15-.15.325-.225Q11.8 2.4 12 2.4t.375.075q.175.075.325.225l4.95 4.85q1.1 1.05 1.725 2.487Q20 11.475 20 13.1q0 .9-.2 1.725-.2.825-.55 1.575Zm-.15 5.5-2.4-2.4q-1.025.725-2.2 1.113Q13.325 21 12 21q-3.325 0-5.662-2.312Q4 16.375 4 13.1q0-1.275.4-2.45.4-1.175 1.2-2.25L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialFormatColorResetFilled.displayName = 'AmauiIconMaterialFormatColorResetFilled';

export default IconMaterialFormatColorResetFilled;
