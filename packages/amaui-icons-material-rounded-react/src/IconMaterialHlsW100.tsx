import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHlsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsW100'

      short_name='Hls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.75 14.6q-.15 0-.25-.1t-.1-.25v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.8V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V12.1H4.1v2.15q0 .15-.1.25t-.25.1Zm12.85 0q-.275 0-.487-.213-.213-.212-.213-.487v-.55q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.55h2.8v-1.65h-3q-.2 0-.35-.15-.15-.15-.15-.35V10.1q0-.275.213-.488.212-.212.487-.212h2.8q.275 0 .488.212.212.213.212.488v.55q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.55h-2.8v1.65h3q.225 0 .363.137.137.138.137.363v1.65q0 .275-.212.487-.213.213-.488.213Zm-5.55 0q-.325 0-.537-.213-.213-.212-.213-.537v-4.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.15h2.45q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialHlsW100.displayName = 'AmauiIconMaterialHlsW100';

export default IconMaterialHlsW100;
