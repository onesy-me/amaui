import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabled'

      short_name='PlayDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m658-416-56-58-38-36-244-244v-6l440 280-102 64ZM790-56 520-328 320-200v-328L56-792l56-56 736 736-58 56ZM400-448Zm0 102 62-40-62-62v102Zm164-164Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabled.displayName = 'OnesyIconMaterialPlayDisabled';

export default IconMaterialPlayDisabled;
