import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreTime = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreTime'

      short_name='MoreTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21q-1.875 0-3.512-.7-1.638-.7-2.863-1.925T2.7 15.512Q2 13.875 2 12q0-3.775 2.613-6.388Q7.225 3 11 3q.325 0 .625.025t.6.075q.325.05.55.337.225.288.225.638 0 .5-.337.762-.338.263-.863.213-.2-.025-.4-.038Q11.2 5 11 5 8.05 5 6.025 7.025 4 9.05 4 12q0 2.95 2.025 4.975Q8.05 19 11 19q2.925 0 4.938-2Q17.95 15 18 12.075h.013H18q0-.425.288-.75Q18.575 11 19 11q.4 0 .7.287.3.288.3.663V12q0 3.775-2.613 6.387Q14.775 21 11 21Zm8-12q-.425 0-.712-.288Q18 8.425 18 8V6h-2q-.425 0-.712-.287Q15 5.425 15 5t.288-.713Q15.575 4 16 4h2V2q0-.425.288-.713Q18.575 1 19 1t.712.287Q20 1.575 20 2v2h2q.425 0 .712.287Q23 4.575 23 5t-.288.713Q22.425 6 22 6h-2v2q0 .425-.288.712Q19.425 9 19 9Zm-5.9 6.5-2.8-2.8q-.15-.15-.225-.338-.075-.187-.075-.387V8q0-.425.288-.713Q10.575 7 11 7t.713.287Q12 7.575 12 8v3.6l2.5 2.5q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialMoreTime.displayName = 'AmauiIconMaterialMoreTime';

export default IconMaterialMoreTime;
