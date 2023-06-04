import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchOffFilled'

      short_name='WatchOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.175 15.3-1.5-1.5q.175-.425.25-.862Q17 12.5 17 12q0-2.075-1.462-3.538Q14.075 7 12 7q-.5 0-.938.075-.437.075-.862.25l-2.15-2.15.525-1.75q.2-.65.737-1.038Q9.85 2 10.5 2h3q.65 0 1.188.387.537.388.737 1.038l.925 3.1q1.2.95 1.925 2.375Q19 10.325 19 12q0 .9-.2 1.725-.2.825-.625 1.575ZM10.5 22q-.65 0-1.188-.387-.537-.388-.737-1.038l-.925-3.1q-1.2-.95-1.925-2.375Q5 13.675 5 12q0-.9.225-1.738.225-.837.65-1.587L2.1 4.9q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l17 17q.3.3.3.7 0 .4-.3.7-.3.3-.713.3-.412 0-.712-.3l-3.15-3.125-.525 1.8q-.2.65-.725 1.05-.525.4-1.2.4Zm1.5-5q.5 0 .95-.087.45-.088.875-.263L7.35 10.175q-.175.425-.262.875Q7 11.5 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialWatchOffFilled.displayName = 'AmauiIconMaterialWatchOffFilled';

export default IconMaterialWatchOffFilled;
