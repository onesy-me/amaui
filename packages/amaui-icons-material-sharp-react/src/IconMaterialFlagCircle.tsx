import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlagCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagCircle'

      short_name='FlagCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18h1.5v-5H12l1 2h5V9h-3l-1-2H8Zm5.925-4.5-1-2H9.5v-3h3.575l1 2H16.5v3ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialFlagCircle.displayName = 'AmauiIconMaterialFlagCircle';

export default IconMaterialFlagCircle;
