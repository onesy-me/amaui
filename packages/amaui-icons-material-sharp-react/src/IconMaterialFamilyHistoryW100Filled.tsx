import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHistoryW100Filled'

      short_name='FamilyHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.975q-1.25 0-2.113-.862-.862-.863-.862-2.113 0-1.15.75-1.988.75-.837 1.875-.962v-2.7H6.3V8.875H3.925v-5.45h5.45v5.45H7v2.775h10v-2.8q-1.125-.125-1.875-.962-.75-.838-.75-1.988 0-1.25.863-2.113.862-.862 2.112-.862t2.113.862q.862.863.862 2.113 0 1.15-.75 1.988-.75.837-1.875.962v3.5h-5.35v2.7q1.125.125 1.875.962.75.838.75 1.988 0 1.25-.862 2.113-.863.862-2.113.862Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistoryW100Filled.displayName = 'AmauiIconMaterialFamilyHistoryW100Filled';

export default IconMaterialFamilyHistoryW100Filled;
