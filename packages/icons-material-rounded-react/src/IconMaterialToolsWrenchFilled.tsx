import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsWrenchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrenchFilled'

      short_name='ToolsWrench'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.375 3.25q0-.65.875-1.05t2.25-.4q2.725 0 4.613 1.887Q15 5.575 15 8.3q0 .65-.125 1.287-.125.638-.375 1.213l6.875 6.875q.575.575.588 1.412.012.838-.563 1.413l-.675.7q-.575.6-1.413.612-.837.013-1.437-.587l-6.9-6.9q-.575.25-1.2.363-.625.112-1.25.112-2.725 0-4.612-1.888Q2.025 11.025 2.025 8.3q0-1.375.388-2.25.387-.875 1.037-.875.25 0 .463.087.212.088.387.263L7.075 8.3 8.5 6.9 5.725 4.125q-.175-.175-.262-.4-.088-.225-.088-.475Z"/>
    </Icon>
  );
});

IconMaterialToolsWrenchFilled.displayName = 'OnesyIconMaterialToolsWrenchFilled';

export default IconMaterialToolsWrenchFilled;
