import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutorenew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Autorenew'

      short_name='Autorenew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"/>
    </Icon>
  );
});

IconMaterialAutorenew.displayName = 'OnesyIconMaterialAutorenew';

export default IconMaterialAutorenew;
