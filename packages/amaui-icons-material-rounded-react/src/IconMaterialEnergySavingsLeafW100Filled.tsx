import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergySavingsLeafW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergySavingsLeafW100Filled'

      short_name='EnergySavingsLeaf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-1.5 0-2.812-.537-1.313-.538-2.363-1.488l-2.15 2.15q-.1.1-.237.113-.138.012-.263-.113t-.125-.25q0-.125.125-.25l2.15-2.15q-.95-1.05-1.487-2.363Q4.3 13.5 4.3 12q0-3.225 2.25-5.463Q8.8 4.3 12 4.3h6.2q.625 0 1.063.437.437.438.437 1.063V12q0 3.2-2.237 5.45Q15.225 19.7 12 19.7Zm-1.05-3.8 4.125-3.7q.2-.2.113-.438-.088-.237-.363-.287l-3.225-.3L13.55 8.5q.075-.1.063-.213-.013-.112-.088-.212-.1-.1-.225-.1t-.225.1l-4.125 3.7q-.2.2-.125.437.075.238.35.288l3.25.3-1.95 2.675q-.075.1-.062.213.012.112.087.212.1.1.225.1t.225-.1Z"/>
    </Icon>
  );
});

IconMaterialEnergySavingsLeafW100Filled.displayName = 'AmauiIconMaterialEnergySavingsLeafW100Filled';

export default IconMaterialEnergySavingsLeafW100Filled;
