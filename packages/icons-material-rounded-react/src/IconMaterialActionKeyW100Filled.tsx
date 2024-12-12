import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialActionKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ActionKeyW100Filled'

      short_name='ActionKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M644-192q-51.56 0-88.28-36.6t-36.72-88q0-51.4 36.6-87.9 36.6-36.5 88-36.5t87.9 36.42Q768-368.15 768-317q0 21.92-7 41.46T741-240l98 99q2 1.75 3 4.37 1 2.63 1 4.63t-1 4.8q-1 2.8-3 5.2-1.61 1.82-4.02 2.91Q832.57-118 830-118q-3.14 0-5.89-1.09-2.75-1.09-5.11-2.91l-98-97q-16 13-35.5 20t-41.5 7Zm-408 1q-51.15 0-87.57-36.5Q112-264 112-317q0-51.15 36.43-87.58Q184.85-441 236-441q53 0 89.5 36.42Q362-368.15 362-317q0 53-36.5 89.5T236-191Zm408-28q39.6 0 67.8-28 28.2-28 28.2-70 0-39.6-28.2-67.8Q683.6-413 644-413q-42 0-70 28.2T546-317q0 42 28 70t70 28ZM236-597q-51.15 0-87.57-36.5Q112-670 112-723q0-51.15 36.43-87.58Q184.85-847 236-847q53 0 89.5 36.42Q362-774.15 362-723q0 53-36.5 89.5T236-597Zm408 0q-53 0-89.5-36.5T518-723q0-51.15 36.5-87.58Q591-847 644-847q51.15 0 87.58 36.42Q768-774.15 768-723q0 53-36.42 89.5Q695.15-597 644-597Z"/>
    </Icon>
  );
});

IconMaterialActionKeyW100Filled.displayName = 'OnesyIconMaterialActionKeyW100Filled';

export default IconMaterialActionKeyW100Filled;
