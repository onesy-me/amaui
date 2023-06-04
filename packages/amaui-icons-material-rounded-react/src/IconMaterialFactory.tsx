import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Factory'

      short_name='Factory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20v-8.675q0-.6.325-1.1.325-.5.875-.75L7.6 7.6q.5-.2.95.087.45.288.45.838V9l3.625-1.45q.5-.2.937.1.438.3.438.825V10h8v10q0 .825-.587 1.413Q20.825 22 20 22Zm16-10h-8V9.95l-5 2V10l-3 1.325V20h16Zm-8 6q.425 0 .713-.288Q13 17.425 13 17v-2q0-.425-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15v2q0 .425.288.712.287.288.712.288Zm-4 0q.425 0 .713-.288Q9 17.425 9 17v-2q0-.425-.287-.713Q8.425 14 8 14t-.713.287Q7 14.575 7 15v2q0 .425.287.712Q7.575 18 8 18Zm8 0q.425 0 .712-.288Q17 17.425 17 17v-2q0-.425-.288-.713Q16.425 14 16 14t-.712.287Q15 14.575 15 15v2q0 .425.288.712.287.288.712.288Zm6-8h-5l.9-7.125q.05-.375.325-.625t.65-.25h1.25q.375 0 .65.25t.325.625Zm-2 10H4h16Z"/>
    </Icon>
  );
});

IconMaterialFactory.displayName = 'AmauiIconMaterialFactory';

export default IconMaterialFactory;
