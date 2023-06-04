import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosW100Filled'

      short_name='Sos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.9 15.85q-.625 0-1.062-.438-.438-.437-.438-1.062v-4.7q0-.625.438-1.063.437-.437 1.062-.437h2.2q.625 0 1.063.437.437.438.437 1.063v4.7q0 .625-.437 1.062-.438.438-1.063.438Zm-5.55 0H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.35q.35 0 .575-.225.225-.225.225-.575v-1.2q0-.35-.225-.575-.225-.225-.575-.225h-1.2q-.625 0-1.062-.438-.438-.437-.438-1.062v-1.2q0-.625.438-1.063.437-.437 1.062-.437H6.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H4.15q-.35 0-.575.225-.225.225-.225.575v1.2q0 .35.225.575.225.225.575.225h1.2q.625 0 1.063.437.437.438.437 1.063v1.2q0 .625-.437 1.062-.438.438-1.063.438Zm14.5 0H17.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.35q.35 0 .575-.225.225-.225.225-.575v-1.2q0-.35-.225-.575-.225-.225-.575-.225h-1.2q-.625 0-1.062-.438-.438-.437-.438-1.062v-1.2q0-.625.438-1.063.437-.437 1.062-.437H21q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.35q-.35 0-.575.225-.225.225-.225.575v1.2q0 .35.225.575.225.225.575.225h1.2q.625 0 1.063.437.437.438.437 1.063v1.2q0 .625-.437 1.062-.438.438-1.063.438Zm-8.95-.7h2.2q.35 0 .575-.225.225-.225.225-.575v-4.7q0-.35-.225-.575-.225-.225-.575-.225h-2.2q-.35 0-.575.225-.225.225-.225.575v4.7q0 .35.225.575.225.225.575.225Z"/>
    </Icon>
  );
});

IconMaterialSosW100Filled.displayName = 'AmauiIconMaterialSosW100Filled';

export default IconMaterialSosW100Filled;
