import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiversity1RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diversity1RoundedFilled'
      short_name='Diversity1'

      {...props}
    >
      <path d="M6.6 3q1.575 0 3 .662 1.425.663 2.4 1.838.975-1.175 2.4-1.838Q15.825 3 17.4 3q2.8 0 4.7 1.9Q24 6.8 24 9.6q0 .95-.25 1.875t-.7 1.825q-.275-.475-.65-.85t-.875-.6q.225-.575.35-1.125Q22 10.175 22 9.6q0-1.95-1.325-3.275T17.4 5q-2.025 0-3.112 1.112Q13.2 7.225 12 8.6q-1.2-1.4-2.287-2.5Q8.625 5 6.6 5 4.65 5 3.325 6.325T2 9.6q0 .575.125 1.125t.35 1.125q-.5.225-.875.6t-.65.85q-.45-.9-.7-1.825Q0 10.55 0 9.6q0-2.8 1.9-4.7Q3.8 3 6.6 3ZM1 22q-.425 0-.712-.288Q0 21.425 0 21v-.575q0-1.1 1.1-1.762Q2.2 18 4 18q.325 0 .613.025.287.025.562.075-.35.5-.513 1.075Q4.5 19.75 4.5 20.4V22Zm6 0q-.425 0-.713-.288Q6 21.425 6 21v-.6q0-1.625 1.663-2.638Q9.325 16.75 12 16.75q2.7 0 4.35 1.012Q18 18.775 18 20.4v.6q0 .425-.288.712Q17.425 22 17 22Zm12.5 0v-1.6q0-.65-.175-1.225-.175-.575-.5-1.075.275-.05.563-.075Q19.675 18 20 18q1.8 0 2.9.663 1.1.662 1.1 1.762V21q0 .425-.288.712Q23.425 22 23 22ZM4 17q-.825 0-1.412-.587Q2 15.825 2 15q0-.825.588-1.413Q3.175 13 4 13t1.412.587Q6 14.175 6 15q0 .825-.588 1.413Q4.825 17 4 17Zm16 0q-.825 0-1.413-.587Q18 15.825 18 15q0-.825.587-1.413Q19.175 13 20 13q.825 0 1.413.587Q22 14.175 22 15q0 .825-.587 1.413Q20.825 17 20 17Zm-8-1q-1.25 0-2.125-.875T9 13q0-1.25.875-2.125T12 10q1.25 0 2.125.875T15 13q0 1.25-.875 2.125T12 16Z"/>
    </Icon>
  );
});

IconMaterialDiversity1RoundedFilled.displayName = 'AmauiIconMaterialDiversity1RoundedFilled';

export default IconMaterialDiversity1RoundedFilled;
