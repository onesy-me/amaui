import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter7Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7Filled'

      short_name='Filter7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 7-3.325 6.65q-.225.475 0 .912.225.438.725.438.25 0 .463-.125.212-.125.337-.35l3.625-7.175q.075-.15.125-.363.05-.212.05-.387 0-.65-.413-1.125Q16.175 5 15.525 5h-3.55q-.425 0-.7.287Q11 5.575 11 6t.288.713Q11.575 7 12 7ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialFilter7Filled.displayName = 'AmauiIconMaterialFilter7Filled';

export default IconMaterialFilter7Filled;
