import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInpatientFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InpatientFilled'

      short_name='Inpatient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h9q.825 0 1.413.587Q15 3.175 15 4v16q0 .825-.587 1.413Q13.825 22 13 22Zm0-11.475q.45-.275.95-.4Q5.45 10 6 10h5q.55 0 1.05.125t.95.4V4H4ZM8.5 9q-.825 0-1.412-.588Q6.5 7.825 6.5 7t.588-1.412Q7.675 5 8.5 5t1.413.588Q10.5 6.175 10.5 7t-.587 1.412Q9.325 9 8.5 9Zm-1 8v1q0 .425.288.712.287.288.712.288t.713-.288Q9.5 18.425 9.5 18v-1h1q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q10.925 15 10.5 15h-1v-1q0-.425-.287-.713Q8.925 13 8.5 13t-.712.287Q7.5 13.575 7.5 14v1h-1q-.425 0-.713.287-.287.288-.287.713t.287.712Q6.075 17 6.5 17Zm12.4-2.2q-.3.3-.712.3-.413 0-.713-.3L16.4 12.7q-.3-.3-.3-.7 0-.4.3-.7l2.075-2.1q.3-.3.713-.3.412 0 .712.3t.3.712q0 .413-.3.713l-.4.375h2.175q.425 0 .713.287.287.288.287.713t-.287.712Q22.1 13 21.675 13H19.5l.4.375q.3.3.3.712 0 .413-.3.713Z"/>
    </Icon>
  );
});

IconMaterialInpatientFilled.displayName = 'AmauiIconMaterialInpatientFilled';

export default IconMaterialInpatientFilled;
