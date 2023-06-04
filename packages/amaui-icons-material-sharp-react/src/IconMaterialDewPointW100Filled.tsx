import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDewPointW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DewPointW100Filled'

      short_name='DewPoint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 10.35q-.35 0-.6-.25t-.25-.6q0-.225.075-.425.075-.2.2-.375t.275-.35l.3-.35.3.35q.15.175.275.35.125.175.2.375.075.2.075.425 0 .35-.25.6t-.6.25Zm4-3q-.35 0-.6-.25t-.25-.6q0-.225.075-.425.075-.2.2-.375t.275-.35l.3-.35.3.35q.15.175.275.35.125.175.2.375.075.2.075.425 0 .35-.25.6t-.6.25Zm0 6q-.35 0-.6-.25t-.25-.6q0-.225.075-.425.075-.2.2-.375t.275-.35l.3-.35.3.35q.15.175.275.35.125.175.2.375.075.2.075.425 0 .35-.25.6t-.6.25ZM9.2 19.7q-1.55 0-2.625-1.075T5.5 16q0-1 .525-1.875T7.5 12.7V6q0-.725.487-1.213Q8.475 4.3 9.2 4.3q.725 0 1.213.487.487.488.487 1.213v6.7q.95.55 1.475 1.425Q12.9 15 12.9 16q0 1.55-1.075 2.625T9.2 19.7Zm-3-3.7h6q0-.75-.425-1.463-.425-.712-1.225-1.287L10.2 13V6q0-.425-.287-.713Q9.625 5 9.2 5t-.712.287Q8.2 5.575 8.2 6v7l-.35.25q-.8.575-1.225 1.287Q6.2 15.25 6.2 16Z"/>
    </Icon>
  );
});

IconMaterialDewPointW100Filled.displayName = 'AmauiIconMaterialDewPointW100Filled';

export default IconMaterialDewPointW100Filled;
