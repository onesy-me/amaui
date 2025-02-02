import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchButtonPressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchButtonPressW100Filled'

      short_name='WatchButtonPress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728.96-481q-5.96 0-9.96-4.02-4-4.03-4-9.98v-277q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v277q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM351-174q-19.97 0-36.49-12Q298-198 293-218l-18-64q-51-27-83.5-80T159-480q0-65 32.5-118t83.5-80l18-64q5-20 21.51-32 16.52-12 36.49-12h72q19.97 0 36.49 12Q476-762 481-742l18 64q51 27 83.5 80T615-480q0 65-32.5 118T499-282l-18 64q-5 20-21.51 32-16.52 12-36.49 12h-72Zm36-106q83 0 141.5-58.5T587-480q0-83-58.5-141.5T387-680q-83 0-141.5 58.5T187-480q0 83 58.5 141.5T387-280Z"/>
    </Icon>
  );
});

IconMaterialWatchButtonPressW100Filled.displayName = 'OnesyIconMaterialWatchButtonPressW100Filled';

export default IconMaterialWatchButtonPressW100Filled;
