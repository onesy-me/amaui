import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHearingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingW100'

      short_name='Hearing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.05 21.35q-1.275 0-2.137-.75-.863-.75-1.363-2.1-.375-1.05-.887-1.688-.513-.637-1.863-1.712-1.5-1.2-2.3-2.688Q7.7 10.925 7.7 9q0-2.725 1.813-4.538Q11.325 2.65 14.05 2.65q2.475 0 4.2 1.475T20.3 7.95q.025.15-.075.275-.1.125-.275.125-.125 0-.212-.088-.088-.087-.113-.212-.275-2.075-1.85-3.388Q16.2 3.35 14.05 3.35q-2.375 0-4.012 1.637Q8.4 6.625 8.4 9q0 1.8.838 3.237.837 1.438 2.112 2.413 1.15.875 1.763 1.638.612.762 1.087 1.962.45 1.125 1.1 1.762.65.638 1.75.638.85 0 1.525-.487.675-.488.95-1.263.05-.1.125-.175.075-.075.2-.075.2 0 .313.138.112.137.062.337-.35.975-1.2 1.6-.85.625-1.975.625Zm-10.975-5.8q-1.125-1.35-1.75-3.013Q3.7 10.875 3.7 9t.625-3.562Q4.95 3.75 6.075 2.4q.1-.1.225-.113.125-.012.25.088.1.1.113.225.012.125-.088.25-1.05 1.275-1.612 2.838Q4.4 7.25 4.4 9q0 1.725.563 3.275.562 1.55 1.612 2.825.1.125.1.25t-.125.225q-.1.1-.238.087-.137-.012-.237-.112ZM14.05 11q-.85 0-1.425-.575Q12.05 9.85 12.05 9q0-.85.575-1.425Q13.2 7 14.05 7q.85 0 1.425.575.575.575.575 1.425 0 .85-.575 1.425Q14.9 11 14.05 11Z"/>
    </Icon>
  );
});

IconMaterialHearingW100.displayName = 'AmauiIconMaterialHearingW100';

export default IconMaterialHearingW100;
