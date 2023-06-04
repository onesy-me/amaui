import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9Plus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9Plus'

      short_name='Filter9Plus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.975 14H12q.825 0 1.413-.588Q14 12.825 14 12V8q0-.825-.587-1.412Q12.825 6 12 6h-1q-.825 0-1.412.588Q9 7.175 9 8v1q0 .825.588 1.412Q10.175 11 11 11h1v1h-1.025q-.425 0-.7.287Q10 12.575 10 13t.288.712q.287.288.687.288ZM12 9h-1V8h1Zm4.15 2v.875q0 .425.288.7.287.275.712.275t.713-.288q.287-.287.287-.687V11h.875q.425 0 .7-.288Q20 10.425 20 10t-.288-.713Q19.425 9 19.025 9h-.875v-.875q0-.425-.287-.7-.288-.275-.713-.275t-.712.287q-.288.288-.288.688V9h-.875q-.425 0-.7.287-.275.288-.275.713t.288.712q.287.288.687.288ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialFilter9Plus.displayName = 'AmauiIconMaterialFilter9Plus';

export default IconMaterialFilter9Plus;
