import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediationW100Filled'

      short_name='Mediation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.125 22.35q-.975 0-1.662-.687-.688-.688-.688-1.663 0-.975.688-1.663.687-.687 1.662-.687.725 0 1.288.375.562.375.862 1.025Q9.125 18 10.3 16.238q1.175-1.763 1.475-3.888h-4.3q-.15.875-.813 1.437-.662.563-1.537.563-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.875 0 1.537.562.663.563.813 1.438h4.3q-.3-2.125-1.475-3.863Q9.125 6.05 7.275 4.95q-.3.65-.862 1.025-.563.375-1.288.375-.975 0-1.662-.688Q2.775 4.975 2.775 4q0-.975.688-1.663.687-.687 1.662-.687 1.05 0 1.763.8.712.8.587 1.9Q9.6 5.4 10.9 7.337q1.3 1.938 1.575 4.313h7.4l-2.25-2.25.5-.5 3.1 3.1-3.1 3.1-.5-.5 2.25-2.25h-7.4q-.275 2.375-1.575 4.313Q9.6 18.6 7.475 19.65q.125 1.1-.587 1.9-.713.8-1.763.8Z"/>
    </Icon>
  );
});

IconMaterialMediationW100Filled.displayName = 'AmauiIconMaterialMediationW100Filled';

export default IconMaterialMediationW100Filled;
