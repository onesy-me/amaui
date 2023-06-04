import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveRoadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoadFilled'

      short_name='RemoveRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 12V5q0-.425.288-.713Q18.575 4 19 4t.712.287Q20 4.575 20 5v7q0 .425-.288.712Q19.425 13 19 13t-.712-.288Q18 12.425 18 12ZM4 19V5q0-.425.287-.713Q4.575 4 5 4t.713.287Q6 4.575 6 5v14q0 .425-.287.712Q5.425 20 5 20t-.713-.288Q4 19.425 4 19Zm7-12V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v2q0 .425-.287.713Q12.425 8 12 8t-.712-.287Q11 7.425 11 7Zm0 6v-2q0-.425.288-.713Q11.575 10 12 10t.713.287Q13 10.575 13 11v2q0 .425-.287.712Q12.425 14 12 14t-.712-.288Q11 13.425 11 13Zm0 6v-2q0-.425.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17v2q0 .425-.287.712Q12.425 20 12 20t-.712-.288Q11 19.425 11 19Zm7.95.875L17.525 21.3q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.3-.713 0-.412.3-.712l1.4-1.4-1.4-1.425q-.3-.3-.3-.7 0-.4.3-.7.3-.3.712-.3.413 0 .713.3l1.4 1.425 1.425-1.425q.3-.3.712-.3.413 0 .713.3.275.3.275.712 0 .413-.275.688l-1.45 1.45 1.425 1.4q.275.275.275.687 0 .413-.275.713t-.688.3q-.412 0-.712-.275Z"/>
    </Icon>
  );
});

IconMaterialRemoveRoadFilled.displayName = 'AmauiIconMaterialRemoveRoadFilled';

export default IconMaterialRemoveRoadFilled;
