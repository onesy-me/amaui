import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbIncandescentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIncandescentFilled'

      short_name='WbIncandescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.425 0-.712-.288Q11 21.425 11 21v-1q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v1q0 .425-.287.712Q12.425 22 12 22Zm-9-9q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h1q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm17 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h1q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13Zm-2.7 6.2-.725-.725Q16.3 18.2 16.3 17.8t.3-.7q.275-.275.7-.275.425 0 .7.275l.725.725Q19 18.1 19 18.5t-.3.7q-.275.275-.7.275-.425 0-.7-.275Zm-12 0q-.275-.275-.275-.7 0-.425.275-.7l.725-.725Q6.3 16.8 6.7 16.8t.7.3q.275.275.275.7 0 .425-.275.7l-.725.725Q6.4 19.5 6 19.5t-.7-.3ZM12 17q-2.075 0-3.537-1.463Q7 14.075 7 12q0-1.2.538-2.238Q8.075 8.725 9 8V5q0-.825.588-1.413Q10.175 3 11 3h2q.825 0 1.413.587Q15 4.175 15 5v3q.925.725 1.462 1.762Q17 10.8 17 12q0 2.075-1.462 3.537Q14.075 17 12 17Zm-1-9.9q.25-.05.5-.075Q11.75 7 12 7t.5.025q.25.025.5.075V5h-2Z"/>
    </Icon>
  );
});

IconMaterialWbIncandescentFilled.displayName = 'AmauiIconMaterialWbIncandescentFilled';

export default IconMaterialWbIncandescentFilled;
