import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlightKeyboardFocusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightKeyboardFocusW100Filled'

      short_name='HighlightKeyboardFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.04-308q5.96 0 9.96-4.02 4-4.03 4-9.98v-336q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v336q0 5.95 4.04 9.98 4.03 4.02 10 4.02Zm.13 176q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialHighlightKeyboardFocusW100Filled.displayName = 'OnesyIconMaterialHighlightKeyboardFocusW100Filled';

export default IconMaterialHighlightKeyboardFocusW100Filled;
