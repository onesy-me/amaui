import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropDownCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownCircleFilled'

      short_name='ArrowDropDownCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 14.65q.15.15.35.15.2 0 .35-.15l2.8-2.8q.225-.225.112-.538Q15.15 11 14.8 11H9.2q-.35 0-.462.312-.113.313.112.538ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialArrowDropDownCircleFilled.displayName = 'AmauiIconMaterialArrowDropDownCircleFilled';

export default IconMaterialArrowDropDownCircleFilled;
