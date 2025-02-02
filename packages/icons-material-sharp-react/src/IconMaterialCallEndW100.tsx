import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndW100'

      short_name='CallEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M163-313 52-422l21-22q84-86 192.5-128T480-614q106 0 213.5 42.5T886-444l22 22-111 109-131-99v-140q-48-17-95-25.5t-91-8.5q-44 0-91 8.5T294-552v140l-131 99Zm103-229q-50 23-96 54t-78 64l74 74 100-76v-116Zm428 0v114l100 78 76-72q-39-36-82-66t-94-54Zm-428 0Zm428 0Z"/>
    </Icon>
  );
});

IconMaterialCallEndW100.displayName = 'OnesyIconMaterialCallEndW100';

export default IconMaterialCallEndW100;
