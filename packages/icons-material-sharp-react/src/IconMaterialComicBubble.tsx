import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComicBubble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComicBubble'

      short_name='ComicBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-803-83 83H240v117l-83 83 83 83v117h117l83 83 100-100 168 85-86-167 101-101-83-83v-117H523l-83-83Zm0-113 116 116h164v164l116 116-116 116 115 226-53 53-226-115-116 116-116-116H160v-164L44-520l116-116v-164h164l116-116Zm0 396Z"/>
    </Icon>
  );
});

IconMaterialComicBubble.displayName = 'OnesyIconMaterialComicBubble';

export default IconMaterialComicBubble;
