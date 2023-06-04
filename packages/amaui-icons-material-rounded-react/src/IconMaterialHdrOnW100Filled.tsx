import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnW100Filled'

      short_name='HdrOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.75 14.6q-.15 0-.25-.1t-.1-.25v-4.1q0-.325.213-.538.212-.212.537-.212h1.95q.6 0 1.05.45.45.45.45 1.05v.2q0 .425-.262.838-.263.412-.838.612l.7 1.6q.075.2-.012.325-.088.125-.288.125-.1 0-.2-.063-.1-.062-.15-.162l-.8-1.775H17.1v1.65q0 .15-.1.25t-.25.1Zm.35-2.7h2q.3 0 .55-.25.25-.25.25-.55v-.2q0-.3-.25-.55-.25-.25-.55-.25h-2ZM3.75 14.6q-.15 0-.25-.1t-.1-.25v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.8V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V12.1H4.1v2.15q0 .15-.1.25t-.25.1Zm6.55 0q-.175 0-.288-.112-.112-.113-.112-.288V9.8q0-.175.112-.288.113-.112.288-.112h2.3q.6 0 1.05.45.45.45.45 1.05v2.2q0 .6-.45 1.05-.45.45-1.05.45Zm.3-.7h2q.3 0 .55-.25.25-.25.25-.55v-2.2q0-.3-.25-.55-.25-.25-.55-.25h-2Z"/>
    </Icon>
  );
});

IconMaterialHdrOnW100Filled.displayName = 'AmauiIconMaterialHdrOnW100Filled';

export default IconMaterialHdrOnW100Filled;
