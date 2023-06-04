import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YardFilled'

      short_name='Yard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q2.125 0 3.725-1.288 1.6-1.287 2.1-3.237.15-.6-.275-1.025-.425-.425-1.025-.275-1.95.5-3.237 2.1Q12 16.875 12 19Zm0 0q0-2.125-1.287-3.725-1.288-1.6-3.238-2.1-.6-.15-1.025.275-.425.425-.275 1.025.5 1.95 2.1 3.237Q9.875 19 12 19Zm0-5.05q.65 0 1.1-.45.45-.45.45-1.1v-.15q.2.15.413.225.212.075.487.075.65 0 1.1-.45.45-.45.45-1.1 0-.5-.238-.875-.237-.375-.662-.525.425-.15.662-.525Q16 8.7 16 8.2q0-.65-.45-1.1-.45-.45-1.1-.45-.275 0-.487.075-.213.075-.413.225V6.8q0-.65-.45-1.1-.45-.45-1.1-.45-.65 0-1.1.45-.45.45-.45 1.1v.15q-.2-.15-.412-.225-.213-.075-.488-.075-.65 0-1.1.45Q8 7.55 8 8.2q0 .5.238.875.237.375.662.525-.425.15-.662.525Q8 10.5 8 11q0 .65.45 1.1.45.45 1.1.45.275 0 .488-.075.212-.075.412-.225v.15q0 .65.45 1.1.45.45 1.1.45Zm0-2.8q-.65 0-1.1-.438-.45-.437-.45-1.112 0-.65.45-1.1.45-.45 1.1-.45.65 0 1.1.45.45.45.45 1.1 0 .675-.45 1.112-.45.438-1.1.438ZM4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v16q0 .825-.587 1.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialYardFilled.displayName = 'AmauiIconMaterialYardFilled';

export default IconMaterialYardFilled;
