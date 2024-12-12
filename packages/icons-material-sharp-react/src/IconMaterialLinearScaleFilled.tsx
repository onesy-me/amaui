import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinearScaleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinearScaleFilled'

      short_name='LinearScale'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-280q-72 0-127-45.5T484-440H272q-12 27-37 43.5T180-380q-42 0-71-29t-29-71q0-42 29-71t71-29q30 0 55 16.5t37 43.5h212q14-69 69-114.5T680-680q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialLinearScaleFilled.displayName = 'OnesyIconMaterialLinearScaleFilled';

export default IconMaterialLinearScaleFilled;
