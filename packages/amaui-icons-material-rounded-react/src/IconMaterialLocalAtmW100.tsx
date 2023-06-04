import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalAtmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmW100'

      short_name='LocalAtm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 15.35h1.65V16q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-.65h1.3q.3 0 .5-.2t.2-.5v-2.3q0-.3-.2-.5t-.5-.2h-3.3v-2.3H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v.65h-1.3q-.3 0-.5.2t-.2.5v2.3q0 .3.2.5t.5.2h3.3v2.3H10q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7q-.35 0-.575-.225Q4 17.55 4 17.2V6.8q0-.35.225-.575Q4.45 6 4.8 6q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Zm0 0h14.4q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialLocalAtmW100.displayName = 'AmauiIconMaterialLocalAtmW100';

export default IconMaterialLocalAtmW100;
