import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightW100'

      short_name='SwipeRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M435-132 212-354l29-27 145 35v-348h28v386l-160-43 192 191h274v-280h28v308H435Zm62-254v-174h28v174h-28Zm112 0v-134h28v134h-28ZM132-660q46-84 139.5-133.5T477-843q83 0 162 29.5T800-722v-106h28v168H660v-28h136q-81-65-159-96t-160-31q-99 0-183 41.5T162-660h-30Zm445 387Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightW100.displayName = 'OnesyIconMaterialSwipeRightW100';

export default IconMaterialSwipeRightW100;
