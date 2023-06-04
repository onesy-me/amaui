import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeakRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakRemoveW100Filled'

      short_name='LeakRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.2 21.2-4.15-4.15q-.375.525-.612 1.187-.238.663-.238 1.463h-.7q0-.9.262-1.662.263-.763.788-1.488L13.2 14.2q-.825.975-1.412 2.387Q11.2 18 11.2 19.7h-.7q0-1.8.588-3.3.587-1.5 1.612-2.7l-2.4-2.4q-1.35 1.1-2.812 1.65-1.463.55-3.188.55v-.7q1.5 0 2.938-.525Q8.675 11.75 9.8 10.8L7.45 8.45q-.675.525-1.475.788-.8.262-1.675.262v-.7q.75 0 1.45-.238.7-.237 1.2-.612L2.8 3.8l.5-.5 17.4 17.4Zm-1.925-5.75-.55-.55q.375-.2.913-.3.537-.1 1.062-.1v.7q-.375 0-.737.062-.363.063-.688.188Zm-3-3-.525-.525q1.2-.725 2.4-1.075t2.55-.35v.7q-1.325.025-2.388.35-1.062.325-2.037.9Zm-3.2-3.2-.525-.525q.65-1.025.95-2.138.3-1.112.3-2.287h.7q0 1.4-.375 2.612-.375 1.213-1.05 2.338ZM9.125 6.3l-.55-.55q.125-.35.175-.713.05-.362.05-.737h.7q0 .575-.087 1.05-.088.475-.288.95Z"/>
    </Icon>
  );
});

IconMaterialLeakRemoveW100Filled.displayName = 'AmauiIconMaterialLeakRemoveW100Filled';

export default IconMaterialLeakRemoveW100Filled;
