import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncFilled'

      short_name='Sync'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.375 19.25q-.525.25-.95-.038-.425-.287-.425-.937 0-.25.163-.487.162-.238.412-.363 1.575-.75 2.5-2.225T18 11.95q0-1.125-.425-2.188Q17.15 8.7 16.25 7.8L16 7.55V9q0 .425-.287.712Q15.425 10 15 10t-.712-.288Q14 9.425 14 9V5q0-.425.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6h-1.75l.4.35q1.225 1.225 1.788 2.662Q20 10.45 20 11.95q0 2.4-1.25 4.362-1.25 1.963-3.375 2.938ZM5 20q-.425 0-.713-.288Q4 19.425 4 19t.287-.712Q4.575 18 5 18h1.75l-.4-.35q-1.225-1.225-1.788-2.662Q4 13.55 4 12.05q0-2.4 1.25-4.363Q6.5 5.725 8.625 4.75q.525-.25.95.037.425.288.425.938 0 .25-.162.487-.163.238-.413.363-1.575.75-2.5 2.225T6 12.05q0 1.125.425 2.187Q6.85 15.3 7.75 16.2l.25.25V15q0-.425.288-.713Q8.575 14 9 14t.713.287Q10 14.575 10 15v4q0 .425-.287.712Q9.425 20 9 20Z"/>
    </Icon>
  );
});

IconMaterialSyncFilled.displayName = 'AmauiIconMaterialSyncFilled';

export default IconMaterialSyncFilled;
