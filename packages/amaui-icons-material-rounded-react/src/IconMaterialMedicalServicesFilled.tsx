import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedicalServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesFilled'

      short_name='MedicalServices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15v2q0 .425.288.712.287.288.712.288t.713-.288Q13 17.425 13 17v-2h2q.425 0 .713-.288Q16 14.425 16 14t-.287-.713Q15.425 13 15 13h-2v-2q0-.425-.287-.713Q12.425 10 12 10t-.712.287Q11 10.575 11 11v2H9q-.425 0-.712.287Q8 13.575 8 14t.288.712Q8.575 15 9 15Zm-7 7q-.825 0-1.412-.587Q2 20.825 2 20V8q0-.825.588-1.412Q3.175 6 4 6h4V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v12q0 .825-.587 1.413Q20.825 22 20 22Zm6-16h4V4h-4Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesFilled.displayName = 'AmauiIconMaterialMedicalServicesFilled';

export default IconMaterialMedicalServicesFilled;
