import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesome'

      short_name='AutoAwesome'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" x="0"/></g><g><g><polygon opacity=".3" points="9.99,11.01 9,8.83 8.01,11.01 5.83,12 8.01,12.99 9,15.17 9.99,12.99 12.17,12"/><polygon points="19,9 20.25,6.25 23,5 20.25,3.75 19,1 17.75,3.75 15,5 17.75,6.25"/><polygon points="19,15 17.75,17.75 15,19 17.75,20.25 19,23 20.25,20.25 23,19 20.25,17.75"/><path d="M11.5,9.5L9,4L6.5,9.5L1,12l5.5,2.5L9,20l2.5-5.5L17,12L11.5,9.5z M9.99,12.99L9,15.17l-0.99-2.18L5.83,12l2.18-0.99 L9,8.83l0.99,2.18L12.17,12L9.99,12.99z"/></g></g>
    </Icon>
  );
});

IconMaterialAutoAwesome.displayName = 'OnesyIconMaterialAutoAwesome';

export default IconMaterialAutoAwesome;
