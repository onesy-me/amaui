import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCellTowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellTowerFilled'

      short_name='CellTower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.9 17.1q-1.425-1.5-2.163-3.325Q2 11.95 2 10t.737-3.775Q3.475 4.4 4.9 2.9l1.2 1.2Q4.9 5.3 4.3 6.862 3.7 8.425 3.7 10t.6 3.137Q4.9 14.7 6.1 15.9Zm2.4-2.4q-.975-.975-1.488-2.2Q5.3 11.275 5.3 10t.512-2.5Q6.325 6.275 7.3 5.3l1.2 1.2q-.75.675-1.125 1.6T7 10q0 .9.375 1.825.375.925 1.125 1.675ZM7 22l3.375-10.125q-.4-.35-.637-.825Q9.5 10.575 9.5 10q0-1.05.725-1.775Q10.95 7.5 12 7.5q1.05 0 1.775.725.725.725.725 1.775 0 .575-.238 1.05-.237.475-.637.825L17 22h-2l-.65-2H9.675L9 22Zm3.325-4h3.35L12 13Zm6.375-3.3-1.2-1.2q.75-.675 1.125-1.6T17 10q0-.9-.375-1.825Q16.25 7.25 15.5 6.5l1.2-1.2q.975.975 1.45 2.2t.55 2.5q0 1.275-.512 2.5-.513 1.225-1.488 2.2Zm2.4 2.4-1.2-1.2q1.2-1.2 1.8-2.763.6-1.562.6-3.137t-.6-3.138Q19.1 5.3 17.9 4.1l1.2-1.2q1.425 1.5 2.163 3.325Q22 8.05 22 10t-.7 3.775q-.7 1.825-2.2 3.325Z"/>
    </Icon>
  );
});

IconMaterialCellTowerFilled.displayName = 'AmauiIconMaterialCellTowerFilled';

export default IconMaterialCellTowerFilled;
