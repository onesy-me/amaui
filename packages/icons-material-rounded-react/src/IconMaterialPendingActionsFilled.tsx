import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPendingActionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingActionsFilled'

      short_name='PendingActions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm20-208v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l61 61q6 6 14 6t14-6q6-6 6-14t-6-14l-61-61ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v160q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-160h-80v80q0 17-11.5 28.5T640-640H320q-17 0-28.5-11.5T280-680v-80h-80v560h180q17 0 28.5 11.5T420-160q0 17-11.5 28.5T380-120H200Zm280-640q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialPendingActionsFilled.displayName = 'OnesyIconMaterialPendingActionsFilled';

export default IconMaterialPendingActionsFilled;
