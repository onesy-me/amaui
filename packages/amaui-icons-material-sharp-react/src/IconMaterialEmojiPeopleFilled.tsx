import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiPeopleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleFilled'

      short_name='EmojiPeople'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6ZM9 22V8.775q-2.275-.6-3.637-2.513Q4 4.35 4 2h2q0 2.075 1.338 3.537Q8.675 7 10.75 7h2.5q.75 0 1.4.275.65.275 1.175.8L20.35 12.6l-1.4 1.4L15 10.05V22h-2v-6h-2v6Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleFilled.displayName = 'AmauiIconMaterialEmojiPeopleFilled';

export default IconMaterialEmojiPeopleFilled;
