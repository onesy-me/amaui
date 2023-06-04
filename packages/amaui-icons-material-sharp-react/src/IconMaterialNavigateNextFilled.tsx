import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigateNextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextFilled'

      short_name='NavigateNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"/>
    </Icon>
  );
});

IconMaterialNavigateNextFilled.displayName = 'AmauiIconMaterialNavigateNextFilled';

export default IconMaterialNavigateNextFilled;
