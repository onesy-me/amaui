import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatShapesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatShapesW100Filled'

      short_name='FormatShapes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.8 21.2v-3.7h1.5v-11H2.8V2.8h3.7v1.5h11V2.8h3.7v3.7h-1.5v11h1.5v3.7h-3.7v-1.5h-11v1.5ZM6.5 19h11v-1.5H19v-11h-1.5V5h-11v1.5H5v11h1.5Zm1.775-3 3.55-9h.35l3.6 9h-.8l-1.1-2.7h-3.75l-1.1 2.7Zm2.1-3.35h3.25l-1.6-4.1h-.1Z"/>
    </Icon>
  );
});

IconMaterialFormatShapesW100Filled.displayName = 'AmauiIconMaterialFormatShapesW100Filled';

export default IconMaterialFormatShapesW100Filled;
