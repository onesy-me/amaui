import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFreeCancellation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellation'

      short_name='FreeCancellation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M662-60 520-202l56-56 85 85 170-170 56 57L662-60ZM296-280l-56-56 64-64-64-64 56-56 64 64 64-64 56 56-64 64 64 64-56 56-64-64-64 64ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v334l-80 81v-175H200v400h250l79 80H120Zm80-560h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellation.displayName = 'OnesyIconMaterialFreeCancellation';

export default IconMaterialFreeCancellation;
