import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOnFilled'

      short_name='RepeatOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 23q-.825 0-1.412-.587Q1 21.825 1 21V3q0-.825.588-1.413Q2.175 1 3 1h18q.825 0 1.413.587Q23 2.175 23 3v18q0 .825-.587 1.413Q21.825 23 21 23Zm14-6H6.85l.85-.85q.3-.3.3-.712 0-.413-.3-.713t-.712-.3q-.413 0-.713.3L3.7 17.3q-.275.275-.275.7 0 .425.275.7l2.6 2.6q.275.275.688.275.412 0 .712-.3t.288-.725q-.013-.425-.313-.725L6.85 19H18q.425 0 .712-.288Q19 18.425 19 18v-4.025q0-.425-.288-.7Q18.425 13 18 13t-.712.287Q17 13.575 17 14ZM7 7h10.15l-.85.85q-.3.3-.3.712 0 .413.3.713t.713.3q.412 0 .712-.3L20.3 6.7q.275-.275.275-.7 0-.425-.275-.7l-2.6-2.6q-.275-.275-.687-.275-.413 0-.713.3t-.287.725q.012.425.312.725L17.15 5H6q-.425 0-.713.287Q5 5.575 5 6v4.025q0 .425.287.7Q5.575 11 6 11t.713-.288Q7 10.425 7 10Z"/>
    </Icon>
  );
});

IconMaterialRepeatOnFilled.displayName = 'AmauiIconMaterialRepeatOnFilled';

export default IconMaterialRepeatOnFilled;
