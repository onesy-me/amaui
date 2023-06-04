import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenLockRotationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotationFilled'

      short_name='ScreenLockRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.75 18.95q-.35 0-.712-.138-.363-.137-.638-.412l-7.85-7.85q-.275-.275-.412-.638Q5 9.55 5 9.2q0-.375.138-.725.137-.35.412-.625L9.9 3.5q.275-.275.638-.425.362-.15.712-.15.375 0 .637.112.263.113.463.263v4.85q0 1.475 1.013 2.487 1.012 1.013 2.487 1.013h4.85q.15.2.238.475.087.275.087.575 0 .35-.15.712-.15.363-.425.638L16.1 18.4q-.275.275-.625.412-.35.138-.725.138Zm-1.025 3.975q-.175.025-.35.025H13q-2.35 0-4.438-.85-2.087-.85-3.699-2.338-1.613-1.487-2.613-3.5-1-2.012-1.2-4.312-.05-.4.238-.7.287-.3.712-.3.4 0 .7.287.3.288.35.713.35 3.275 2.563 5.725 2.212 2.45 5.412 3.1L9.1 18.85q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l3.775 3.775q.6.6.425 1.125t-.975.575ZM15.85 9q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H16V3q0-.825.587-1.413Q17.175 1 18 1q.825 0 1.413.587Q20 2.175 20 3v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25ZM17 4h2V3q0-.425-.288-.713Q18.425 2 18 2t-.712.287Q17 2.575 17 3Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotationFilled.displayName = 'AmauiIconMaterialScreenLockRotationFilled';

export default IconMaterialScreenLockRotationFilled;
