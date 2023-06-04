import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneMissedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedW100Filled'

      short_name='PhoneMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.875 19.45-2.3-2.25q-.125-.125-.1-.25.025-.125.1-.25 2.15-2.275 4.925-3.413 2.775-1.137 5.525-1.137 2.75 0 5.525 1.137 2.775 1.138 4.925 3.413.075.125.075.275 0 .15-.075.225l-2.3 2.25q-.075.075-.2.1-.125.025-.25-.05l-2.75-2.075q-.15-.125-.225-.275-.075-.15-.075-.325V13.7q-1.2-.425-2.375-.638-1.175-.212-2.275-.212-1.1 0-2.275.212-1.175.213-2.375.638v3.125q0 .175-.075.325-.075.15-.225.275L4.325 19.5q-.075.075-.225.05-.15-.025-.225-.1Zm8.1-9.75q-.15 0-.275-.05-.125-.05-.25-.175L6.375 4.4v3.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.6q0-.325.213-.538.212-.212.537-.212h3.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.15l5.1 5.1 5.4-5.4q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25L12.5 9.475q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedW100Filled.displayName = 'AmauiIconMaterialPhoneMissedW100Filled';

export default IconMaterialPhoneMissedW100Filled;
