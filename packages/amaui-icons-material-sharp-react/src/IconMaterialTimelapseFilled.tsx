import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimelapseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimelapseFilled'

      short_name='Timelapse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6v6l-4.25 4.25q.875.825 1.963 1.288Q10.8 18 12 18Zm0 4q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTimelapseFilled.displayName = 'AmauiIconMaterialTimelapseFilled';

export default IconMaterialTimelapseFilled;
