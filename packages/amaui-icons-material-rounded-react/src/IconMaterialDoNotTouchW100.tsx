import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotTouchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouchW100'

      short_name='DoNotTouch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.05 19.3q-.425 0-.8-.187-.375-.188-.625-.438L5 13.8q-.2-.225-.2-.538 0-.312.225-.512l.075-.05q.1-.1.212-.113.113-.012.238.063l2.75 1.575V9.3L2.5 3.5q-.1-.1-.1-.25T2.5 3q.1-.1.25-.1T3 3l18.55 18.55q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L16.3 17.3v.075q0 .8-.575 1.363-.575.562-1.375.562Zm0-.7h3.3q.5.025.863-.35.362-.375.387-.9v-.75L9 10v5.075H7.175l2.925 3.1q.175.2.425.313.25.112.525.112Zm5.25-5.125-.7-.7V12.1h-.675L12.9 10.075V4.75q0-.225.15-.388.15-.162.4-.162t.4.15q.15.15.15.4v6.05q0 .25.175.425t.425.175q.25 0 .425-.175t.175-.425V6.35q0-.2.138-.375.137-.175.412-.175.275 0 .413.138.137.137.137.412Zm-4.6-4.6-1.1-1.1V3.95q0-.25.15-.4.15-.15.4-.15t.4.162q.15.163.15.388Zm-2.3-2.3-1.1-1.1q0-.2.138-.338Q8.575 5 8.85 5q.25 0 .4.162.15.163.15.388Zm5.525 5.525Zm-2.575 1.25Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouchW100.displayName = 'AmauiIconMaterialDoNotTouchW100';

export default IconMaterialDoNotTouchW100;
