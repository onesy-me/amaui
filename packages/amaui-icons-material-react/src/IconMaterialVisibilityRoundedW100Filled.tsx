import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVisibilityRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityRoundedW100Filled'
      short_name='Visibility'

      {...props}
    >
      <path d="M12 14.9Q13.425 14.9 14.413 13.912Q15.4 12.925 15.4 11.5Q15.4 10.075 14.413 9.087Q13.425 8.1 12 8.1Q10.575 8.1 9.588 9.087Q8.6 10.075 8.6 11.5Q8.6 12.925 9.588 13.912Q10.575 14.9 12 14.9ZM12 14.2Q10.875 14.2 10.088 13.412Q9.3 12.625 9.3 11.5Q9.3 10.375 10.088 9.587Q10.875 8.8 12 8.8Q13.125 8.8 13.913 9.587Q14.7 10.375 14.7 11.5Q14.7 12.625 13.913 13.412Q13.125 14.2 12 14.2ZM12 17.7Q9.025 17.7 6.513 16.15Q4 14.6 2.625 11.95Q2.575 11.85 2.55 11.738Q2.525 11.625 2.525 11.5Q2.525 11.375 2.55 11.262Q2.575 11.15 2.625 11.05Q4 8.4 6.513 6.85Q9.025 5.3 12 5.3Q14.975 5.3 17.488 6.85Q20 8.4 21.375 11.05Q21.425 11.15 21.45 11.262Q21.475 11.375 21.475 11.5Q21.475 11.625 21.45 11.738Q21.425 11.85 21.375 11.95Q20 14.6 17.488 16.15Q14.975 17.7 12 17.7Z"/>
    </Icon>
  );
});

IconMaterialVisibilityRoundedW100Filled.displayName = 'AmauiIconMaterialVisibilityRoundedW100Filled';

export default IconMaterialVisibilityRoundedW100Filled;
