import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeHeatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatRoundedW100Filled'
      short_name='ModeHeat'

      {...props}
    >
      <path d="M12 20.45q-2.4 0-4.075-1.675Q6.25 17.1 6.25 14.7q0-1.35.5-2.475t1.875-2.55q1.4-1.45 1.775-2.662.375-1.213.375-3.013 3.025 2.275 5 4.962Q17.75 11.65 17.75 14.7q0 2.4-1.675 4.075Q14.4 20.45 12 20.45Zm0-.7q.675 0 1.3-.5t.625-1.6q0-.625-.425-1.55T12 13.775q-1.05 1.35-1.462 2.287-.413.938-.413 1.588 0 1.1.6 1.6t1.275.5Zm-2.125-.45q-.725-1.2-.313-2.687.413-1.488 2.188-3.613.05-.05.113-.075.062-.025.137-.025.075 0 .138.025.062.025.112.075.9 1.05 1.45 1.975.55.925.775 1.713.225.787.15 1.425-.075.637-.375 1.112 1.025-.5 1.913-1.65.887-1.15.887-2.875 0-1.45-.525-2.788-.525-1.337-1.337-2.525-.813-1.187-1.813-2.212-1-1.025-1.95-1.8-.05.975-.512 2.2-.463 1.225-1.888 2.7-1.25 1.275-1.662 2.287-.413 1.013-.413 2.138 0 1.75.913 2.9.912 1.15 2.012 1.7Z"/>
    </Icon>
  );
});

IconMaterialModeHeatRoundedW100Filled.displayName = 'AmauiIconMaterialModeHeatRoundedW100Filled';

export default IconMaterialModeHeatRoundedW100Filled;
