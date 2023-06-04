import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionSensorAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionSensorAlert'

      short_name='MotionSensorAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 22q-2.075 0-3.537-1.462Q14 19.075 14 17q0-2.075 1.463-3.538Q16.925 12 19 12t3.538 1.462Q24 14.925 24 17q0 2.075-1.462 3.538Q21.075 22 19 22Zm0-4q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35Q19.2 14 19 14q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm0 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q19.2 19 19 19q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM6.175 11q-.45 0-.7.387-.25.388-.125.838Q5.825 13.8 7 14.95q1.175 1.15 2.75 1.675.45.15.838-.138.387-.287.387-.762 0-.35-.225-.638-.225-.287-.575-.412-.975-.375-1.737-1.1-.763-.725-1.113-1.725-.125-.375-.437-.612Q6.575 11 6.175 11ZM6.2 9q-.45 0-.7-.387-.25-.388-.125-.838Q5.85 6.2 7.037 5.05 8.225 3.9 9.8 3.375q.45-.15.825.137.375.288.375.763 0 .35-.225.637-.225.288-.575.413-.975.375-1.737 1.1Q7.7 7.15 7.35 8.15q-.125.375-.437.612Q6.6 9 6.2 9ZM12 8q.85 0 1.425.575Q14 9.15 14 10q0 .825-.575 1.412Q12.85 12 12 12q-.825 0-1.412-.588Q10 10.825 10 10q0-.85.588-1.425Q11.175 8 12 8Zm5.85 1q.45 0 .7-.387.25-.388.125-.838Q18.2 6.2 17.012 5.05 15.825 3.9 14.25 3.375q-.45-.15-.825.137-.375.288-.375.763 0 .35.225.637.225.288.575.413.975.375 1.738 1.1.762.725 1.112 1.725.125.375.437.612.313.238.713.238ZM7 2H4v3q0 .425-.287.713Q3.425 6 3 6t-.712-.287Q2 5.425 2 5V2q0-.825.588-1.413Q3.175 0 4 0h3q.425 0 .713.287Q8 .575 8 1t-.287.712Q7.425 2 7 2ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-3q0-.425.288-.713Q2.575 14 3 14t.713.287Q4 14.575 4 15v3h3q.425 0 .713.288Q8 18.575 8 19t-.287.712Q7.425 20 7 20ZM17 2q-.425 0-.712-.288Q16 1.425 16 1t.288-.713Q16.575 0 17 0h3q.825 0 1.413.587Q22 1.175 22 2v3q0 .425-.288.713Q21.425 6 21 6t-.712-.287Q20 5.425 20 5V2Z"/>
    </Icon>
  );
});

IconMaterialMotionSensorAlert.displayName = 'AmauiIconMaterialMotionSensorAlert';

export default IconMaterialMotionSensorAlert;
