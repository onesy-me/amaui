import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWysiwyg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wysiwyg'

      short_name='Wysiwyg'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M19,19H5V7h14V19z M17,12H7v-2h10V12z M13,16H7v-2h6V16z" opacity=".3"/><path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M17,12H7v-2 h10V12z M13,16H7v-2h6V16z"/></g>
    </Icon>
  );
});

IconMaterialWysiwyg.displayName = 'OnesyIconMaterialWysiwyg';

export default IconMaterialWysiwyg;
