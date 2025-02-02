import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardVoiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardVoiceFilled'

      short_name='KeyboardVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14Zm-1 7v-3.075q-2.6-.35-4.3-2.325Q5 13.625 5 11h2q0 2.075 1.463 3.537Q9.925 16 12 16t3.538-1.463Q17 13.075 17 11h2q0 2.625-1.7 4.6-1.7 1.975-4.3 2.325V21Z"/>
    </Icon>
  );
});

IconMaterialKeyboardVoiceFilled.displayName = 'OnesyIconMaterialKeyboardVoiceFilled';

export default IconMaterialKeyboardVoiceFilled;
