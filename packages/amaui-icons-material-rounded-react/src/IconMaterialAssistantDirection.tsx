import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantDirection = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirection'

      short_name='AssistantDirection'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23q-2.275 0-4.287-.863-2.013-.862-3.5-2.349-1.488-1.488-2.35-3.5Q1 14.275 1 12q0-2.3.863-4.3.862-2 2.35-3.488 1.487-1.487 3.5-2.35Q9.725 1 12 1q2.3 0 4.3.862 2 .863 3.488 2.35Q21.275 5.7 22.138 7.7 23 9.7 23 12q0 2.275-.862 4.288-.863 2.012-2.35 3.5-1.488 1.487-3.488 2.349Q14.3 23 12 23Zm0-11Zm-.625 7.775q.25.25.575.25.325 0 .575-.25l7.2-7.2q.25-.25.25-.6t-.25-.6l-7.2-7.2q-.25-.25-.575-.25-.325 0-.575.25l-7.2 7.2q-.25.25-.25.6t.25.6Zm-1.4-7.8V14q0 .425-.287.7-.288.275-.713.275t-.712-.287q-.288-.288-.288-.713v-3q0-.425.288-.713.287-.287.712-.287h4.15l-.375-.4q-.275-.3-.262-.713.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l2.1 2.1q.275.275.275.7 0 .425-.275.7L14.15 13.8q-.275.275-.687.262-.413-.012-.688-.287-.3-.3-.312-.713-.013-.412.287-.712l.375-.375ZM12 21q3.775 0 6.387-2.613Q21 15.775 21 12q0-3.775-2.613-6.388Q15.775 3 12 3 8.225 3 5.612 5.612 3 8.225 3 12t2.612 6.387Q8.225 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirection.displayName = 'AmauiIconMaterialAssistantDirection';

export default IconMaterialAssistantDirection;
