import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignLanguageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguageFilled'

      short_name='SignLanguage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 24.1v-2H10v-1H3v-2h7v-1H2v-2h8v-1H3.5v-2h9l-1.6-3.125 1.6-.875 6.5 6.225V24.1ZM9.925 8.225 6.75 4.9 8.2 3.525l3.575 3.7ZM8.575 11.1l-2.95-3.05 1.45-1.375 1.95 2.05-.8.425 1 1.95Zm11.85 2.825-7.6-7.275-.15.075L8.225 2.1 9.675.725l5.55 5.775.7-.7-4.475-4.7 1.425-1.375 6.225 6.5.975-2.775H22v9Z"/>
    </Icon>
  );
});

IconMaterialSignLanguageFilled.displayName = 'AmauiIconMaterialSignLanguageFilled';

export default IconMaterialSignLanguageFilled;
