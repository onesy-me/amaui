import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFactoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactoryFilled'

      short_name='Factory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-348q0-24 13-44t36-30l175-74q20-8 38 3t18 33v20l145-58q20-8 37.5 4t17.5 33v61h320v400q0 33-23.5 56.5T800-80H160Zm280-160h80v-160h-80v160Zm-160 0h80v-160h-80v160Zm320 0h80v-160h-80v160Zm272-380H687l29-225q2-15 13.5-25t26.5-10h49q15 0 26 10t13 25l28 225Z"/>
    </Icon>
  );
});

IconMaterialFactoryFilled.displayName = 'OnesyIconMaterialFactoryFilled';

export default IconMaterialFactoryFilled;
