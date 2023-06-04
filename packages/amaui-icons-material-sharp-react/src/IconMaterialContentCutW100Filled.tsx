import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentCutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCutW100Filled'

      short_name='ContentCut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 20.4 12.1 13l-3.35 3.35q.225.375.338.788.112.412.112.862 0 1.275-.912 2.188-.913.912-2.188.912-1.275 0-2.187-.912Q3 19.275 3 18q0-1.275.913-2.188.912-.912 2.187-.912.45 0 .863.112.412.113.787.338L11.1 12 7.75 8.65q-.375.225-.787.338Q6.55 9.1 6.1 9.1q-1.275 0-2.187-.912Q3 7.275 3 6q0-1.275.913-2.188Q4.825 2.9 6.1 2.9t2.188.912Q9.2 4.725 9.2 6q0 .45-.112.862-.113.413-.338.788L21 19.9v.5Zm-5-9.8-1-1 6-6H21v.5ZM6.1 8.4q1.025 0 1.712-.688Q8.5 7.025 8.5 6t-.688-1.713Q7.125 3.6 6.1 3.6t-1.712.687Q3.7 4.975 3.7 6q0 1.025.688 1.712.687.688 1.712.688Zm6 3.45q-.075 0-.112.037-.038.038-.038.113 0 .075.038.112.037.038.112.038.075 0 .113-.038.037-.037.037-.112 0-.075-.037-.113-.038-.037-.113-.037Zm-6 8.55q1.025 0 1.712-.688Q8.5 19.025 8.5 18t-.688-1.712Q7.125 15.6 6.1 15.6t-1.712.688Q3.7 16.975 3.7 18t.688 1.712q.687.688 1.712.688Z"/>
    </Icon>
  );
});

IconMaterialContentCutW100Filled.displayName = 'AmauiIconMaterialContentCutW100Filled';

export default IconMaterialContentCutW100Filled;
