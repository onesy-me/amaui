import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoAccountsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAccountsW100'

      short_name='NoAccounts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.45 11-3.925-3.925q.275-.2.65-.313.375-.112.875-.112 1.175 0 1.988.825.812.825.812 2.025 0 .425-.125.862-.125.438-.275.638ZM6.3 17.6q1.35-.95 2.7-1.45t3-.5q1.4 0 2.538.362 1.137.363 1.812.738l-4.4-4.4q-1.2-.075-1.962-.825-.763-.75-.813-1.95L6.15 6.55Q5.2 7.575 4.6 8.938 4 10.3 4 12q0 1.725.625 3.1T6.3 17.6Zm11.65-.25q.85-1.025 1.45-2.338Q20 13.7 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.575 0-2.938.55Q7.7 5.1 6.65 6.05ZM12 20.7q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3t3.413.675q1.587.675 2.762 1.85t1.85 2.762Q20.7 10.175 20.7 12q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Zm0-.7q1.425 0 2.8-.538 1.375-.537 2.4-1.362-.975-.8-2.425-1.275-1.45-.475-2.775-.475t-2.712.438Q7.9 17.225 6.8 18.1q1.025.825 2.4 1.362Q10.575 20 12 20Zm0-1.825Z"/>
    </Icon>
  );
});

IconMaterialNoAccountsW100.displayName = 'AmauiIconMaterialNoAccountsW100';

export default IconMaterialNoAccountsW100;
