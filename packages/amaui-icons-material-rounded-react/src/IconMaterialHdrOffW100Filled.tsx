import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffW100Filled'

      short_name='HdrOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.9 14.6q-.1 0-.2-.063-.1-.062-.15-.162l-.8-1.775H17.1v1.65l-.7-.7v-3.4q0-.325.213-.538.212-.212.537-.212h1.95q.6 0 1.05.45.45.45.45 1.05v.2q0 .525-.325.912-.325.388-.775.538l.7 1.6q.075.2-.012.325-.088.125-.288.125Zm-2.8-2.7h2q.3 0 .55-.25.25-.25.25-.55v-.2q0-.3-.25-.55-.25-.25-.55-.25h-2Zm2.3 8.5L3.55 4.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L19.9 19.9q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-5.3-9.15L12.25 9.4h.35q.575 0 1.038.45.462.45.462 1.05Zm-10.7 3v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.8V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V12.1H4.1v2.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm6.5-3.85.7.7v2.8h2q.15 0 .287-.063.138-.062.263-.187l.5.5q-.2.2-.475.325-.275.125-.575.125H9.9Z"/>
    </Icon>
  );
});

IconMaterialHdrOffW100Filled.displayName = 'AmauiIconMaterialHdrOffW100Filled';

export default IconMaterialHdrOffW100Filled;
