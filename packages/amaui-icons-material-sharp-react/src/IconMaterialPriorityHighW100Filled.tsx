import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriorityHighW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighW100Filled'

      short_name='PriorityHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.2q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm-.35-3.15V4.5h.7v10.55Z"/>
    </Icon>
  );
});

IconMaterialPriorityHighW100Filled.displayName = 'AmauiIconMaterialPriorityHighW100Filled';

export default IconMaterialPriorityHighW100Filled;
