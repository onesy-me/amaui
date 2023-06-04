import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WardW100Filled'

      short_name='Ward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.45 4h-2v-.7h2.7v17.4h-.7Zm2.7 16.7V3.3h10.4v17.4Zm.7-8.525q.375-.425.888-.65.512-.225 1.112-.225h5q.6 0 1.112.225.513.225.888.65V4h-9ZM13.35 9q-.575 0-.963-.387Q12 8.225 12 7.65t.387-.962q.388-.388.963-.388t.962.388q.388.387.388.962t-.388.963Q13.925 9 13.35 9ZM13 18.35h.7v-2h2v-.7h-2v-2H13v2h-2v.7h2Z"/>
    </Icon>
  );
});

IconMaterialWardW100Filled.displayName = 'AmauiIconMaterialWardW100Filled';

export default IconMaterialWardW100Filled;
