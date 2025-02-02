import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='List'

      short_name='List'

      viewBox='0 0 24 24'

      {...props}
    >
      <g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
    </Icon>
  );
});

IconMaterialList.displayName = 'OnesyIconMaterialList';

export default IconMaterialList;
