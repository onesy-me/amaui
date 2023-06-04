import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarRateHalf = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateHalf'

      short_name='StarRateHalf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.9v5.9l2.4 1.85-.9-3.05 2.25-1.6h-2.8ZM5.825 22l2.325-7.6L2 10h7.6L12 2l2.4 8H22l-6.15 4.4 2.325 7.6L12 17.3Z"/>
    </Icon>
  );
});

IconMaterialStarRateHalf.displayName = 'AmauiIconMaterialStarRateHalf';

export default IconMaterialStarRateHalf;
