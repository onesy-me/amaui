import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabNewRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightFilled'

      short_name='TabNewRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-40-56-56 63-64H600v-80h167l-63-64 56-56 160 160L760-40Zm-640-80v-720h720v414q-19-7-39.5-10.5T759-440q-100 0-169.5 70T520-200q0 21 3.5 41t10.5 39H120Zm320-160h80v-160h160v-80H520v-160h-80v160H280v80h160v160Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightFilled.displayName = 'OnesyIconMaterialTabNewRightFilled';

export default IconMaterialTabNewRightFilled;
