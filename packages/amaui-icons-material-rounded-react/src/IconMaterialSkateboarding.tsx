import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkateboarding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Skateboarding'

      short_name='Skateboarding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 5q.825 0 1.413-.588Q17 3.825 17 3t-.587-1.413Q15.825 1 15 1q-.825 0-1.412.587Q13 2.175 13 3q0 .825.588 1.412Q14.175 5 15 5ZM7.25 24q-.3 0-.525-.225-.225-.225-.225-.525 0-.3.225-.525.225-.225.525-.225.3 0 .525.225.225.225.225.525 0 .3-.225.525Q7.55 24 7.25 24Zm8.5 0q-.3 0-.525-.225Q15 23.55 15 23.25q0-.3.225-.525.225-.225.525-.225.3 0 .525.225.225.225.225.525 0 .3-.225.525-.225.225-.525.225Zm-9-2q-1.125 0-2.075-.488-.95-.487-1.575-1.312-.075-.125-.112-.225-.038-.1-.038-.225 0-.3.2-.525.2-.225.55-.225.2 0 .337.075.138.075.263.225.3.425.762.713.463.287.988.412l3.125-3.775L7.85 12.5q-.125-.425-.075-.85t.275-.8L10.45 7H8.1L6.725 9.2q-.225.35-.625.45-.4.1-.75-.125T4.912 8.9q-.087-.4.113-.75L6.4 5.95q.275-.45.738-.7Q7.6 5 8.1 5h4.6q.675 0 1.088.375.412.375.562.7l.525 1.2q.425 1 1.275 1.7.85.7 1.95.925.4.075.65.375t.25.65q0 .475-.325.763-.325.287-.75.212-1.425-.25-2.575-1.025-1.15-.775-1.875-1.925l-1.8 2.875 3.375 2.1q.45.275.7.725.25.45.25.975V20.5h.3q.725 0 1.35-.325.625-.325 1.05-.875.125-.15.262-.225Q19.1 19 19.3 19q.325 0 .537.225.213.225.213.525 0 .125-.037.225-.038.1-.113.225-.625.825-1.55 1.312-.925.488-2.05.488Zm1.85-1.5H14v-4.6l-3.5-2.2.7 2.275q.15.475.05.963-.1.487-.425.887Z"/>
    </Icon>
  );
});

IconMaterialSkateboarding.displayName = 'AmauiIconMaterialSkateboarding';

export default IconMaterialSkateboarding;
