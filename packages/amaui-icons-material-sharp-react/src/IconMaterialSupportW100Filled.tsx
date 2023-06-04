import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportW100Filled'

      short_name='Support'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-2.9-1.25 1.9-4.3q-.75-.25-1.3-.8t-.8-1.3l-4.4 1.8q.6 1.6 1.8 2.8 1.2 1.2 2.8 1.8Zm-.2-8.5q.2-.75.763-1.262.562-.513 1.287-.788l-1.8-4.4q-1.625.625-2.825 1.825-1.2 1.2-1.825 2.825ZM12 14.6q1.075 0 1.838-.763.762-.762.762-1.837t-.762-1.838Q13.075 9.4 12 9.4q-1.075 0-1.837.762Q9.4 10.925 9.4 12q0 1.075.763 1.837.762.763 1.837.763Zm2.9 4.85q1.575-.6 2.763-1.787 1.187-1.188 1.787-2.763l-4.3-1.9q-.225.725-.775 1.275-.55.55-1.275.825Zm.2-8.55 4.35-1.8q-.6-1.575-1.787-2.763Q16.475 5.15 14.9 4.55L13.1 8.9q.675.3 1.2.8.525.5.8 1.2Z"/>
    </Icon>
  );
});

IconMaterialSupportW100Filled.displayName = 'AmauiIconMaterialSupportW100Filled';

export default IconMaterialSupportW100Filled;
