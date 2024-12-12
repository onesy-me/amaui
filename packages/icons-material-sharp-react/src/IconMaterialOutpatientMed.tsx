import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutpatientMed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientMed'

      short_name='OutpatientMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m780-340-57-56 44-44H640v-80h126l-43-43 57-57 140 140-140 140ZM80-760v-80h480v80H80Zm180 500h120v-100h100v-120H380v-100H260v100H160v120h100v100ZM40-120v-600h560v600H40Zm280-300ZM120-200h400v-440H120v440Z"/>
    </Icon>
  );
});

IconMaterialOutpatientMed.displayName = 'OnesyIconMaterialOutpatientMed';

export default IconMaterialOutpatientMed;
