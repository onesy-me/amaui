import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnFilled'

      short_name='KeyboardReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 18-6-6 6-6 1.4 1.4L6.8 11H19V7h2v6H6.8l3.6 3.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnFilled.displayName = 'AmauiIconMaterialKeyboardReturnFilled';

export default IconMaterialKeyboardReturnFilled;
