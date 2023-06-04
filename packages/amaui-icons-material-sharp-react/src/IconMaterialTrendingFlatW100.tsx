import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrendingFlatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrendingFlatW100'

      short_name='TrendingFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.5 15.6-.5-.5 2.75-2.75H3.65v-.7h16.1L17 8.9l.5-.5 3.6 3.6Z"/>
    </Icon>
  );
});

IconMaterialTrendingFlatW100.displayName = 'AmauiIconMaterialTrendingFlatW100';

export default IconMaterialTrendingFlatW100;
