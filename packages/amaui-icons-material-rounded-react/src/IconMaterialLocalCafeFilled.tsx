import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalCafeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeFilled'

      short_name='LocalCafe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20t.287-.712Q4.575 19 5 19h14q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 21 19 21Zm3-4q-1.65 0-2.825-1.175Q4 14.65 4 13V5q0-.825.588-1.413Q5.175 3 6 3h14q.825 0 1.413.587Q22 4.175 22 5v3q0 .825-.587 1.412Q20.825 10 20 10h-2v3q0 1.65-1.175 2.825Q15.65 17 14 17Zm10-9h2V5h-2Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeFilled.displayName = 'AmauiIconMaterialLocalCafeFilled';

export default IconMaterialLocalCafeFilled;
