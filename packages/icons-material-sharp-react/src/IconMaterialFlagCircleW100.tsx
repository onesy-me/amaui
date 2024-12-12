import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlagCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagCircleW100'

      short_name='FlagCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336-256h28v-200h126l40 80h174v-208H590l-40-80H336v408Zm211-148-40-80H364v-152h169l40 80h103v152H547Zm-66.83 272q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialFlagCircleW100.displayName = 'OnesyIconMaterialFlagCircleW100';

export default IconMaterialFlagCircleW100;
