import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixNormal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixNormal'

      short_name='AutoFixNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.05 4.95-1.075-.5Q17.7 4.325 17.7 4t.275-.45l1.075-.5.5-1.075q.125-.275.45-.275t.45.275l.5 1.075 1.075.5q.275.125.275.45t-.275.45l-1.075.5-.5 1.075q-.125.275-.45.275t-.45-.275ZM5.1 21.7l-2.8-2.8q-.3-.3-.3-.725t.3-.725L13.45 6.3q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725L6.55 21.7q-.3.3-.725.3t-.725-.3Zm.7-2.1 7.2-7.2-1.4-1.4-7.2 7.2Z"/>
    </Icon>
  );
});

IconMaterialAutoFixNormal.displayName = 'AmauiIconMaterialAutoFixNormal';

export default IconMaterialAutoFixNormal;
