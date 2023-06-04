import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckCircleFilled'

      short_name='CheckCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.6 16.6 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialCheckCircleFilled.displayName = 'AmauiIconMaterialCheckCircleFilled';

export default IconMaterialCheckCircleFilled;
