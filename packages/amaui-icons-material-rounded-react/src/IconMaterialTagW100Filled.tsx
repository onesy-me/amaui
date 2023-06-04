import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagW100Filled'

      short_name='Tag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.75 19.35q-.175 0-.275-.125-.1-.125-.05-.275l.9-3.6h-3.55q-.175 0-.287-.125-.113-.125-.063-.3.05-.125.137-.2.088-.075.213-.075H8.5l1.325-5.3h-4.05q-.175 0-.287-.125-.113-.125-.063-.3.05-.125.137-.2.088-.075.213-.075H10l.95-3.75q.025-.125.1-.188.075-.062.2-.062.175 0 .275.125.1.125.05.275l-.9 3.6H15l.95-3.75q.025-.125.1-.188.075-.062.2-.062.175 0 .275.125.1.125.05.275l-.9 3.6h3.55q.175 0 .288.125.112.125.062.3-.05.125-.137.2-.088.075-.213.075H15.5l-1.325 5.3h4.05q.175 0 .288.125.112.125.062.3-.05.125-.137.2-.088.075-.213.075H14l-.95 3.75q-.025.125-.1.188-.075.062-.2.062-.175 0-.275-.125-.1-.125-.05-.275l.9-3.6H9l-.95 3.75q-.025.125-.1.188-.075.062-.2.062Zm1.425-4.7H13.5l1.325-5.3H10.5Z"/>
    </Icon>
  );
});

IconMaterialTagW100Filled.displayName = 'AmauiIconMaterialTagW100Filled';

export default IconMaterialTagW100Filled;
