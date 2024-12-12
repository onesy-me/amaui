import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactlessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessW100Filled'

      short_name='Contactless'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M328-408q5-17 7.5-35.5T338-480q0-18-2.5-36.5T328-552l-26 12q3 14 5.5 29.5T310-480q0 15-2.5 30.5T302-420l26 12Zm130 54q10.63-29.91 15.31-61.4 4.69-31.48 4.69-64.54t-4.69-64.59Q468.63-576.05 458-606l-26 10q9 27 13.5 56.5T450-480q0 30-4.5 59.5T432-364l26 10Zm130 54q15-42.36 22.5-87.68Q618-433 618-480q0-47-7.5-92.32Q603-617.64 588-660l-26 12q14 38.71 21 81.11t7 86.65q0 44.24-7 86.81-7 42.56-21 81.43l26 12ZM480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialContactlessW100Filled.displayName = 'OnesyIconMaterialContactlessW100Filled';

export default IconMaterialContactlessW100Filled;
