import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPharmacyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacyW100Filled'

      short_name='LocalPharmacy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7v-.5L6.35 13 4.3 6.8v-.5h11.9l1.3-3.6.65.25-1.2 3.35h2.75v.5L17.65 13l2.05 6.2v.5Zm7.35-3.6h.7v-2.75h2.75v-.7h-2.75V9.9h-.7v2.75H8.9v.7h2.75Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacyW100Filled.displayName = 'AmauiIconMaterialLocalPharmacyW100Filled';

export default IconMaterialLocalPharmacyW100Filled;
