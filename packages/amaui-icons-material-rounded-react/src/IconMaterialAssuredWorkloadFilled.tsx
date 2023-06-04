import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssuredWorkloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssuredWorkloadFilled'

      short_name='AssuredWorkload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17q-.425 0-.713-.288Q5 16.425 5 16v-5q0-.425.287-.713Q5.575 10 6 10t.713.287Q7 10.575 7 11v5q0 .425-.287.712Q6.425 17 6 17Zm6 0q-.425 0-.712-.288Q11 16.425 11 16v-5q0-.425.288-.713Q11.575 10 12 10t.713.287Q13 10.575 13 11v5q0 .425-.287.712Q12.425 17 12 17ZM3.2 8q-.5 0-.85-.35T2 6.8q0-.375.175-.675.175-.3.525-.475l8.4-4.2q.2-.125.438-.175.237-.05.462-.05.225 0 .463.05.237.05.437.175l8.4 4.2q.35.175.525.475.175.3.175.675 0 .5-.35.85T20.8 8ZM3 21q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h11.05q.05.525.125 1.012.075.488.225.988Zm14-7.75V11q0-.425.288-.713Q17.575 10 18 10t.712.287Q19 10.575 19 11v1.25ZM20 24q-1.725-.425-2.862-1.988Q16 20.45 16 18.55v-1.925q0-.275.138-.525.137-.25.412-.375l3-1.5q.2-.125.45-.125t.45.125l3 1.5q.275.125.413.375.137.25.137.525v1.925q0 1.9-1.137 3.462Q21.725 23.575 20 24Zm2.225-5.925q.225-.225.225-.525 0-.3-.225-.525-.225-.225-.525-.213-.3.013-.525.213l-1.9 1.85-.45-.45q-.225-.225-.525-.213-.3.013-.525.238-.225.225-.225.525 0 .3.225.525l.8.8q.15.15.325.225.175.075.375.075t.375-.075q.175-.075.325-.225Z"/>
    </Icon>
  );
});

IconMaterialAssuredWorkloadFilled.displayName = 'AmauiIconMaterialAssuredWorkloadFilled';

export default IconMaterialAssuredWorkloadFilled;
