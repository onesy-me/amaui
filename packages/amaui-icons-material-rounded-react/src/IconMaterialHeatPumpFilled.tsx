import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPumpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpFilled'

      short_name='HeatPump'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 16.95V13.8l-2.225 2.225q.5.35 1.063.575.562.225 1.162.35Zm1.5-.025q.6-.1 1.163-.325.562-.225 1.062-.575L12.75 13.8Zm3.275-1.95q.35-.5.562-1.063.213-.562.338-1.162H13.8ZM13.8 11.25h3.125q-.125-.575-.338-1.138-.212-.562-.562-1.062Zm-1.05-1.05 2.225-2.225q-.5-.35-1.062-.575-.563-.225-1.163-.35ZM12 13q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm-.75-2.8V7.075q-.6.1-1.162.325-.563.225-1.063.575Zm-4.175 1.05H10.2l-2.225-2.2q-.35.5-.575 1.05-.225.55-.325 1.15Zm.9 3.725L10.2 12.75H7.05q.125.6.35 1.162.225.563.575 1.063ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpFilled.displayName = 'AmauiIconMaterialHeatPumpFilled';

export default IconMaterialHeatPumpFilled;
