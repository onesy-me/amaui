import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFavoriteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteW100Filled'

      short_name='Favorite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-211q-11 0-21.5-4T439-227l-39-35q-107-97-187.5-187.5T132-634q0-71 48.5-119.5T300-802q41 0 88.5 22t91.5 90q44-68 91.5-90t88.5-22q71 0 119.5 48.5T828-634q0 97-85 189.5T559-262l-39 35q-8 8-19 12t-22 4Z"/>
    </Icon>
  );
});

IconMaterialFavoriteW100Filled.displayName = 'OnesyIconMaterialFavoriteW100Filled';

export default IconMaterialFavoriteW100Filled;
