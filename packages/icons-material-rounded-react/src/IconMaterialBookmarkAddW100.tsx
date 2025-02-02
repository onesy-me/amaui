import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddW100'

      short_name='BookmarkAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-296-144 62q-30 13-57-4.76-27-17.75-27-50.24v-439q0-26 17-43t43-17h194q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H312q-12 0-22 10t-10 22v437q0 17 14.5 27t30.5 3l155-67 155 67q16 7 30.5-3t14.5-27v-215q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v217q0 32.49-27 50.24Q654-221 624-234l-144-62Zm0-464H280h240-40Zm200 80h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-66Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddW100.displayName = 'OnesyIconMaterialBookmarkAddW100';

export default IconMaterialBookmarkAddW100;
