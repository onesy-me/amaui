import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricalServices = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricalServices'

      short_name='ElectricalServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 15v-2h2q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 15 20 15Zm0 4v-2h2q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19Zm-4 1q-.825 0-1.412-.587Q12 18.825 12 18h-2v-4h2q0-.825.588-1.413Q13.175 12 14 12h2q.425 0 .712.287.288.288.288.713v6q0 .425-.288.712Q16.425 20 16 20Zm-7-3q-1.65 0-2.825-1.175Q3 14.65 3 13q0-1.65 1.175-2.825Q5.35 9 7 9h1.5q.625 0 1.062-.438Q10 8.125 10 7.5t-.438-1.062Q9.125 6 8.5 6H5q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h3.5q1.45 0 2.475 1.025Q12 6.05 12 7.5q0 1.45-1.025 2.475Q9.95 11 8.5 11H7q-.825 0-1.412.587Q5 12.175 5 13q0 .825.588 1.412Q6.175 15 7 15h2v2Z"/>
    </Icon>
  );
});

IconMaterialElectricalServices.displayName = 'AmauiIconMaterialElectricalServices';

export default IconMaterialElectricalServices;
