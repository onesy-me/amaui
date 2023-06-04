import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccessShortcutAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcutAddFilled'

      short_name='SwitchAccessShortcutAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 18q-.425 0-.712-.288Q20 17.425 20 17v-1h-1q-.425 0-.712-.288Q18 15.425 18 15t.288-.713Q18.575 14 19 14h1v-1q0-.425.288-.713Q20.575 12 21 12t.712.287Q22 12.575 22 13v1h1q.425 0 .712.287.288.288.288.713t-.288.712Q23.425 16 23 16h-1v1q0 .425-.288.712Q21.425 18 21 18ZM8 11l-.95-2.05L5 8l2.05-.95L8 5l.95 2.05L11 8l-2.05.95Zm0 10-.95-2.05L5 18l2.05-.95L8 15l.95 2.05L11 18l-2.05.95Zm-3-6-.625-1.375L3 13l1.375-.625L5 11l.625 1.375L7 13l-1.375.625Zm12.45 6.25q-2.475-1.45-3.962-3.925Q12 14.85 12 12q0-2.35.938-4.4.937-2.05 2.512-3.6H13q-.425 0-.712-.288Q12 3.425 12 3t.288-.713Q12.575 2 13 2h5q.425 0 .712.287Q19 2.575 19 3v5q0 .425-.288.712Q18.425 9 18 9t-.712-.288Q17 8.425 17 8V5.275Q15.65 6.6 14.825 8.35 14 10.1 14 12q0 2.4 1.3 4.425t3.325 3.2q.15.1.263.313.112.212.112.462-.05.6-.512.9-.463.3-1.038-.05Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcutAddFilled.displayName = 'AmauiIconMaterialSwitchAccessShortcutAddFilled';

export default IconMaterialSwitchAccessShortcutAddFilled;
