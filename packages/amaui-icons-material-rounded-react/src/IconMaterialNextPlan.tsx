import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNextPlan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlan'

      short_name='NextPlan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 10.5q.9 0 1.675.412.775.413 1.275 1.088H14q-.425 0-.712.287Q13 12.575 13 13t.288.712Q13.575 14 14 14h3q.425 0 .712-.288Q18 13.425 18 13v-3q0-.425-.288-.713Q17.425 9 17 9t-.712.287Q16 9.575 16 10v.55q-.8-.95-1.912-1.5-1.113-.55-2.438-.55-2.075 0-3.588 1.238-1.512 1.237-1.937 3.112-.1.45.175.8.275.35.7.35.375 0 .688-.225Q8 13.55 8.1 13.2q.275-1.175 1.263-1.938.987-.762 2.287-.762ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialNextPlan.displayName = 'AmauiIconMaterialNextPlan';

export default IconMaterialNextPlan;
