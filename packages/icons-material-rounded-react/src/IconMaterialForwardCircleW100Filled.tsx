import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForwardCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardCircleW100Filled'

      short_name='ForwardCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-276q81 0 140-55t64-136q0-5-4.2-9t-9.8-4q-6 0-10.07 3.92T655-466q-5 68-55.74 115-50.73 47-119.26 47-72.91 0-124.46-51.56Q304-407.12 304-480.06t51.54-124.44Q407.09-656 480-656h6l-37 37q-4.44 4.09-4.72 9.55Q444-604 449-599q5 5 10 5t10-5l60-60q5-4.64 5-10.82 0-6.18-5-11.18l-61-61q-4-4-9.5-4.5T448-742q-5 5-5 10t5 10l38 38q-87 0-148.5 59T276-480q0 84.66 59.67 144.33Q395.34-276 480-276Zm.17 144q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialForwardCircleW100Filled.displayName = 'OnesyIconMaterialForwardCircleW100Filled';

export default IconMaterialForwardCircleW100Filled;
