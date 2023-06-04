import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdminMedsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdminMedsFilled'

      short_name='AdminMeds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12Zm-3.8 3.775q.725.725 1.713.737.987.013 1.712-.712l1.4-1.4L9.6 10.975l-1.4 1.4q-.725.725-.725 1.7t.725 1.7Zm7.6-7.55q-.725-.7-1.712-.725-.988-.025-1.713.7L11 9.575 14.425 13l1.375-1.375q.725-.725.713-1.7-.013-.975-.713-1.7ZM3 21V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAdminMedsFilled.displayName = 'AmauiIconMaterialAdminMedsFilled';

export default IconMaterialAdminMedsFilled;
