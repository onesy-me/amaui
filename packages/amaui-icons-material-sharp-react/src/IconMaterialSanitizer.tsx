import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSanitizer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sanitizer'

      short_name='Sanitizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 8q-.625 0-1.062-.438Q15.5 7.125 15.5 6.5q0-.425.425-1.125T17 4q.65.675 1.075 1.375.425.7.425 1.125 0 .625-.438 1.062Q17.625 8 17 8Zm2.5 7q-1.05 0-1.775-.725Q17 13.55 17 12.5q0-.875.775-2.163Q18.55 9.05 19.5 8q.95 1.05 1.725 2.337Q22 11.625 22 12.5q0 1.05-.725 1.775Q20.55 15 19.5 15ZM9 18h2v-2h2v-2h-2v-2H9v2H7v2h2Zm-3 4q-.825 0-1.412-.587Q4 20.825 4 20v-8q0-2.25 1.425-3.9T9 6.1V4H7V2h6q.85 0 1.6.262.75.263 1.4.738l-1.45 1.45q-.35-.2-.738-.325Q13.425 4 13 4h-2v2.1q2.15.35 3.575 2Q16 9.75 16 12v8q0 .825-.587 1.413Q14.825 22 14 22Zm0-2h8v-8q0-1.65-1.175-2.825Q11.65 8 10 8 8.35 8 7.175 9.175 6 10.35 6 12v8Zm0 0h8Z"/>
    </Icon>
  );
});

IconMaterialSanitizer.displayName = 'AmauiIconMaterialSanitizer';

export default IconMaterialSanitizer;
