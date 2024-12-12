import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoCrashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashFilled'

      short_name='NoCrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-706 367-818l56-57 57 57 142-142 56 56-198 198ZM120 0v-360l98-280h524l98 280V0H720v-80H240V0H120Zm112-440h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200Zm360 0q25 0 42.5-17.5T720-260q0-25-17.5-42.5T660-320q-25 0-42.5 17.5T600-260q0 25 17.5 42.5T660-200Z"/>
    </Icon>
  );
});

IconMaterialNoCrashFilled.displayName = 'OnesyIconMaterialNoCrashFilled';

export default IconMaterialNoCrashFilled;
