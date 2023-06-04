import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthW100Filled'

      short_name='Width'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M316 698 193 575l123-123 20 20-89 89 465 1-88-90 19-19 123 123-123 123-19-19 88-90H246l89 89-19 19Z"/>
    </Icon>
  );
});

IconMaterialWidthW100Filled.displayName = 'AmauiIconMaterialWidthW100Filled';

export default IconMaterialWidthW100Filled;
