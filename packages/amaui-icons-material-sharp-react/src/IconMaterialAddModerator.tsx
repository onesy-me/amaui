import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddModerator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModerator'

      short_name='AddModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v5.675q-.475-.2-.975-.363-.5-.162-1.025-.237V6.4l-6-2.25L6 6.4v4.7q0 1.175.312 2.35.313 1.175.876 2.238.562 1.062 1.362 1.962.8.9 1.775 1.5.275.8.725 1.525.45.725 1.025 1.3-.025 0-.037.013Q12.025 22 12 22Zm5 0q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm-.5-2h1v-2.5H20v-1h-2.5V14h-1v2.5H14v1h2.5ZM12 11.65Z"/>
    </Icon>
  );
});

IconMaterialAddModerator.displayName = 'AmauiIconMaterialAddModerator';

export default IconMaterialAddModerator;
