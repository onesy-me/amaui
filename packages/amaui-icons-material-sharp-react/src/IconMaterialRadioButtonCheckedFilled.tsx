import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRadioButtonCheckedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioButtonCheckedFilled'

      short_name='RadioButtonChecked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Zm0 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialRadioButtonCheckedFilled.displayName = 'AmauiIconMaterialRadioButtonCheckedFilled';

export default IconMaterialRadioButtonCheckedFilled;
