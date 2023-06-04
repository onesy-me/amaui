import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCalendarMonthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarMonthW100Filled'

      short_name='CalendarMonth'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.2q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488Q7.725 12.8 8 12.8t.488.212q.212.213.212.488t-.212.487Q8.275 14.2 8 14.2Zm8 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213ZM12 18q-.275 0-.487-.212-.213-.213-.213-.488t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.488Q12.275 18 12 18Zm-4 0q-.275 0-.487-.212-.213-.213-.213-.488t.213-.488Q7.725 16.6 8 16.6t.488.212q.212.213.212.488t-.212.488Q8.275 18 8 18Zm8 0q-.275 0-.487-.212-.213-.213-.213-.488t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.488Q16.275 18 16 18ZM5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.4q0-.175.113-.288Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 19.55 19 19.2v-8.4H5v8.4q0 .35.225.575Q5.45 20 5.8 20Z"/>
    </Icon>
  );
});

IconMaterialCalendarMonthW100Filled.displayName = 'AmauiIconMaterialCalendarMonthW100Filled';

export default IconMaterialCalendarMonthW100Filled;
