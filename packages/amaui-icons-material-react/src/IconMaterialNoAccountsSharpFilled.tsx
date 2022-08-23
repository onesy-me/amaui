import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoAccountsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAccountsSharpFilled'
      short_name='NoAccounts'

      {...props}
    >
      <path d="M15.2 10.95 10.55 6.3Q10.9 6.15 11.262 6.075Q11.625 6 12 6Q13.475 6 14.488 7.012Q15.5 8.025 15.5 9.5Q15.5 9.875 15.425 10.238Q15.35 10.6 15.2 10.95ZM5.85 17.1Q7.125 16.125 8.7 15.562Q10.275 15 12 15Q12.45 15 12.863 15.037Q13.275 15.075 13.725 15.15L11.525 12.95Q10.35 12.8 9.513 11.962Q8.675 11.125 8.525 9.95L5.675 7.1Q4.875 8.125 4.438 9.363Q4 10.6 4 12Q4 13.475 4.488 14.775Q4.975 16.075 5.85 17.1ZM18.3 16.9Q19.1 15.875 19.55 14.637Q20 13.4 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q10.6 4 9.363 4.45Q8.125 4.9 7.1 5.7ZM12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNoAccountsSharpFilled.displayName = 'AmauiIconMaterialNoAccountsSharpFilled';

export default IconMaterialNoAccountsSharpFilled;
