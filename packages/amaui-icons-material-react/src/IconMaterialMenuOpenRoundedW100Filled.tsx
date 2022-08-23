import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMenuOpenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenRoundedW100Filled'
      short_name='MenuOpen'

      {...props}
    >
      <path d="M4.125 17.05Q3.975 17.05 3.875 16.95Q3.775 16.85 3.775 16.7Q3.775 16.55 3.875 16.45Q3.975 16.35 4.125 16.35H15.125Q15.275 16.35 15.375 16.45Q15.475 16.55 15.475 16.7Q15.475 16.85 15.375 16.95Q15.275 17.05 15.125 17.05ZM4.125 12.35Q3.975 12.35 3.875 12.25Q3.775 12.15 3.775 12Q3.775 11.85 3.875 11.75Q3.975 11.65 4.125 11.65H12.125Q12.275 11.65 12.375 11.75Q12.475 11.85 12.475 12Q12.475 12.15 12.375 12.25Q12.275 12.35 12.125 12.35ZM4.125 7.65Q3.975 7.65 3.875 7.55Q3.775 7.45 3.775 7.3Q3.775 7.15 3.875 7.05Q3.975 6.95 4.125 6.95H15.125Q15.275 6.95 15.375 7.05Q15.475 7.15 15.475 7.3Q15.475 7.45 15.375 7.55Q15.275 7.65 15.125 7.65ZM16.625 12 19.975 15.35Q20.075 15.45 20.088 15.587Q20.1 15.725 19.975 15.85Q19.85 15.975 19.725 15.975Q19.6 15.975 19.475 15.85L16.15 12.525Q15.925 12.3 15.925 12Q15.925 11.7 16.15 11.475L19.475 8.15Q19.575 8.05 19.713 8.037Q19.85 8.025 19.975 8.15Q20.1 8.275 20.1 8.4Q20.1 8.525 19.975 8.65Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenRoundedW100Filled.displayName = 'AmauiIconMaterialMenuOpenRoundedW100Filled';

export default IconMaterialMenuOpenRoundedW100Filled;
