import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyHomeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeSharpFilled'
      short_name='EmergencyHome'

      {...props}
    >
      <path d="M11 13h2V7h-2Zm1 3q.425 0 .713-.288Q13 15.425 13 15t-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15t.288.712Q11.575 16 12 16Zm1.425 5.45q-.575.575-1.425.575-.85 0-1.425-.575L2.55 13.425Q1.975 12.85 1.975 12q0-.85.575-1.425l8.025-8.025q.575-.575 1.425-.575.85 0 1.425.575l8.025 8.025q.575.575.575 1.425 0 .85-.575 1.425Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHomeSharpFilled.displayName = 'AmauiIconMaterialEmergencyHomeSharpFilled';

export default IconMaterialEmergencyHomeSharpFilled;
