import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyHeatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHeatSharpFilled'
      short_name='EmergencyHeat'

      {...props}
    >
      <path d="M20 7q-.425 0-.712-.287Q19 6.425 19 6V3q0-.425.288-.713Q19.575 2 20 2t.712.287Q21 2.575 21 3v3q0 .425-.288.713Q20.425 7 20 7Zm0 3q-.425 0-.712-.288Q19 9.425 19 9t.288-.713Q19.575 8 20 8t.712.287Q21 8.575 21 9t-.288.712Q20.425 10 20 10ZM10 22q-2.925 0-4.963-2.038Q3 17.925 3 15q0-1.65.575-2.988.575-1.337 2.225-3.037Q7.475 7.25 7.763 5.912 8.05 4.575 8 2q3.925 2.275 6.463 5.75Q17 11.225 17 15q0 2.925-2.037 4.962Q12.925 22 10 22Zm0-2q.525 0 1.025-.413.5-.412.5-1.312 0-.6-.337-1.4-.338-.8-1.188-1.925-.8 1.05-1.137 1.875-.338.825-.338 1.45 0 .875.475 1.3.475.425 1 .425Zm-3.475-1.4q-.125-1.55.775-3.15.9-1.6 1.975-2.75.15-.175.338-.25.187-.075.387-.075t.388.075q.187.075.337.25 1.175 1.225 2 2.762.825 1.538.775 3.113.7-.675 1.1-1.6.4-.925.4-1.975 0-1.525-.475-2.875T13.3 9.6q-.75-1.175-1.65-2.138-.9-.962-1.775-1.687-.325 1.65-1.137 2.762Q7.925 9.65 7.125 10.5q-1.275 1.3-1.7 2.275Q5 13.75 5 15q0 1.05.4 1.975T6.525 18.6Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHeatSharpFilled.displayName = 'AmauiIconMaterialEmergencyHeatSharpFilled';

export default IconMaterialEmergencyHeatSharpFilled;
