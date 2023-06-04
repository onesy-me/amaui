import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbSunny = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbSunny'

      short_name='WbSunny'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 4V1h2v3Zm0 19v-3h2v3Zm9-10v-2h3v2ZM1 13v-2h3v2Zm17.7-6.3-1.4-1.4 1.75-1.8 1.45 1.45ZM4.95 20.5 3.5 19.05l1.8-1.75 1.4 1.4Zm14.1 0-1.75-1.8 1.4-1.4 1.8 1.75ZM5.3 6.7 3.5 4.95 4.95 3.5 6.7 5.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.675 0 2.838-1.163Q16 13.675 16 12q0-1.675-1.162-2.838Q13.675 8 12 8T9.163 9.162Q8 10.325 8 12t1.163 2.837Q10.325 16 12 16Zm0-4Z"/>
    </Icon>
  );
});

IconMaterialWbSunny.displayName = 'AmauiIconMaterialWbSunny';

export default IconMaterialWbSunny;
