import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTitleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleW100'

      short_name='Title'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 18.85v-13h-5.5v-.7h11.7v.7h-5.5v13Z"/>
    </Icon>
  );
});

IconMaterialTitleW100.displayName = 'AmauiIconMaterialTitleW100';

export default IconMaterialTitleW100;
