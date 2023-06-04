import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyW100'

      short_name='Emergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.05 20.7q-.325 0-.537-.213-.213-.212-.213-.537v-5l-4.325 2.5q-.275.175-.575.088-.3-.088-.45-.363L4 15.525q-.15-.275-.075-.575.075-.3.35-.45L8.6 12 4.275 9.5q-.275-.15-.35-.45-.075-.3.075-.575l.975-1.65q.15-.275.45-.35.3-.075.575.075l4.3 2.5v-5q0-.325.213-.538.212-.212.537-.212h1.9q.325 0 .538.212.212.213.212.538v5l4.325-2.5q.275-.175.575-.087.3.087.45.362l.95 1.65q.15.275.075.575-.075.3-.35.45L15.4 12l4.325 2.5q.275.15.35.45.075.3-.075.575l-.95 1.65q-.15.275-.45.363-.3.087-.575-.088l-4.325-2.5v5q0 .325-.212.537-.213.213-.538.213ZM11 20h2v-5.4q0-.3.25-.438.25-.137.5.013l4.675 2.7 1-1.75-4.675-2.7q-.25-.15-.25-.438 0-.287.25-.437l4.675-2.7-1-1.725-4.675 2.7q-.25.15-.5.012Q13 9.7 13 9.4V4h-2v5.4q0 .275-.238.425-.237.15-.512.025l-4.675-2.7-1 1.725 4.675 2.7q.25.15.25.437 0 .288-.25.438l-4.675 2.7 1 1.725 4.675-2.7q.25-.15.5-.013.25.138.25.438Zm1-8Z"/>
    </Icon>
  );
});

IconMaterialEmergencyW100.displayName = 'AmauiIconMaterialEmergencyW100';

export default IconMaterialEmergencyW100;
