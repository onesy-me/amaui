import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffW100Filled'

      short_name='MicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.425 12.95-.55-.6q.05-.15.113-.412.062-.263.087-.588.025-.15.113-.25.087-.1.237-.1t.25.1q.1.1.1.25-.025.5-.125.888-.1.387-.225.712Zm-3.65-3.65-3.4-3.45V5q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v4.3Zm6.95 10.75L2.375 2.7q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.35 17.35q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-9-.05v-3.25q-2.175-.2-3.7-1.725Q5.5 13.5 5.375 11.35q0-.15.1-.25t.25-.1q.125 0 .225.1t.125.25q.125 1.95 1.575 3.3Q9.1 16 11.075 16q1.15 0 2.138-.475.987-.475 1.687-1.3l.5.5q-.725.85-1.75 1.375t-2.225.65V20q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Z"/>
    </Icon>
  );
});

IconMaterialMicOffW100Filled.displayName = 'AmauiIconMaterialMicOffW100Filled';

export default IconMaterialMicOffW100Filled;
