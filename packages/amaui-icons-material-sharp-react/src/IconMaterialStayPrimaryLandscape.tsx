import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayPrimaryLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscape'

      short_name='StayPrimaryLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 19V5h22v14Zm5-2h12V7H6Zm-3 0h1V7H3Zm17 0h1V7h-1ZM3 7h1Zm17 0h1Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscape.displayName = 'AmauiIconMaterialStayPrimaryLandscape';

export default IconMaterialStayPrimaryLandscape;
