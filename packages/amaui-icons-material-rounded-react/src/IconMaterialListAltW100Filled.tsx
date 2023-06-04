import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltW100Filled'

      short_name='ListAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm2.35-3.3q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm0-3.7q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm0-3.7q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm3.45 7.05h4.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3.7h4.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3.7h4.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialListAltW100Filled.displayName = 'AmauiIconMaterialListAltW100Filled';

export default IconMaterialListAltW100Filled;
