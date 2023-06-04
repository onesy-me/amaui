import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighQualityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityW100Filled'

      short_name='HighQuality'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 14.6h.7v-2h2.8v2h.7V9.4h-.7v2.5H7.5V9.4h-.7Zm7.95 1.5h.7v-1.5h1.75V9.4H13v5.2h1.75Zm-1.05-2.2v-3.8h2.8v3.8ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialHighQualityW100Filled.displayName = 'AmauiIconMaterialHighQualityW100Filled';

export default IconMaterialHighQualityW100Filled;
