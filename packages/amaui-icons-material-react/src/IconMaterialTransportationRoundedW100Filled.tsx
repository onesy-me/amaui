import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransportationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransportationRoundedW100Filled'
      short_name='Transportation'

      {...props}
    >
      <path d="M18.15 16.35q-1.7-.05-2.912-1.112-1.213-1.063-1.438-2.888h-3.05l-.425-.7H13.8q.075-.875.625-1.863.55-.987 1.475-1.487H8.425L8 7.6h8.15l-1.725-4.725q-.1-.25-.3-.388-.2-.137-.45-.137H11.3v-.7h2.375q.475 0 .85.262.375.263.55.713L16.9 7.6h1.25q1.875 0 3.113 1.262Q22.5 10.125 22.5 12q0 1.8-1.275 3.075-1.275 1.275-3.075 1.275Zm0-.7q1.525 0 2.588-1.063Q21.8 13.525 21.8 12q0-1.575-1.037-2.638Q19.725 8.3 18.15 8.3q-.3 0-.55.05-.25.05-.45.1l1.05 2.8-.65.25-1-2.8q-.95.45-1.5 1.4T14.5 12q0 1.525 1.062 2.587 1.063 1.063 2.588 1.063ZM8 22.4q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.2.025-.35.025-.15.075-.35h-4.1V15.3h2v-3.65h-2v-.7h5.975l2.5 4.35H12.2q.625 0 1.063.438.437.437.437 1.062v1.05q0 .625-.437 1.063-.438.437-1.063.437h-1.95q.05.2.075.35.025.15.025.35 0 .975-.687 1.662Q8.975 22.4 8 22.4Zm-3.65-7.1h4.975L7.25 11.65h-2.9ZM8 21.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163Q8.675 18.4 8 18.4t-1.162.487q-.488.488-.488 1.163t.488 1.162Q7.325 21.7 8 21.7Z"/>
    </Icon>
  );
});

IconMaterialTransportationRoundedW100Filled.displayName = 'AmauiIconMaterialTransportationRoundedW100Filled';

export default IconMaterialTransportationRoundedW100Filled;
