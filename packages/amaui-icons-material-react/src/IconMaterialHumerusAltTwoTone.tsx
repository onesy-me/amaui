import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumerusAltTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusAltTwoTone'
      short_name='HumerusAlt'

      {...props}
    >
      <path d="M10 16q.425 0 .713-.288Q11 15.425 11 15v-.1q0-.05-.025-.1.425 0 .725-.288.3-.287.3-.712t-.287-.713Q11.425 12.8 11 12.8q-.2 0-.387.087-.188.088-.313.213l-2.575-2.9q.125-.125.2-.313Q8 9.7 8 9.5q0-.425-.287-.713Q7.425 8.5 7 8.5t-.713.287Q6 9.075 6 9.5v.1q0 .05.025.1-.425 0-.725.287-.3.288-.3.713t.287.712q.288.288.713.288.225 0 .413-.088.187-.087.312-.237l2.575 2.9q-.15.125-.225.325Q9 14.8 9 15q0 .425.288.712Q9.575 16 10 16Zm-8-3.225 1.1-1.75L11 18.45q.3.275.663.413.362.137.712.137.3 0 .575-.087.275-.088.5-.213L22 13.3v2.35l-7.5 4.725q-.475.3-1.012.462Q12.95 21 12.35 21q-.75 0-1.45-.288-.7-.287-1.275-.812ZM6.425 5.7 7.5 4q1.875.925 3.475 2.537 1.6 1.613 2.4 3.363.9-.95 1.988-1.513Q16.45 7.825 18.4 7.3q1.15-.325 1.988-.625.837-.3 1.612-.675v2.2q-.675.275-1.412.525-.738.25-1.663.5-2.1.55-3.138 1.225-1.037.675-1.937 2.1-.125.2-.35.325-.225.125-.5.125-.35 0-.625-.225t-.35-.55q-.45-1.9-2.012-3.725Q8.45 6.675 6.425 5.7ZM3.1 11.025q1.8 1.675 3.95 3.712Q9.2 16.775 11 18.45q.3.275.663.413.362.137.712.137.3 0 .575-.087.275-.088.5-.213 1.575-.975 4.125-2.587Q20.125 14.5 22 13.3l-8.55 5.4q-.225.125-.5.213-.275.087-.575.087-.35 0-.712-.137-.363-.138-.663-.413Z"/>
    </Icon>
  );
});

export default IconMaterialHumerusAltTwoTone;
