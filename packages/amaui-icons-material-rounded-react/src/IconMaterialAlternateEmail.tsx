import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlternateEmail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlternateEmail'

      short_name='AlternateEmail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12v1.45q0 1.475-1.012 2.512Q19.975 17 18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.587 1.063Q13.05 17 12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12v1.45q0 .725.45 1.137.45.413 1.05.413.6 0 1.05-.413.45-.412.45-1.137V12q0-3.275-2.363-5.638Q15.275 4 12 4 8.725 4 6.362 6.362 4 8.725 4 12t2.362 5.637Q8.725 20 12 20h4q.425 0 .712.288.288.287.288.712t-.288.712Q16.425 22 16 22Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"/>
    </Icon>
  );
});

IconMaterialAlternateEmail.displayName = 'AmauiIconMaterialAlternateEmail';

export default IconMaterialAlternateEmail;
