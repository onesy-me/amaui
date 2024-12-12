import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwipeDownAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownAltW100'

      short_name='SwipeDownAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132 356-256l20-20 90 90v-214q-69-7-114.5-56T306-574q0-72.21 50.85-123.1 50.85-50.9 123-50.9T603-697.1q51 50.89 51 123.1 0 69-45.5 118T494-400v214l90-90 20 20-124 124Zm.12-296q60.88 0 103.38-42.62 42.5-42.62 42.5-103.5T583.38-677.5Q540.76-720 479.88-720T376.5-677.38Q334-634.76 334-573.88t42.62 103.38q42.62 42.5 103.5 42.5ZM480-574Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownAltW100.displayName = 'OnesyIconMaterialSwipeDownAltW100';

export default IconMaterialSwipeDownAltW100;
