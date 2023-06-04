import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoyFilled'

      short_name='Boy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 7.5q-.725 0-1.238-.513-.512-.512-.512-1.237 0-.725.512-1.238Q11.275 4 12 4t1.238.512q.512.513.512 1.238t-.512 1.237Q12.725 7.5 12 7.5ZM11 20q-.425 0-.712-.288Q10 19.425 10 19v-4q-.4 0-.7-.3-.3-.3-.3-.7v-3.5q0-.825.588-1.413Q10.175 8.5 11 8.5h2q.825 0 1.413.587Q15 9.675 15 10.5V14q0 .4-.3.7-.3.3-.7.3v4q0 .425-.287.712Q13.425 20 13 20Z"/>
    </Icon>
  );
});

IconMaterialBoyFilled.displayName = 'AmauiIconMaterialBoyFilled';

export default IconMaterialBoyFilled;
