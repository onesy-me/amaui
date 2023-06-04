import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsHandballFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHandballFilled'

      short_name='SportsHandball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 9q-.825 0-1.412-.588Q14 7.825 14 7t.588-1.412Q15.175 5 16 5t1.413.588Q18 6.175 18 7t-.587 1.412Q16.825 9 16 9Zm.15 8.725q.15-.425.225-.862.075-.438.075-.863 0-.8-.225-1.55t-.725-1.4l-5.8 9.975q-.2.375-.612.475-.413.1-.763-.1-.35-.2-.462-.612-.113-.413.087-.763l2.5-4.325-1.7-1-1 1.725q-.2.35-.612.462-.413.113-.763-.087-.35-.2-.462-.612-.113-.413.087-.763L10.65 9.4q-.95-.975-1.425-2.225Q8.75 5.925 8.75 4.6q0-.65.113-1.275.112-.625.362-1.25.15-.425.575-.55.425-.125.85.125.275.175.388.525.112.35-.013.7-.15.4-.213.825-.062.425-.062.85 0 1.325.65 2.487.65 1.163 1.85 1.863l2.25 1.3q1.55.9 2.275 2.587.725 1.688.725 3.163 0 .65-.125 1.288-.125.637-.35 1.237-.175.425-.612.563-.438.137-.863-.113-.275-.175-.4-.512-.125-.338 0-.688ZM13.5 4q-.65 0-1.075-.45Q12 3.1 12 2.5q0-.65.45-1.075Q12.9 1 13.5 1q.65 0 1.075.45Q15 1.9 15 2.5q0 .65-.45 1.075Q14.1 4 13.5 4Z"/>
    </Icon>
  );
});

IconMaterialSportsHandballFilled.displayName = 'AmauiIconMaterialSportsHandballFilled';

export default IconMaterialSportsHandballFilled;
