import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDialerSipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSipFilled'

      short_name='DialerSip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 8q-.2 0-.35-.15Q16 7.7 16 7.5v-4q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35v4q0 .2-.15.35-.15.15-.35.15Zm-4 0q-.2 0-.35-.15Q12 7.7 12 7.5q0-.2.15-.35.15-.15.35-.15H14V6h-1.5q-.2 0-.35-.15Q12 5.7 12 5.5v-2q0-.2.15-.35.15-.15.35-.15h2q.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15H13v1h1.5q.2 0 .35.15.15.15.15.35v2q0 .2-.15.35-.15.15-.35.15Zm6 0q-.2 0-.35-.15Q18 7.7 18 7.5v-4q0-.2.15-.35.15-.15.35-.15h2q.2 0 .35.15.15.15.15.35v2q0 .2-.15.35-.15.15-.35.15H19v1.5q0 .2-.15.35-.15.15-.35.15Zm.5-3h1V4h-1Zm.95 16q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialDialerSipFilled.displayName = 'AmauiIconMaterialDialerSipFilled';

export default IconMaterialDialerSipFilled;
