import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOnTotalSilenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOnTotalSilenceFilled'

      short_name='DoNotDisturbOnTotalSilence'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-4q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Zm-2.025-5q-.425 0-.7-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h4.025q.425 0 .7.287.275.288.275.713t-.287.712Q14.425 13 14 13Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOnTotalSilenceFilled.displayName = 'AmauiIconMaterialDoNotDisturbOnTotalSilenceFilled';

export default IconMaterialDoNotDisturbOnTotalSilenceFilled;
