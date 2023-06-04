import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigateBeforeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeW100Filled'

      short_name='NavigateBefore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.75 16.85-4.325-4.325q-.125-.125-.175-.263-.05-.137-.05-.262 0-.15.05-.275.05-.125.175-.25L13.75 7.15q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25L9.9 12l4.35 4.35q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialNavigateBeforeW100Filled.displayName = 'AmauiIconMaterialNavigateBeforeW100Filled';

export default IconMaterialNavigateBeforeW100Filled;
