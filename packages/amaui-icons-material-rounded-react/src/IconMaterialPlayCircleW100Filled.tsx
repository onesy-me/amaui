import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayCircleW100Filled'

      short_name='PlayCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 10.075v3.85q0 .45.388.662.387.213.762-.037l3.025-1.925q.35-.225.35-.625t-.35-.625L11.3 9.45q-.375-.25-.762-.038-.388.213-.388.663ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPlayCircleW100Filled.displayName = 'AmauiIconMaterialPlayCircleW100Filled';

export default IconMaterialPlayCircleW100Filled;
