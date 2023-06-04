import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorbell3pW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Doorbell3pW100Filled'

      short_name='Doorbell3p'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 20.7q-.625 0-1.062-.438Q6.3 19.825 6.3 19.2V4.8q0-.625.438-1.063Q7.175 3.3 7.8 3.3h8.4q.625 0 1.062.437.438.438.438 1.063v14.4q0 .625-.438 1.062-.437.438-1.062.438Zm4.2-2.35q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.312q-.537-.538-1.312-.538t-1.312.538q-.538.537-.538 1.312t.538 1.312q.537.538 1.312.538Zm0-.7q-.475 0-.812-.338-.338-.337-.338-.812 0-.475.338-.812.337-.338.812-.338.475 0 .812.338.338.337.338.812 0 .475-.338.812-.337.338-.812.338Zm0-4.55q.35 0 .575-.225.225-.225.225-.575h-1.6q0 .35.225.575.225.225.575.225Zm-3.2-1.3h6.4v-.7h-.8V9.25q0-.9-.45-1.6-.45-.7-1.3-.95v-.25q0-.275-.187-.462Q12.275 5.8 12 5.8t-.462.188q-.188.187-.188.462v.25q-.85.3-1.3.975-.45.675-.45 1.575v1.85h-.8Z"/>
    </Icon>
  );
});

IconMaterialDoorbell3pW100Filled.displayName = 'AmauiIconMaterialDoorbell3pW100Filled';

export default IconMaterialDoorbell3pW100Filled;
