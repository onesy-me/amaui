import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNote2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h9v-4q0-.425.288-.713Q14.575 14 15 14h4V5H5v14Zm0 2q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v10l-6 6Zm3-7q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12h3q.425 0 .713.287.287.288.287.713t-.287.712Q11.425 14 11 14Zm0-4q-.425 0-.713-.288Q7 9.425 7 9t.287-.713Q7.575 8 8 8h8q.425 0 .712.287Q17 8.575 17 9t-.288.712Q16.425 10 16 10Zm-3 9V5v14Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2.displayName = 'AmauiIconMaterialStickyNote2';

export default IconMaterialStickyNote2;
