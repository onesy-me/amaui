import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNfc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nfc'

      short_name='Nfc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z"/>
    </Icon>
  );
});

IconMaterialNfc.displayName = 'OnesyIconMaterialNfc';

export default IconMaterialNfc;
