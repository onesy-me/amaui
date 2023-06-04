import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSortW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortW100'

      short_name='Sort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 17.35v-.7h4.7v.7Zm0-5.5v-.7h10.7v.7Zm0-5.5v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialSortW100.displayName = 'AmauiIconMaterialSortW100';

export default IconMaterialSortW100;
