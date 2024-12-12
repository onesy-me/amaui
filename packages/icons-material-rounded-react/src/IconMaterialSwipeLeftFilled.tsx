import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftFilled'

      short_name='SwipeLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M164-740h86q13 0 21.5 8.5T280-710q0 13-8.5 21.5T250-680H120q-17 0-28.5-11.5T80-720v-130q0-13 8.5-21.5T110-880q13 0 21.5 8.5T140-850v51q72-59 159-90t181-31q134 0 240 57t148 150q5 12-1 22.5T849-680q-15 0-27.5-8T801-709q-45-71-129-111t-192-40q-88 0-169 31t-147 89ZM473-80q-24 0-46-9t-39-26L212-292q-11-11-11.5-27.5T211-348l3-3q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v280h40v-120q0-17 11.5-28.5T520-560q17 0 28.5 11.5T560-520v120h40v-80q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v80h40q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v160q0 66-47 113T640-80H473Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftFilled.displayName = 'OnesyIconMaterialSwipeLeftFilled';

export default IconMaterialSwipeLeftFilled;
