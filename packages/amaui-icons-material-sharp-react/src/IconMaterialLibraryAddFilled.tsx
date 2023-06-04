import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddFilled'

      short_name='LibraryAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 14h2v-3h3V9h-3V6h-2v3h-3v2h3Zm-7 4V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddFilled.displayName = 'AmauiIconMaterialLibraryAddFilled';

export default IconMaterialLibraryAddFilled;
