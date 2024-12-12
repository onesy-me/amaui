import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLockResetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockResetFilled'

      short_name='LockReset'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-120q-63 0-119-20t-102-56q-13-11-14-27.5t11-28.5q12-12 28.5-12t30.5 10q35 26 76.5 40t88.5 14q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198v7l45-45q11-11 27.5-11t28.5 11q12 12 12 28.5T341-461L228-348q-12 12-28 12t-28-12L58-462q-12-12-11.5-28.5T59-518q12-11 28.5-11.5T115-518l45 46v-8q0-75 28.5-140.5t77-114q48.5-48.5 114-77T520-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T880-480q0 150-105 255T520-120Zm-80-200q-17 0-28.5-11.5T400-360v-120q0-17 11.5-28.5T440-520v-40q0-33 23.5-56.5T520-640q33 0 56.5 23.5T600-560v40q17 0 28.5 11.5T640-480v120q0 17-11.5 28.5T600-320H440Zm40-200h80v-40q0-17-11.5-28.5T520-600q-17 0-28.5 11.5T480-560v40Z"/>
    </Icon>
  );
});

IconMaterialLockResetFilled.displayName = 'OnesyIconMaterialLockResetFilled';

export default IconMaterialLockResetFilled;
