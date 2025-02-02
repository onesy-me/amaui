import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveItem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveItem'

      short_name='MoveItem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M806-440H320v-80h486l-62-62 56-58 160 160-160 160-56-58 62-62ZM600-600v-160H200v560h400v-160h80v240H120v-720h560v240h-80Z"/>
    </Icon>
  );
});

IconMaterialMoveItem.displayName = 'OnesyIconMaterialMoveItem';

export default IconMaterialMoveItem;
