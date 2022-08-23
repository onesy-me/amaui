import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFramePersonRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonRoundedFilled'
      short_name='FramePerson'

      {...props}
    >
      <path d="M18 19H6q-.425 0-.713-.288Q5 18.425 5 18v-2.35q0-.5.213-.925.212-.425.612-.7 1.275-.95 2.938-1.488Q10.425 12 12 12q1.575 0 3.238.537 1.662.538 2.937 1.488.4.275.613.7.212.425.212.925V18q0 .425-.288.712Q18.425 19 18 19Zm-6-8q-1.65 0-2.825-1.175Q8 8.65 8 7q0-1.65 1.175-2.825Q10.35 3 12 3q1.65 0 2.825 1.175Q16 5.35 16 7q0 1.65-1.175 2.825Q13.65 11 12 11ZM5 3H3v2q0 .425-.287.713Q2.425 6 2 6t-.712-.287Q1 5.425 1 5V3q0-.825.588-1.413Q2.175 1 3 1h2q.425 0 .713.287Q6 1.575 6 2t-.287.712Q5.425 3 5 3ZM3 23q-.825 0-1.412-.587Q1 21.825 1 21v-2q0-.425.288-.712Q1.575 18 2 18t.713.288Q3 18.575 3 19v2h2q.425 0 .713.288Q6 21.575 6 22t-.287.712Q5.425 23 5 23Zm18 0h-2q-.425 0-.712-.288Q18 22.425 18 22t.288-.712Q18.575 21 19 21h2v-2q0-.425.288-.712Q21.575 18 22 18t.712.288Q23 18.575 23 19v2q0 .825-.587 1.413Q21.825 23 21 23ZM19 3q-.425 0-.712-.288Q18 2.425 18 2t.288-.713Q18.575 1 19 1h2q.825 0 1.413.587Q23 2.175 23 3v2q0 .425-.288.713Q22.425 6 22 6t-.712-.287Q21 5.425 21 5V3Z"/>
    </Icon>
  );
});

IconMaterialFramePersonRoundedFilled.displayName = 'AmauiIconMaterialFramePersonRoundedFilled';

export default IconMaterialFramePersonRoundedFilled;
