import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAcUnitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcUnitW100'

      short_name='AcUnit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-.15 0-.25-.1t-.1-.25v-4.7L8 19.9q-.125.1-.25.112-.125.013-.25-.112t-.125-.25q0-.125.125-.25l4.15-4.15v-2.9h-2.9L4.6 16.5q-.125.125-.25.125T4.1 16.5q-.1-.1-.1-.238 0-.137.1-.262l3.6-3.65H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.7L4.1 8q-.1-.125-.113-.25-.012-.125.113-.25t.25-.125q.125 0 .25.125l4.15 4.15h2.9v-2.9L7.5 4.6q-.125-.125-.125-.25T7.5 4.1q.1-.1.238-.1.137 0 .262.1l3.65 3.6V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.7L16 4.1q.125-.1.25-.113.125-.012.25.113t.125.25q0 .125-.125.25l-4.15 4.15v2.9h2.9L19.4 7.5q.125-.125.25-.125t.25.125q.1.1.1.237 0 .138-.1.263l-3.6 3.65H21q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.7L19.9 16q.1.125.113.25.012.125-.113.25t-.25.125q-.125 0-.25-.125l-4.15-4.15h-2.9v2.9l4.15 4.15q.125.125.125.25t-.125.25q-.1.1-.237.1-.138 0-.263-.1l-3.65-3.6V21q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAcUnitW100.displayName = 'AmauiIconMaterialAcUnitW100';

export default IconMaterialAcUnitW100;
