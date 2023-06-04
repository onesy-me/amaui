import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOff'

      short_name='SearchOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22q-2.075 0-3.537-1.462Q2 19.075 2 17q0-2.075 1.463-3.538Q4.925 12 7 12t3.538 1.462Q12 14.925 12 17q0 2.075-1.462 3.538Q9.075 22 7 22Zm-2.125-2.875q.15.15.35.15.2 0 .35-.15L7 17.7l1.4 1.425q.15.15.35.15.2 0 .35-.15.15-.15.15-.362 0-.213-.15-.363L7.7 17l1.425-1.425q.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15L7 16.3l-1.425-1.425q-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35L6.3 17l-1.425 1.425q-.15.15-.15.35 0 .2.15.35ZM19.9 20.3l-5.7-5.7q-.3-.325-.638-.662-.337-.338-.662-.638.95-.6 1.525-1.6T15 9.5q0-1.875-1.312-3.188Q12.375 5 10.5 5 8.625 5 7.312 6.312 6 7.625 6 9.5q0 .15.013.287.012.138.037.288-.45.05-.988.2-.537.15-.962.35-.05-.275-.075-.55Q4 9.8 4 9.5q0-2.725 1.888-4.613Q7.775 3 10.5 3t4.613 1.887Q17 6.775 17 9.5q0 1.075-.337 2.037-.338.963-.938 1.763l5.575 5.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialSearchOff.displayName = 'AmauiIconMaterialSearchOff';

export default IconMaterialSearchOff;
