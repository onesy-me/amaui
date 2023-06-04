import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagicExchange = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicExchange'

      short_name='MagicExchange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 1016q-112 0-206-51T120 829v107H40V696h240v80h-99q48 72 126.5 116T480 936q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840 576h80q0 91-34.5 171T791 887q-60 60-140 94.5T480 1016ZM40 576q0-91 34.5-171T169 265q60-60 140-94.5T480 136q112 0 206 51t154 136V216h80v240H680v-80h99q-48-72-126.5-116T480 216q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120 576H40Zm440 200-62-138-138-62 138-63 62-137 63 137 137 63-137 62-63 138Z"/>
    </Icon>
  );
});

IconMaterialMagicExchange.displayName = 'AmauiIconMaterialMagicExchange';

export default IconMaterialMagicExchange;
