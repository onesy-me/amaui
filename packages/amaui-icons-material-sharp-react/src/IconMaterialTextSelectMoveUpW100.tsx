import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveUpW100'

      short_name='TextSelectMoveUp'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 884v-28h616v28H172Zm294-134V467l-90 89-20-20 124-124 124 124-20 20-90-89v283h-28ZM172 296v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveUpW100.displayName = 'AmauiIconMaterialTextSelectMoveUpW100';

export default IconMaterialTextSelectMoveUpW100;
