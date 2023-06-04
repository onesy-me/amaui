import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChurchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchW100Filled'

      short_name='Church'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.35 21.35q-.275 0-.487-.212-.213-.213-.213-.488v-5.9q0-.2.113-.375.112-.175.312-.25l3.575-1.6v-2.9q0-.2.1-.363.1-.162.275-.262l4.625-2.325V4.15H10q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V1.8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65H14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.65v2.525L16.975 9q.175.1.275.262.1.163.1.363v2.9l3.575 1.6q.2.075.313.25.112.175.112.375v5.9q0 .275-.212.488-.213.212-.488.212h-7V17.9q0-.675-.487-1.162-.488-.488-1.163-.488t-1.162.488q-.488.487-.488 1.162v3.45ZM12 13q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialChurchW100Filled.displayName = 'AmauiIconMaterialChurchW100Filled';

export default IconMaterialChurchW100Filled;
