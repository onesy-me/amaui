import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupFilled'

      short_name='Group'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20q-.425 0-.712-.288Q1 19.425 1 19v-1.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q7.35 13 9 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q17 16.35 17 17.2V19q0 .425-.288.712Q16.425 20 16 20Zm16.525 0q.225-.175.35-.438.125-.262.125-.587V17q0-1.1-.612-2.113-.613-1.012-1.738-1.737 1.275.15 2.4.512 1.125.363 2.1.888.9.5 1.375 1.112Q23 16.275 23 17v2q0 .425-.288.712Q22.425 20 22 20ZM9 12q-1.65 0-2.825-1.175Q5 9.65 5 8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 1.65-1.175 2.825Q10.65 12 9 12Zm10-4q0 1.65-1.175 2.825Q16.65 12 15 12q-.275 0-.7-.062-.425-.063-.7-.138.675-.8 1.037-1.775Q15 9.05 15 8q0-1.05-.363-2.025Q14.275 5 13.6 4.2q.35-.125.7-.163Q14.65 4 15 4q1.65 0 2.825 1.175Q19 6.35 19 8Z"/>
    </Icon>
  );
});

IconMaterialGroupFilled.displayName = 'AmauiIconMaterialGroupFilled';

export default IconMaterialGroupFilled;
