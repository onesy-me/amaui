import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottomW100'

      short_name='BorderBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h17v1Zm0-4v-1h1v1Zm8 0v-1h1v1Zm8 0v-1h1v1Zm-16-4v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm-16-4v-1h1v1Zm8 0v-1h1v1Zm8 0v-1h1v1Zm-16-4v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Zm4 0v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderBottomW100.displayName = 'AmauiIconMaterialBorderBottomW100';

export default IconMaterialBorderBottomW100;
