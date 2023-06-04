import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightTakeoff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoff'

      short_name='FlightTakeoff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.025 21q-.425 0-.713-.288-.287-.287-.287-.712t.287-.712Q3.6 19 4.025 19h16q.425 0 .713.288.287.287.287.712t-.287.712q-.288.288-.713.288ZM5.6 15.8q-.325.1-.625-.025T4.5 15.35l-1.9-3.225q-.25-.4-.087-.75.162-.35.637-.45.175-.05.4.025.225.075.35.2l1.425 1.25 4.8-1.3L6.75 5.375q-.275-.475-.1-.913.175-.437.7-.612.275-.1.625-.013.35.088.575.288L14.875 9.8l5-1.35q.8-.2 1.45.325.65.525.65 1.375 0 .55-.337.975-.338.425-.863.575Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoff.displayName = 'AmauiIconMaterialFlightTakeoff';

export default IconMaterialFlightTakeoff;
