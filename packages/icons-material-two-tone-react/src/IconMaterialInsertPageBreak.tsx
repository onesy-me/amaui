import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertPageBreak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreak'

      short_name='InsertPageBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="18,11 6,11 6,4 13,4 13,9 18,9"/><g><path d="M18,20H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3h-2V20z"/><path d="M6,4h7v5h5v2h2V8l-6-6H6C4.9,2,4,2.9,4,4v7h2V4z"/><rect height="2" width="6" x="9" y="13"/><rect height="2" width="6" x="17" y="13"/><rect height="2" width="6" x="1" y="13"/></g><rect height="3" opacity=".3" width="12" x="6" y="17"/></g></g>
    </Icon>
  );
});

IconMaterialInsertPageBreak.displayName = 'OnesyIconMaterialInsertPageBreak';

export default IconMaterialInsertPageBreak;
