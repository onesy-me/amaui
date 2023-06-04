import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantNavigationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantNavigationW100Filled'

      short_name='AssistantNavigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.475 15.6 2.35-1.075q.075-.05.175-.05.1 0 .175.05l2.35 1.075q.25.125.45-.063.2-.187.075-.437l-2.675-6.5q-.1-.25-.375-.25t-.375.25L8.95 15.1q-.125.25.075.437.2.188.45.063ZM12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3Z"/>
    </Icon>
  );
});

IconMaterialAssistantNavigationW100Filled.displayName = 'AmauiIconMaterialAssistantNavigationW100Filled';

export default IconMaterialAssistantNavigationW100Filled;
