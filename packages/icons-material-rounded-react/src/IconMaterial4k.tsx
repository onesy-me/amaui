import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial4k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4k'

      short_name='4k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m580-450 61 79q2 3 23 11 18 0 26-16.5t-3-30.5l-57-73 57-74q11-14 3-30t-26-16q-7 0-13 3t-10 8l-61 79v-60q0-13-8.5-21.5T550-600q-13 0-21.5 8.5T520-570v180q0 13 8.5 21.5T550-360q13 0 21.5-8.5T580-390v-60Zm-200 30v30q0 13 8.5 21.5T410-360q13 0 21.5-8.5T440-390v-30h10q13 0 21.5-8.5T480-450q0-13-8.5-21.5T450-480h-10v-90q0-13-8.5-21.5T410-600q-13 0-21.5 8.5T380-570v90h-60v-90q0-13-8.5-21.5T290-600q-13 0-21.5 8.5T260-570v120q0 13 8.5 21.5T290-420h90ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterial4k.displayName = 'OnesyIconMaterial4k';

export default IconMaterial4k;
