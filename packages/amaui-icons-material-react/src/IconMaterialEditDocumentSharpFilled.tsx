import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditDocumentSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentSharpFilled'
      short_name='EditDocument'

      {...props}
    >
      <path d="M4 22V2h10l6 6v3.1l-8 7.975V22Zm10 0v-2.125l5.15-5.175 2.15 2.1-5.175 5.2Zm8.025-5.9L19.9 13.975l1.425-1.425 2.075 2.175ZM13 9h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialEditDocumentSharpFilled.displayName = 'AmauiIconMaterialEditDocumentSharpFilled';

export default IconMaterialEditDocumentSharpFilled;
