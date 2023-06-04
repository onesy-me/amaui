import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastW100Filled'

      short_name='Cast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.3 18.7q0-1.875-.712-3.512-.713-1.638-1.925-2.851-1.213-1.212-2.85-1.925Q5.175 9.7 3.3 9.7V5.3h17.4v13.4Zm-3.7 0q0-2.2-1.55-3.75Q5.5 13.4 3.3 13.4v-3q1.725 0 3.238.65 1.512.65 2.637 1.775t1.775 2.638q.65 1.512.65 3.237Zm-3.7 0q0-.65-.475-1.125T3.3 17.1v-3q1.925.05 3.262 1.375Q7.9 16.8 7.9 18.7Z"/>
    </Icon>
  );
});

IconMaterialCastW100Filled.displayName = 'AmauiIconMaterialCastW100Filled';

export default IconMaterialCastW100Filled;
