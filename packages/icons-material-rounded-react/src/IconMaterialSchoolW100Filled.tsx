import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchoolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolW100Filled'

      short_name='School'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-378v-206L509-435q-13.66 8-28.83 8-15.17 0-29.17-8L197-574q-8-5-12-11.53-4-6.52-4-14.5 0-7.97 4-14.47 4-6.5 12-11.5l253.96-138.47q6.76-3.77 13.9-5.65Q472-772 480-772t15.13 2q7.12 2 13.87 6l287 155q7.62 3.86 11.81 11.19Q812-590.49 812-582v204q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98ZM451-256l-168-91q-14-8-22.5-22.25T252-400v-116l199 108q13.66 8 28.83 8 15.17 0 29.17-8l199-108v116.18q0 16.82-8.5 30.82T677-347l-168 91q-6.87 4-14.12 6-7.25 2-14.88 2-7.63 0-14.88-2-7.25-2-14.12-6Z"/>
    </Icon>
  );
});

IconMaterialSchoolW100Filled.displayName = 'OnesyIconMaterialSchoolW100Filled';

export default IconMaterialSchoolW100Filled;
