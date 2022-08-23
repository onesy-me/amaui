import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenTwoTone'
      short_name='Splitscreen'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="5" opacity=".3" width="12" x="6" y="4"/><rect height="5" opacity=".3" width="12" x="6" y="15"/><path d="M18,2H6C4.9,2,4,2.9,4,4v5c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,9H6V4h12V9z"/><path d="M18,13H6c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-5C20,13.9,19.1,13,18,13z M18,20H6v-5h12V20z"/></g></g>
    </Icon>
  );
});

IconMaterialSplitscreenTwoTone.displayName = 'AmauiIconMaterialSplitscreenTwoTone';

export default IconMaterialSplitscreenTwoTone;
