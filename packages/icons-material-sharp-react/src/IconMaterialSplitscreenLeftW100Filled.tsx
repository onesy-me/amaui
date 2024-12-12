import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreenLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenLeftW100Filled'

      short_name='SplitscreenLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M204-172v-616h216v616H204Zm336 0v-616h216v616H540Zm188-588H568v560h160v-560Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenLeftW100Filled.displayName = 'OnesyIconMaterialSplitscreenLeftW100Filled';

export default IconMaterialSplitscreenLeftW100Filled;
