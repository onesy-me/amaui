import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatasetLinked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetLinked'

      short_name='DatasetLinked'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g opacity=".3"><path d="M5,5v14h3.09C8.04,18.67,8,18.34,8,18s0.04-0.67,0.09-1H7v-4h3.69c0.95-0.63,2.09-1,3.31-1h5V5H5z M11,11H7V7h4V11z M13,11V7h4v4H13z"/></g><g><path d="M7,17h1.09c0.28-1.67,1.24-3.1,2.6-4H7V17z"/></g><path d="M5,19V5h14v7h1c0.34,0,0.67,0.04,1,0.09V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h3.81 c-0.35-0.61-0.6-1.28-0.72-2H5z"/><g><rect height="4" width="4" x="7" y="7"/></g><g><rect height="4" width="4" x="13" y="7"/></g><path d="M16,20h-2c-1.1,0-2-0.9-2-2s0.9-2,2-2h2v-2h-2c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4h2V20z"/><path d="M20,14h-2v2h2c1.1,0,2,0.9,2,2s-0.9,2-2,2h-2v2h2c2.21,0,4-1.79,4-4C24,15.79,22.21,14,20,14z"/><polygon points="20,19 20,17 17,17 14,17 14,19 19,19"/></g></g>
    </Icon>
  );
});

IconMaterialDatasetLinked.displayName = 'AmauiIconMaterialDatasetLinked';

export default IconMaterialDatasetLinked;
