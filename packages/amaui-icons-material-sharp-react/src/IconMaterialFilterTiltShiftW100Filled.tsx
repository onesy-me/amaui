import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterTiltShiftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterTiltShiftW100Filled'

      short_name='FilterTiltShift'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.1 17.45q-.675-1-1.113-2.125Q3.55 14.2 3.35 13h.7q.15 1.075.55 2.062.4.988 1.05 1.838ZM3.35 11q.15-1.2.612-2.325Q4.425 7.55 5.15 6.6l.5.5Q5 7.95 4.6 8.938q-.4.987-.55 2.062Zm7.6 9.65q-1.2-.175-2.313-.637-1.112-.463-2.087-1.163l.5-.55q.875.65 1.85 1.075.975.425 2.05.575Zm-3.85-15-.55-.5q1-.725 2.125-1.163Q9.8 3.55 11 3.35v.7q-1.075.15-2.062.537Q7.95 4.975 7.1 5.65ZM12 13.7q-.725 0-1.212-.488Q10.3 12.725 10.3 12t.488-1.213Q11.275 10.3 12 10.3t1.213.487q.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488Zm.95 6.95v-.7q1.075-.15 2.088-.537 1.012-.388 1.862-1.063l.55.5q-1 .725-2.138 1.162-1.137.438-2.362.638Zm4-14.95q-.875-.65-1.875-1.075-1-.425-2.075-.575v-.7q1.2.175 2.325.625 1.125.45 2.125 1.175Zm1.9 11.7-.5-.5q.65-.85 1.05-1.838.4-.987.55-2.062h.7q-.15 1.2-.612 2.325-.463 1.125-1.188 2.075Zm1.1-6.4q-.15-1.075-.55-2.062Q19 7.95 18.35 7.1l.55-.55q.675 1 1.113 2.125Q20.45 9.8 20.65 11Z"/>
    </Icon>
  );
});

IconMaterialFilterTiltShiftW100Filled.displayName = 'AmauiIconMaterialFilterTiltShiftW100Filled';

export default IconMaterialFilterTiltShiftW100Filled;
