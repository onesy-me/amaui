import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFireHydrantSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireHydrantSharpW100Filled'
      short_name='FireHydrant'

      {...props}
    >
      <path d="M5.4 20.7V20H7.3V15.825H5.75Q5.475 15.825 5.263 15.613Q5.05 15.4 5.05 15.125V12.875Q5.05 12.6 5.263 12.387Q5.475 12.175 5.75 12.175H7.3V8H5.4V7.3H7.35Q7.625 5.575 8.925 4.437Q10.225 3.3 12 3.3Q13.775 3.3 15.075 4.437Q16.375 5.575 16.65 7.3H18.6V8H16.7V12.175H18.25Q18.525 12.175 18.738 12.387Q18.95 12.6 18.95 12.875V15.125Q18.95 15.4 18.738 15.613Q18.525 15.825 18.25 15.825H16.7V20H18.6V20.7ZM12 16.9Q13.2 16.9 14.05 16.05Q14.9 15.2 14.9 14Q14.9 12.8 14.05 11.95Q13.2 11.1 12 11.1Q10.8 11.1 9.95 11.95Q9.1 12.8 9.1 14Q9.1 15.2 9.95 16.05Q10.8 16.9 12 16.9ZM12 16.2Q11.075 16.2 10.438 15.562Q9.8 14.925 9.8 14Q9.8 13.075 10.438 12.438Q11.075 11.8 12 11.8Q12.925 11.8 13.562 12.438Q14.2 13.075 14.2 14Q14.2 14.925 13.562 15.562Q12.925 16.2 12 16.2Z"/>
    </Icon>
  );
});

IconMaterialFireHydrantSharpW100Filled.displayName = 'AmauiIconMaterialFireHydrantSharpW100Filled';

export default IconMaterialFireHydrantSharpW100Filled;
