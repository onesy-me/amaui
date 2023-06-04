import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkSetupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkSetupW100Filled'

      short_name='PhonelinkSetup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 21.7V2.3h11.4v5.8H17V5.35H7v13.3h10V15.9h.7v5.8ZM17 14.9l-.05-.7q-.45-.075-.762-.262-.313-.188-.538-.463l-.6.325-.35-.6.55-.4q-.15-.425-.15-.8 0-.375.15-.8l-.55-.4.35-.6.6.325q.225-.275.538-.463.312-.187.762-.262l.05-.7h.7l.05.7q.45.075.762.262.313.188.538.463l.6-.325.35.6-.55.4q.15.425.15.8 0 .375-.15.8l.55.4-.35.6-.6-.325q-.225.275-.538.463-.312.187-.762.262l-.05.7Zm.35-1.35q.65 0 1.1-.45.45-.45.45-1.1 0-.65-.45-1.1-.45-.45-1.1-.45-.65 0-1.1.45-.45.45-.45 1.1 0 .65.45 1.1.45.45 1.1.45Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkSetupW100Filled.displayName = 'AmauiIconMaterialPhonelinkSetupW100Filled';

export default IconMaterialPhonelinkSetupW100Filled;
