import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareW100Filled'

      short_name='ScreenShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M454-540h80v26q0 5 4.5 7t8.5-2l34-34q5-5 5-11t-5-11l-34-34q-4-4-8.5-2t-4.5 7v26h-80q-39 0-66.5 27.5T360-474v66q0 6 4 10t10 4q6 0 10-4t4-10v-66q0-27 19.5-46.5T454-540ZM94-200q-6 0-10-4t-4-10q0-6 4-10t10-4h772q6 0 10 4t4 10q0 6-4 10t-10 4H94Zm98-68q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h576q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialScreenShareW100Filled.displayName = 'OnesyIconMaterialScreenShareW100Filled';

export default IconMaterialScreenShareW100Filled;
