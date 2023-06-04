import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Yard'

      short_name='Yard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q2.5 0 4.25-1.75T18 13q-2.5 0-4.25 1.75T12 19Zm0 0q0-2.5-1.75-4.25T6 13q0 2.5 1.75 4.25T12 19Zm0-5.05q.65 0 1.1-.45.45-.45.45-1.1v-.15q.2.15.413.225.212.075.487.075.65 0 1.1-.45.45-.45.45-1.1 0-.5-.238-.875-.237-.375-.662-.525.425-.15.662-.525Q16 8.7 16 8.2q0-.65-.45-1.1-.45-.45-1.1-.45-.275 0-.487.075-.213.075-.413.225V6.8q0-.65-.45-1.1-.45-.45-1.1-.45-.65 0-1.1.45-.45.45-.45 1.1v.15q-.2-.15-.412-.225-.213-.075-.488-.075-.65 0-1.1.45Q8 7.55 8 8.2q0 .5.238.875.237.375.662.525-.425.15-.662.525Q8 10.5 8 11q0 .65.45 1.1.45.45 1.1.45.275 0 .488-.075.212-.075.412-.225v.15q0 .65.45 1.1.45.45 1.1.45Zm0-2.8q-.65 0-1.1-.438-.45-.437-.45-1.112 0-.65.45-1.1.45-.45 1.1-.45.65 0 1.1.45.45.45.45 1.1 0 .675-.45 1.112-.45.438-1.1.438ZM2 22V2h20v20Zm2-2h16V4H4Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialYard.displayName = 'AmauiIconMaterialYard';

export default IconMaterialYard;
