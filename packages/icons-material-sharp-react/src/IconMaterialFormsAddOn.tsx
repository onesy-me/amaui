import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormsAddOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormsAddOn'

      short_name='FormsAddOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-121v-120H520v-80h120v-120h80v120h120v80H720v120h-80ZM120-240v-80h80v80h-80Zm160 0v-80h163q-3 21-2.5 40t3.5 40H280ZM120-400v-80h80v80h-80Zm160 0v-80h266q-23 16-41.5 36T472-400H280ZM120-560v-80h80v80h-80Zm160 0v-80h480v80H280ZM120-720v-80h80v80h-80Zm160 0v-80h480v80H280Z"/>
    </Icon>
  );
});

IconMaterialFormsAddOn.displayName = 'OnesyIconMaterialFormsAddOn';

export default IconMaterialFormsAddOn;
