import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewspaperW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewspaperW100Filled'

      short_name='Newspaper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 20.35q-.625 0-1.062-.437-.438-.438-.438-1.063V5.275q0-.275.15-.337.15-.063.35.137l.525.525L4.8 4.45q.125-.125.25-.175.125-.05.275-.05.15 0 .288.05.137.05.262.175L7 5.6l1.125-1.15q.125-.125.262-.175.138-.05.288-.05.15 0 .275.05.125.05.25.175l1.125 1.15 1.15-1.15q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l1.15 1.15L14.8 4.45q.125-.125.25-.175.125-.05.275-.05.15 0 .288.05.137.05.262.175L17 5.6l1.125-1.15q.125-.125.263-.175.137-.05.287-.05.15 0 .275.05.125.05.25.175l1.125 1.15.525-.525q.2-.2.35-.137.15.062.15.337V18.85q0 .625-.437 1.063-.438.437-1.063.437Zm0-.7h7.5v-7.3h-8.3v6.5q0 .35.225.575.225.225.575.225Zm8.2 0h7.5q.35 0 .575-.225.225-.225.225-.575v-2.5h-8.3Zm0-4h8.3v-3.3h-8.3Zm-9-4h17.3V7.1H3.35Z"/>
    </Icon>
  );
});

IconMaterialNewspaperW100Filled.displayName = 'AmauiIconMaterialNewspaperW100Filled';

export default IconMaterialNewspaperW100Filled;
