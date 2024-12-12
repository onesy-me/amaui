import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHighlight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Highlight'

      short_name='Highlight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M11 20h2v-3.83l3-3V11H8v2.17l3 3z" opacity=".3"/><path d="M6 14l3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM4.916 4.464l2.12 2.122L5.62 8 3.5 5.877zM18.372 8l-1.414-1.414 2.12-2.12 1.415 1.413z"/>
    </Icon>
  );
});

IconMaterialHighlight.displayName = 'OnesyIconMaterialHighlight';

export default IconMaterialHighlight;
