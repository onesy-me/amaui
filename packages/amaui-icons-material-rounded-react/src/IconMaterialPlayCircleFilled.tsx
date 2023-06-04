import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayCircleFilled'

      short_name='PlayCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 9.325v5.35q0 .575.525.875.525.3 1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05-.525.3-.525.875ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPlayCircleFilled.displayName = 'AmauiIconMaterialPlayCircleFilled';

export default IconMaterialPlayCircleFilled;
