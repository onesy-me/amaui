import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppBlockingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlockingW100Filled'

      short_name='AppBlocking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 21.7V2.3h11.4v4.6H17V5.35H7v13.3h10V17.1h.7v4.6Zm11.05-6.1q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm0-.7q.5 0 .938-.15.437-.15.862-.45l-4.1-4.1q-.3.425-.45.862-.15.438-.15.938 0 1.2.85 2.05.85.85 2.05.85Zm2.3-1.1q.35-.45.475-.875T20.25 12q0-1.2-.85-2.05-.85-.85-2.05-.85-.5 0-.937.15-.438.15-.863.45Z"/>
    </Icon>
  );
});

IconMaterialAppBlockingW100Filled.displayName = 'AmauiIconMaterialAppBlockingW100Filled';

export default IconMaterialAppBlockingW100Filled;
