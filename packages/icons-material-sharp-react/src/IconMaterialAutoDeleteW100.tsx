import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteW100'

      short_name='AutoDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-720v520-520Zm150 548H252v-548h-40v-28h148v-28h240v28h148v28h-40v169q-6-1-13.86-1H680v-168H280v520h140q1.85 7.79 4.92 15.4Q428-177 430-172Zm-36-108h14q0-36 7-61.5l7-25.5v-273h-28v360Zm144-232q5.95-4 13.47-8 7.53-4 14.53-7v-113h-28v128ZM679.77-88Q600-88 544-144.23q-56-56.22-56-136Q488-360 544.23-416q56.22-56 136-56Q760-472 816-415.77q56 56.22 56 136Q872-200 815.77-144q-56.22 56-136 56ZM746-194l20-20-72-71.61V-394h-28v120l80 80Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteW100.displayName = 'OnesyIconMaterialAutoDeleteW100';

export default IconMaterialAutoDeleteW100;
