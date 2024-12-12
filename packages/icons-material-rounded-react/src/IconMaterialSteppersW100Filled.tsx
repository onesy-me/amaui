import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSteppersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SteppersW100Filled'

      short_name='Steppers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240.24-400q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5Zm-.31-28Q262-428 277-442.93t15-37Q292-502 277.07-517t-37-15Q218-532 203-517.07t-15 37Q188-458 202.93-443t37 15Zm240.31 28q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5Zm-.31-28Q502-428 517-442.93t15-37Q532-502 517.07-517t-37-15Q458-532 443-517.07t-15 37Q428-458 442.93-443t37 15Zm240.31 28q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5Z"/>
    </Icon>
  );
});

IconMaterialSteppersW100Filled.displayName = 'OnesyIconMaterialSteppersW100Filled';

export default IconMaterialSteppersW100Filled;
