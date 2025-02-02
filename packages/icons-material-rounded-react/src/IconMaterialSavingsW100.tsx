import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSavingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsW100'

      short_name='Savings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-172q-20 0-37-13t-22-32q-25-90-39.5-147.5t-22.5-96q-8-38.5-10.5-65T132-580q0-70 49-119t119-49h226q27-36 62-58t72-22q3 0 5.5 2.5t2.5 5.5q0 1-.5 1.5t-.5 2.5q-5 13-10 31t-11 52l125 125h27q13 0 21.5 8.5T828-578v137q0 10-5.5 18T807-412l-82 27-51 170q-6 20-22 31.5T616-172h-24q-25 0-42.5-17.5T532-232v-20H348v20q0 25-17.5 42.5T288-172h-22Zm0-28h22q14 0 23-9t9-23v-48h240v48q0 14 9 23t23 9h24q11 0 19.5-6t11.5-17l55-183 98-33v-141h-40L620-720q0-17 3-38t9-37q-26 7-49.5 29T547-720H300q-58 0-99 41t-41 99q0 39 19 131.5T233-225q3 11 12.5 18t20.5 7Zm374-332q11 0 19.5-8.5T668-560q0-11-8.5-19.5T640-588q-11 0-19.5 8.5T612-560q0 11 8.5 19.5T640-532Zm-134-94q6 0 10-4t4-10q0-6-4-10t-10-4H334q-6 0-10 4t-4 10q0 6 4 10t10 4h172Zm-26 128Z"/>
    </Icon>
  );
});

IconMaterialSavingsW100.displayName = 'OnesyIconMaterialSavingsW100';

export default IconMaterialSavingsW100;
