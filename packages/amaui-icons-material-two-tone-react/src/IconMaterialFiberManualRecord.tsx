import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberManualRecord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberManualRecord'

      short_name='FiberManualRecord'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" opacity=".3"/><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-14c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/>
    </Icon>
  );
});

IconMaterialFiberManualRecord.displayName = 'AmauiIconMaterialFiberManualRecord';

export default IconMaterialFiberManualRecord;
