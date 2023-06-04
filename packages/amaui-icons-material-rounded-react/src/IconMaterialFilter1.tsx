import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1'

      short_name='Filter1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 15q.425 0 .713-.288Q16 14.425 16 14V6q0-.425-.287-.713Q15.425 5 15 5h-2.025q-.425 0-.7.287Q12 5.575 12 6t.288.713Q12.575 7 13 7h1v7.025q0 .425.288.7.287.275.712.275Zm-7 3q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialFilter1.displayName = 'AmauiIconMaterialFilter1';

export default IconMaterialFilter1;
