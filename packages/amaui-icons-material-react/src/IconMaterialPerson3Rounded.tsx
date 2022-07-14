import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson3Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3Rounded'
      short_name='Person3'

      {...props}
    >
      <path d="M10 14q-1.25 0-2.125-.875T7 11q0-.55.175-1.038.175-.487.525-.887-.1-.25-.15-.525Q7.5 8.275 7.5 8q0-.95.512-1.688.513-.737 1.338-1.087.5-.575 1.175-.9Q11.2 4 12 4t1.475.325q.675.325 1.175.9.825.35 1.338 1.087Q16.5 7.05 16.5 8q0 .275-.05.55t-.15.525q.35.4.525.887Q17 10.45 17 11q0 1.25-.875 2.125T14 14Zm0-2h4q.425 0 .713-.3.287-.3.287-.7 0-.175-.062-.325-.063-.15-.188-.3-.275-.325-.362-.638-.088-.312-.088-.587 0-.4.1-.688.1-.287.1-.462 0-.3-.175-.55-.175-.25-.45-.375-.225-.1-.412-.225-.188-.125-.338-.325-.125-.15-.412-.337Q12.425 6 12 6t-.712.2q-.288.2-.413.35-.15.175-.337.3-.188.125-.413.225-.275.125-.45.375T9.5 8q0 .175.1.462.1.288.1.688 0 .275-.087.587-.088.313-.363.638-.125.15-.188.3Q9 10.825 9 11q0 .4.288.7.287.3.712.3ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20v-.8q0-.85.438-1.562.437-.713 1.162-1.088 1.55-.775 3.15-1.163Q10.35 15 12 15t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.088Q20 18.35 20 19.2v.8q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 17 12 17t-2.775.337Q7.85 17.675 6.5 18.35q-.225.125-.362.35-.138.225-.138.5Zm6 0Zm0-8Z"/>
    </Icon>
  );
});

export default IconMaterialPerson3Rounded;
