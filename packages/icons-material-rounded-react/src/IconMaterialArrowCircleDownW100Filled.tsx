import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowCircleDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleDownW100Filled'

      short_name='ArrowCircleDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-404-81-81q-4-4-9-4t-9 4q-4 4-4 9.67 0 5.66 4 9.33l93 93q9 9 21 9t21-9l93-93q4-3.67 4-9.33 0-5.67-4-9.67t-9.67-4q-5.66 0-9.33 4l-81 81v-191q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-10.46 4.03-4.5 4.02-4.5 9.97v191Zm14.17 272q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleDownW100Filled.displayName = 'OnesyIconMaterialArrowCircleDownW100Filled';

export default IconMaterialArrowCircleDownW100Filled;
