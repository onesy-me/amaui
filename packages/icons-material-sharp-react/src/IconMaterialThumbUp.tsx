import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThumbUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUp'

      short_name='ThumbUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-520l280-280 74 74-52 206h338v176L774-120H280Zm80-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406ZM80-120v-520h200v80H160v360h120v80H80Z"/>
    </Icon>
  );
});

IconMaterialThumbUp.displayName = 'OnesyIconMaterialThumbUp';

export default IconMaterialThumbUp;
