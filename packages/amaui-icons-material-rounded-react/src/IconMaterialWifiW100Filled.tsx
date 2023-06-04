import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiW100Filled'

      short_name='Wifi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15q-.15-.15-.15-.363 0-.212.15-.337 1.2-1.1 2.725-1.7Q10.25 12 12 12t3.275.6q1.525.6 2.725 1.7.15.125.15.337 0 .213-.15.363t-.35.15q-.2 0-.35-.125-1.075-.95-2.425-1.488Q13.525 13 12 13t-2.875.537q-1.35.538-2.425 1.488-.15.125-.35.125-.2 0-.35-.15Zm-4.25-4.25q-.15-.15-.15-.363 0-.212.15-.337 2.025-1.875 4.625-2.963Q8.975 6 12 6t5.625 1.087q2.6 1.088 4.625 2.963.15.125.15.337 0 .213-.15.363t-.35.137q-.2-.012-.35-.137-1.9-1.775-4.337-2.763Q14.775 7 12 7t-5.213.987Q4.35 8.975 2.45 10.75q-.15.125-.35.137-.2.013-.35-.137ZM12 20.25q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Z"/>
    </Icon>
  );
});

IconMaterialWifiW100Filled.displayName = 'AmauiIconMaterialWifiW100Filled';

export default IconMaterialWifiW100Filled;
