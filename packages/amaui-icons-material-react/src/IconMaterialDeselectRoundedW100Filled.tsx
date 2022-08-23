import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeselectRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectRoundedW100Filled'
      short_name='Deselect'

      {...props}
    >
      <path d="M4.3 13V11H5V13ZM7 19.7V19H9V19.7ZM11 5V4.3H13V5ZM19 5V4.3Q19.3 4.3 19.5 4.5Q19.7 4.7 19.7 5ZM5 19.7Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19H5ZM4.3 17V15H5V17ZM11 19.7V19H13V19.7ZM19 13V11H19.7V13ZM19 8.75V6.75H19.7V8.75ZM15 5V4.3H17V5ZM9 4.3V5H7.825L7.125 4.3ZM19.7 15V16.875L19 16.175V15ZM9 15H14L9 10ZM15 19.7V19H17V19.7ZM15.7 12.875 15 12.175V9H11.825L11.125 8.3H14.95Q15.275 8.3 15.488 8.512Q15.7 8.725 15.7 9.05ZM4.3 9V7H5V9ZM19.6 20.6 14.7 15.7H9.05Q8.725 15.7 8.512 15.488Q8.3 15.275 8.3 14.95V9.3L3.4 4.4Q3.275 4.275 3.275 4.15Q3.275 4.025 3.4 3.9Q3.525 3.8 3.65 3.787Q3.775 3.775 3.9 3.9L20.1 20.1Q20.2 20.2 20.2 20.337Q20.2 20.475 20.1 20.6Q19.975 20.725 19.85 20.725Q19.725 20.725 19.6 20.6Z"/>
    </Icon>
  );
});

IconMaterialDeselectRoundedW100Filled.displayName = 'AmauiIconMaterialDeselectRoundedW100Filled';

export default IconMaterialDeselectRoundedW100Filled;
