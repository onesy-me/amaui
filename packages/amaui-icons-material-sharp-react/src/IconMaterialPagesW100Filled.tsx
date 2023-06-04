import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPagesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesW100Filled'

      short_name='Pages'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.4 1.075-2.325L15.4 12l-2.325-1.075L12 8.6l-1.075 2.325L8.6 12l2.325 1.075Zm-7.7 4.3V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialPagesW100Filled.displayName = 'AmauiIconMaterialPagesW100Filled';

export default IconMaterialPagesW100Filled;
