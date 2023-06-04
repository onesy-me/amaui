import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveW100Filled'

      short_name='Move'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 765q-5 0-7.5-3t-4.25-7.125Q416 726 400.667 704.146 385.333 682.293 370 662q-21-28-37.5-56T316 536q0-51.371 36.314-87.686Q388.629 412 440 412q51.371 0 87.686 36.314Q564 484.629 564 536q0 42-16.5 70T510 662q-15.333 20.293-30.667 42.146Q464 726 452 755q-2 5-4.5 7.5T440 765Zm.141-189Q457 576 468.5 564.359t11.5-28.5Q480 519 468.359 507.5t-28.5-11.5Q423 496 411.5 507.641t-11.5 28.5Q400 553 411.641 564.5t28.5 11.5ZM440 884q-128.333 0-218.167-89.793Q132 704.414 132 576.138 132 512 156 456t66-98q42-42 97.943-66t120-24Q504 268 560 292t98 66q42 42 66 97.961T748 576v71l90-91 20 19-124 124-124-124 20-19 90 90v-70q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 117 81.5 198.5T440 856q56 0 102.5-19.5T629 782l21 20q-44 39-98 60.5T440 884Z"/>
    </Icon>
  );
});

IconMaterialMoveW100Filled.displayName = 'AmauiIconMaterialMoveW100Filled';

export default IconMaterialMoveW100Filled;
