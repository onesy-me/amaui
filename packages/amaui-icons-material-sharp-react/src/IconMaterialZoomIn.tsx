import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZoomIn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomIn'

      short_name='ZoomIn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Zm-1-1.5v-2h-2v-2h2v-2h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialZoomIn.displayName = 'AmauiIconMaterialZoomIn';

export default IconMaterialZoomIn;
