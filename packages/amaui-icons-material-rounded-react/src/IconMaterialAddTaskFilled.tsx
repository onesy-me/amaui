import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddTaskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskFilled'

      short_name='AddTask'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.125-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2q1.2 0 2.388.3 1.187.3 2.312.875.375.2.463.612.087.413-.188.763-.25.325-.65.425-.4.1-.75-.1-.85-.425-1.75-.65Q12.925 4 12 4 8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20q.725 0 1.375-.113.65-.112 1.25-.337.325-.125.638-.012.312.112.562.387.325.375.188.838-.138.462-.638.662-.775.275-1.625.425-.85.15-1.775.15ZM9.9 15.9l-2.875-2.875q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l2.15 2.15 9.325-9.35q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7L11.3 15.9q-.275.275-.7.275-.425 0-.7-.275ZM20 20q-.425 0-.712-.288Q19 19.425 19 19v-2h-2q-.425 0-.712-.288Q16 16.425 16 16t.288-.713Q16.575 15 17 15h2v-2q0-.425.288-.713Q19.575 12 20 12t.712.287Q21 12.575 21 13v2h2q.425 0 .712.287.288.288.288.713t-.288.712Q23.425 17 23 17h-2v2q0 .425-.288.712Q20.425 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialAddTaskFilled.displayName = 'AmauiIconMaterialAddTaskFilled';

export default IconMaterialAddTaskFilled;
