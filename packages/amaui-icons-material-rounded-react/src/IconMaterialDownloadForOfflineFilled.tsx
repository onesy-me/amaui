import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownloadForOfflineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadForOfflineFilled'

      short_name='DownloadForOffline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 10.15-.9-.875Q9.8 9 9.387 9.012q-.412.013-.687.288-.275.275-.275.7 0 .425.275.7l2.6 2.6q.275.275.7.275.425 0 .7-.275l2.625-2.625q.275-.275.263-.688-.013-.412-.288-.687-.275-.275-.7-.288-.425-.012-.7.288l-.9.85V6.975q0-.425-.287-.7Q12.425 6 12 6t-.712.287Q11 6.575 11 7ZM8 17h8.025q.425 0 .7-.288Q17 16.425 17 16t-.288-.713Q16.425 15 16 15H7.975q-.425 0-.7.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm4 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialDownloadForOfflineFilled.displayName = 'AmauiIconMaterialDownloadForOfflineFilled';

export default IconMaterialDownloadForOfflineFilled;
