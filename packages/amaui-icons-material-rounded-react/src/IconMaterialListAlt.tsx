import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAlt'

      short_name='ListAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm3-2q.425 0 .713-.288Q9 16.425 9 16t-.287-.713Q8.425 15 8 15t-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm0-4q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm0-4q.425 0 .713-.288Q9 8.425 9 8t-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm4 8h4q.425 0 .712-.288Q17 16.425 17 16t-.288-.713Q16.425 15 16 15h-4q-.425 0-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0-4h4q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-4q-.425 0-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm0-4h4q.425 0 .712-.288Q17 8.425 17 8t-.288-.713Q16.425 7 16 7h-4q-.425 0-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialListAlt.displayName = 'AmauiIconMaterialListAlt';

export default IconMaterialListAlt;
