import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchOffW100Filled'

      short_name='WatchOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.9 14.95-.525-.525q.275-.55.45-1.125T17 12q0-2.075-1.462-3.538Q14.075 7 12 7q-.725 0-1.35.188-.625.187-1.075.437l-.5-.5.125-.075.6-2.175q.05-.225.238-.375.187-.15.437-.15h3.05q.25 0 .438.15.187.15.237.375l.6 2.175q1.35.7 2.125 2.063.775 1.362.775 2.887 0 .85-.225 1.575T16.9 14.95Zm-6.425 4.7q-.25 0-.437-.15-.188-.15-.238-.375l-.6-2.175q-1.275-.675-2.087-1.988Q6.3 13.65 6.3 12q0-.8.213-1.562.212-.763.612-1.413L3.05 4.95q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16 16q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-4.1-4.1-.15.1-.6 2.175q-.05.225-.237.375-.188.15-.438.15ZM12 17q.6 0 1.263-.163.662-.162 1.162-.487L7.65 9.575q-.35.575-.5 1.212Q7 11.425 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialWatchOffW100Filled.displayName = 'AmauiIconMaterialWatchOffW100Filled';

export default IconMaterialWatchOffW100Filled;
