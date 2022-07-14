import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedSharpFilled'
      short_name='BookmarkAdded'

      {...props}
    >
      <path d="M17.825 9 15 6.175 16.4 4.75 17.825 6.175 21.35 2.625 22.775 4.05ZM5 21V3H14Q13.5 3.75 13.25 4.438Q13 5.125 13 6Q13 7.8 14.137 9.175Q15.275 10.55 17 10.9Q17.575 10.975 18 10.975Q18.425 10.975 19 10.9V21L12 18Z"/>
    </Icon>
  );
});

export default IconMaterialBookmarkAddedSharpFilled;
