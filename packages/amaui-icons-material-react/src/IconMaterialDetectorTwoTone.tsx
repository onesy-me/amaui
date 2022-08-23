import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorTwoTone'
      short_name='Detector'

      {...props}
    >
      <path d="M12 21q-2.2 0-4.212-.825-2.013-.825-3.563-2.4L5.65 16.35q1.275 1.275 2.925 1.962 1.65.688 3.45.688 1.8 0 3.438-.675 1.637-.675 2.912-1.95l1.4 1.4q-1.575 1.575-3.575 2.4T12 21Zm0-4q-1.4 0-2.675-.525T7.05 14.95l1.4-1.4q.725.725 1.638 1.087Q11 15 12 15q1 0 1.913-.363.912-.362 1.637-1.087l1.4 1.4q-1 1-2.275 1.525Q13.4 17 12 17ZM5 6h14V5H5v1Zm3.4 3h7.2l.3-1H8.1l.3 1Zm0 2q-.65 0-1.175-.387Q6.7 10.225 6.5 9.6L6 8H5q-.825 0-1.413-.588Q3 6.825 3 6V3h18v3q0 .825-.587 1.412Q19.825 8 19 8h-1l-.65 1.7q-.225.575-.725.937-.5.363-1.125.363ZM5 6V5v1Z"/>
    </Icon>
  );
});

IconMaterialDetectorTwoTone.displayName = 'AmauiIconMaterialDetectorTwoTone';

export default IconMaterialDetectorTwoTone;
