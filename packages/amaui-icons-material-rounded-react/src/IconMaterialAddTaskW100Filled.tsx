import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddTaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskW100Filled'

      short_name='AddTask'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3q1.375 0 2.637.4Q15.9 4.1 17 4.875q.125.1.15.237.025.138-.1.263-.1.125-.262.125-.163 0-.288-.1-.975-.7-2.113-1.05Q13.25 4 12 4 8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20q.95 0 1.85-.225.9-.225 1.75-.65.075-.05.163-.038.087.013.162.063.2.125.188.337-.013.213-.213.313-.925.45-1.9.675-.975.225-2 .225Zm-1.975-5.525-2.6-2.6q-.1-.1-.087-.238.012-.137.112-.237.125-.125.25-.125t.25.125l2.6 2.6 9.425-9.425q.1-.1.238-.087.137.012.237.112.125.125.125.25t-.125.25l-9.375 9.375q-.225.225-.525.225-.3 0-.525-.225ZM20 19.35q-.15 0-.25-.1t-.1-.25v-2.65H17q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V13q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65H23q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddTaskW100Filled.displayName = 'AmauiIconMaterialAddTaskW100Filled';

export default IconMaterialAddTaskW100Filled;
