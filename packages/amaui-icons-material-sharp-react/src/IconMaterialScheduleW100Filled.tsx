import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScheduleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleW100Filled'

      short_name='Schedule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm3.75-4.45.5-.5-3.9-3.9V7h-.7v5.15Z"/>
    </Icon>
  );
});

IconMaterialScheduleW100Filled.displayName = 'AmauiIconMaterialScheduleW100Filled';

export default IconMaterialScheduleW100Filled;
