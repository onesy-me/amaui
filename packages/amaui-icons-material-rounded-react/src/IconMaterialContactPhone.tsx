import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPhone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhone'

      short_name='ContactPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21q-.825 0-1.412-.587Q0 19.825 0 19V5q0-.825.588-1.413Q1.175 3 2 3h20q.825 0 1.413.587Q24 4.175 24 5v14q0 .825-.587 1.413Q22.825 21 22 21Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938Q6.85 15 9 15t4 1.062q1.85 1.063 2.9 2.938ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm9.275 3.375q.275.275.7.25.425-.025.7-.3l.7-.7q.275-.275.3-.65.025-.375-.2-.675l-.675-.9q-.125-.2-.338-.3Q19.25 14 19 14h-1.15q-.15-.45-.25-.963-.1-.512-.1-1.037 0-.525.1-1.012.1-.488.25-.988H19q.25 0 .462-.1.213-.1.338-.3l.675-.9q.225-.3.2-.675-.025-.375-.3-.65l-.7-.7q-.275-.275-.7-.3-.425-.025-.7.25-1.05 1.05-1.662 2.463Q16 10.5 16 12t.613 2.912q.612 1.413 1.662 2.463ZM4.55 19h8.9q-.85-.95-2.012-1.475Q10.275 17 9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.712-.288Q8 11.425 8 11t.288-.713Q8.575 10 9 10t.713.287Q10 10.575 10 11t-.287.712Q9.425 12 9 12Zm3 0Z"/>
    </Icon>
  );
});

IconMaterialContactPhone.displayName = 'AmauiIconMaterialContactPhone';

export default IconMaterialContactPhone;
