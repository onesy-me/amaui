import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowboardingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowboardingW100Filled'

      short_name='Snowboarding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 4.6q.65 0 1.125-.475T17.6 3q0-.65-.475-1.125T16 1.4q-.65 0-1.125.475T14.4 3q0 .65.475 1.125T16 4.6ZM17.925 22 5.3 19.3q-1-.2-1.738-.8-.737-.6-1.137-1.475-.025-.05-.025-.175 0-.125.113-.237.112-.113.237-.113.1 0 .188.075.087.075.137.175.35.7.963 1.225.612.525 1.412.675l.975.175 3.775-2.45-1.1-4.625 3.325-5.4h-3.7l-1.85 3.025-.6-.375L8.35 5.65h5.35q.525 0 .838.287.312.288.437.563l.525 1.175Q16.05 8.9 17.125 9.7q1.075.8 2.475.925v.7q-1.525-.075-2.75-.938-1.225-.862-2.15-2.537l-2.75 4.3 3.55 2.775.975 6.075 1.6.325q.175.05.363.062.187.013.362.013.625 0 1.188-.225.562-.225 1.012-.6l.275-.1q.125 0 .225.1t.1.225q0 .1-.038.175-.037.075-.087.125-.5.5-1.212.75-.713.25-1.463.25-.2 0-.425-.025-.225-.025-.45-.075Zm-2.2-1.15-.85-5.425-4.35-3.075.5 4.3-3.625 2.4Z"/>
    </Icon>
  );
});

IconMaterialSnowboardingW100Filled.displayName = 'AmauiIconMaterialSnowboardingW100Filled';

export default IconMaterialSnowboardingW100Filled;
