import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScene = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Scene'

      short_name='Scene'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 22V7q0-.825-.587-1.412Q18.825 5 18 5h-1v1.3q0 .3-.2.5t-.5.2h-5.6q-.35 0-.562-.375-.213-.375-.038-.725L12 1.8q.175-.375.513-.588Q12.85 1 13.3 1h2.3q.6 0 1 .45T17 2.5V3h1q1.65 0 2.825 1.175Q22 5.35 22 7v15ZM12.7 5H15V3h-1.4ZM5 22q-1.275 0-2.138-.863Q2 20.275 2 19v-2.5q0-.825.55-1.538Q3.1 14.25 4 14.1V12q0-.825.588-1.413Q5.175 10 6 10h8q.825 0 1.413.587Q16 11.175 16 12v2.1q.9.15 1.45.825.55.675.55 1.575V19q0 1.275-.862 2.137Q16.275 22 15 22Zm1-10v2.5q.45.375.725.887Q7 15.9 7 16.5v.5h6v-.5q0-.6.275-1.113.275-.512.725-.887V12H6Zm-1 8h10q.45 0 .725-.312Q16 19.375 16 19v-2.5q0-.225-.137-.363Q15.725 16 15.5 16q-.225 0-.363.137-.137.138-.137.363V19H5v-2.5q0-.225-.137-.363Q4.725 16 4.5 16q-.225 0-.362.137Q4 16.275 4 16.5V19q0 .375.275.688Q4.55 20 5 20Zm8.85-16ZM10 17Zm0 3Zm0-1Z"/>
    </Icon>
  );
});

IconMaterialScene.displayName = 'AmauiIconMaterialScene';

export default IconMaterialScene;
