import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialProductivityRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductivityRoundedFilled'
      short_name='Productivity'

      {...props}
    >
      <path d="M2 16v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q8.35 9 10 9q1.125 0 2.225.175t2.2.55q-1.35 1.175-1.975 2.825-.625 1.65-.375 3.45Zm8-8Q8.35 8 7.175 6.825 6 5.65 6 4q0-1.65 1.175-2.825Q8.35 0 10 0q1.65 0 2.825 1.175Q14 2.35 14 4q0 1.65-1.175 2.825Q11.65 8 10 8Zm10-4q0 1.65-1.175 2.825Q17.65 8 16 8q-.275 0-.7-.062-.425-.063-.7-.138.675-.8 1.037-1.775Q16 5.05 16 4q0-1.05-.363-2.025Q15.275 1 14.6.2q.35-.125.7-.163Q15.65 0 16 0q1.65 0 2.825 1.175Q20 2.35 20 4Zm-1 16q-2.075 0-3.537-1.462Q14 17.075 14 15q0-2.1 1.463-3.55Q16.925 10 19 10q2.1 0 3.55 1.45Q24 12.9 24 15q0 2.075-1.45 3.538Q21.1 20 19 20Zm-.7-2.75 3.525-3.55-.7-.7-2.825 2.825-1.425-1.425-.7.725Z"/>
    </Icon>
  );
});

export default IconMaterialProductivityRoundedFilled;
