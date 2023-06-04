import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPostOffice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOffice'

      short_name='LocalPostOffice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V12h4V8q0-2.5 1.75-4.25T12 2h4q2.5 0 4.25 1.75T22 8v14h-2v-3h-4v3Zm14-5h4V8q0-1.65-1.175-2.825Q17.65 4 16 4h-4q-1.65 0-2.825 1.175Q8 6.35 8 8v4h8Zm-6-7V8h8v2Zm-1 6.85L14 14H4Zm0 1.75-5-2.85V20h10v-4.25ZM4 14v6-6Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOffice.displayName = 'AmauiIconMaterialLocalPostOffice';

export default IconMaterialLocalPostOffice;
