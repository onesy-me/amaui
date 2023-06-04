import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapsUgc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgc'

      short_name='MapsUgc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 12.025ZM1.5 21.25l1.45-4.95q-.475-1.025-.713-2.1Q2 13.125 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22q-1.125 0-2.2-.238-1.075-.237-2.1-.712L2.75 22.5q-.575.175-1-.25-.425-.425-.25-1ZM12 16q.425 0 .713-.288Q13 15.425 13 15v-2h2q.425 0 .713-.288Q16 12.425 16 12t-.287-.713Q15.425 11 15 11h-2V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v2H9q-.425 0-.712.287Q8 11.575 8 12t.288.712Q8.575 13 9 13h2v2q0 .425.288.712.287.288.712.288Zm-8.05 4.05 3.2-.95q.125-.05.275-.062.15-.013.275-.013.225 0 .437.037.213.038.413.138.8.4 1.675.6.875.2 1.775.2 3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 .9.2 1.775.2.875.6 1.675.175.325.188.687.012.363-.088.713Z"/>
    </Icon>
  );
});

IconMaterialMapsUgc.displayName = 'AmauiIconMaterialMapsUgc';

export default IconMaterialMapsUgc;
