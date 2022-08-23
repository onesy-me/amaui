import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialErrorRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorRoundedW100Filled'
      short_name='Error'

      {...props}
    >
      <path d="M12 13.2Q12.15 13.2 12.25 13.1Q12.35 13 12.35 12.85V7.525Q12.35 7.4 12.25 7.3Q12.15 7.2 12 7.2Q11.85 7.2 11.75 7.3Q11.65 7.4 11.65 7.55V12.875Q11.65 13 11.75 13.1Q11.85 13.2 12 13.2ZM12 16.3Q12.225 16.3 12.363 16.15Q12.5 16 12.5 15.8Q12.5 15.575 12.363 15.438Q12.225 15.3 12 15.3Q11.8 15.3 11.65 15.438Q11.5 15.575 11.5 15.8Q11.5 16 11.65 16.15Q11.8 16.3 12 16.3ZM12 20.7Q10.175 20.7 8.588 20.025Q7 19.35 5.825 18.175Q4.65 17 3.975 15.412Q3.3 13.825 3.3 12Q3.3 10.175 3.975 8.587Q4.65 7 5.825 5.825Q7 4.65 8.588 3.975Q10.175 3.3 12 3.3Q13.825 3.3 15.413 3.975Q17 4.65 18.175 5.825Q19.35 7 20.025 8.587Q20.7 10.175 20.7 12Q20.7 13.825 20.025 15.412Q19.35 17 18.175 18.175Q17 19.35 15.413 20.025Q13.825 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialErrorRoundedW100Filled.displayName = 'AmauiIconMaterialErrorRoundedW100Filled';

export default IconMaterialErrorRoundedW100Filled;
