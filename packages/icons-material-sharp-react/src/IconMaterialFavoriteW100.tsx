import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFavoriteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteW100'

      short_name='Favorite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-190-22-20q-97-89-160.5-152t-100-110.5Q161-520 146.5-558T132-634q0-71 48.5-119.5T300-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q71 0 119.5 48.5T828-634q0 38-14.5 76t-51 85.5Q726-425 663-362T502-210l-22 20Zm0-38q96-87 158-149t98-107.5q36-45.5 50-80.5t14-69q0-60-40-100t-100-40q-48 0-88.5 27.5T494-660h-28q-38-60-78-87t-88-27q-59 0-99.5 40T160-634q0 34 14 69t50 80.5q36 45.5 98 107T480-228Zm0-273Z"/>
    </Icon>
  );
});

IconMaterialFavoriteW100.displayName = 'OnesyIconMaterialFavoriteW100';

export default IconMaterialFavoriteW100;
