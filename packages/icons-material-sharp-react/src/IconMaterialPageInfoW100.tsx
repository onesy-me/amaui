import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageInfoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageInfoW100'

      short_name='PageInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-212q-45.36 0-76.68-31.32Q592-274.64 592-320q0-45.36 31.32-76.68Q654.64-428 700-428q45.36 0 76.68 31.32Q808-365.36 808-320q0 45.36-31.32 76.68Q745.36-212 700-212Zm-.1-28q33.1 0 56.6-23.4t23.5-56.5q0-33.1-23.4-56.6T700.1-400q-33.1 0-56.6 23.4T620-320.1q0 33.1 23.4 56.6t56.5 23.5ZM212-306v-28h280v28H212Zm48-226q-45.36 0-76.68-31.32Q152-594.64 152-640q0-45.36 31.32-76.68Q214.64-748 260-748q45.36 0 76.68 31.32Q368-685.36 368-640q0 45.36-31.32 76.68Q305.36-532 260-532Zm-.1-28q33.1 0 56.6-23.4t23.5-56.5q0-33.1-23.4-56.6T260.1-720q-33.1 0-56.6 23.4T180-640.1q0 33.1 23.4 56.6t56.5 23.5ZM468-626v-28h280v28H468Zm232 306ZM260-640Z"/>
    </Icon>
  );
});

IconMaterialPageInfoW100.displayName = 'OnesyIconMaterialPageInfoW100';

export default IconMaterialPageInfoW100;
