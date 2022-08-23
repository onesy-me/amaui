import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoteGenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoteGenRoundedFilled'
      short_name='RemoteGen'

      {...props}
    >
      <path d="M8 23q-.825 0-1.412-.587Q6 21.825 6 21V3q0-.825.588-1.413Q7.175 1 8 1h8q.825 0 1.413.587Q18 2.175 18 3v18q0 .825-.587 1.413Q16.825 23 16 23Zm4-13q1.275 0 2.137-.863Q15 8.275 15 7t-.863-2.138Q13.275 4 12 4t-2.137.862Q9 5.725 9 7t.863 2.137Q10.725 10 12 10Zm0-2q-.45 0-.725-.275Q11 7.45 11 7q0-.45.275-.725Q11.55 6 12 6q.45 0 .725.275Q13 6.55 13 7q0 .45-.275.725Q12.45 8 12 8Zm-2 6q.425 0 .713-.288Q11 13.425 11 13t-.287-.713Q10.425 12 10 12t-.712.287Q9 12.575 9 13t.288.712Q9.575 14 10 14Zm4 0q.425 0 .713-.288Q15 13.425 15 13t-.287-.713Q14.425 12 14 12t-.712.287Q13 12.575 13 13t.288.712Q13.575 14 14 14Zm-4 3q.425 0 .713-.288Q11 16.425 11 16q0-.4-.287-.7-.288-.3-.713-.3t-.712.287Q9 15.575 9 16t.288.712Q9.575 17 10 17Zm4 0q.425 0 .713-.288Q15 16.425 15 16q0-.375-.287-.688Q14.425 15 14 15t-.712.262Q13 15.525 13 16q0 .425.288.712.287.288.712.288Zm-4 3q.425 0 .713-.288Q11 19.425 11 19t-.287-.712Q10.425 18 10 18t-.712.288Q9 18.575 9 19t.288.712Q9.575 20 10 20Zm4 0q.425 0 .713-.288Q15 19.425 15 19t-.287-.712Q14.425 18 14 18t-.712.288Q13 18.575 13 19t.288.712Q13.575 20 14 20Z"/>
    </Icon>
  );
});

IconMaterialRemoteGenRoundedFilled.displayName = 'AmauiIconMaterialRemoteGenRoundedFilled';

export default IconMaterialRemoteGenRoundedFilled;
