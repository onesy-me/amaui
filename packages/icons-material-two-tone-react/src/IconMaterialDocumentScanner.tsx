import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDocumentScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocumentScanner'

      short_name='DocumentScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M7,6v12h10V6H7z M15,16H9v-2h6V16z M15,13H9v-2h6V13z M15,10H9V8h6V10z" opacity=".3"/><path d="M7,3H4v3H2V1h5V3z M22,6V1h-5v2h3v3H22z M7,21H4v-3H2v5h5V21z M20,18v3h-3v2h5v-5H20z M17,6H7v12h10V6z M19,18 c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2V18z M15,8H9v2h6V8z M15,11H9v2h6V11z M15,14H9v2h6V14z"/>
    </Icon>
  );
});

IconMaterialDocumentScanner.displayName = 'OnesyIconMaterialDocumentScanner';

export default IconMaterialDocumentScanner;
