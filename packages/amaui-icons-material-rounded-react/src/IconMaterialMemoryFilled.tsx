import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMemoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryFilled'

      short_name='Memory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 15q-.425 0-.712-.288Q9 14.425 9 14v-4q0-.425.288-.713Q9.575 9 10 9h4q.425 0 .713.287Q15 9.575 15 10v4q0 .425-.287.712Q14.425 15 14 15Zm0 6q-.425 0-.712-.288Q9 20.425 9 20v-1H7q-.825 0-1.412-.587Q5 17.825 5 17v-2H4q-.425 0-.712-.288Q3 14.425 3 14t.288-.713Q3.575 13 4 13h1v-2H4q-.425 0-.712-.288Q3 10.425 3 10t.288-.713Q3.575 9 4 9h1V7q0-.825.588-1.412Q6.175 5 7 5h2V4q0-.425.288-.713Q9.575 3 10 3t.713.287Q11 3.575 11 4v1h2V4q0-.425.288-.713Q13.575 3 14 3t.713.287Q15 3.575 15 4v1h2q.825 0 1.413.588Q19 6.175 19 7v2h1q.425 0 .712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11h-1v2h1q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 15 20 15h-1v2q0 .825-.587 1.413Q17.825 19 17 19h-2v1q0 .425-.287.712Q14.425 21 14 21t-.712-.288Q13 20.425 13 20v-1h-2v1q0 .425-.287.712Q10.425 21 10 21Zm-3-4h10V7H7v10Z"/>
    </Icon>
  );
});

IconMaterialMemoryFilled.displayName = 'AmauiIconMaterialMemoryFilled';

export default IconMaterialMemoryFilled;
