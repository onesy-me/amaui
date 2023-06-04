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
      <path d="M12 20.975q-1.25 0-2.113-.862-.862-.863-.862-2.113 0-1.15.75-1.988.75-.837 1.875-.962v-2.7H7.8q-.625 0-1.062-.438-.438-.437-.438-1.062V8.875H4.675q-.325 0-.537-.213-.213-.212-.213-.537v-3.95q0-.325.213-.538.212-.212.537-.212h3.95q.325 0 .538.212.212.213.212.538v3.95q0 .325-.212.537-.213.213-.538.213H7v1.975q0 .35.225.575.225.225.575.225h8.4q.35 0 .575-.225Q17 11.2 17 10.85v-2q-1.125-.125-1.875-.962-.75-.838-.75-1.988 0-1.25.863-2.113.862-.862 2.112-.862t2.113.862q.862.863.862 2.113 0 1.15-.75 1.988-.75.837-1.875.962v2q0 .625-.438 1.062-.437.438-1.062.438h-3.85v2.7q1.125.125 1.875.962.75.838.75 1.988 0 1.25-.862 2.113-.863.862-2.113.862Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistoryW100Filled.displayName = 'AmauiIconMaterialFamilyHistoryW100Filled';

export default IconMaterialFamilyHistoryW100Filled;
