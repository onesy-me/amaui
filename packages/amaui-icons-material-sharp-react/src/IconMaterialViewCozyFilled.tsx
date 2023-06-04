import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCozyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCozyFilled'

      short_name='ViewCozy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 11.5h4v-4h-4Zm5 0h4v-4h-4Zm-5 5h4v-4h-4Zm5 0h4v-4h-4ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialViewCozyFilled.displayName = 'AmauiIconMaterialViewCozyFilled';

export default IconMaterialViewCozyFilled;
