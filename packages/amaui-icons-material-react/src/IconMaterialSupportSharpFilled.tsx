import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSupportSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportSharpFilled'
      short_name='Support'

      {...props}
    >
      <path d="M19.45 9.1Q18.85 7.525 17.663 6.337Q16.475 5.15 14.9 4.55L13.75 7.35Q14.775 7.725 15.525 8.487Q16.275 9.25 16.7 10.25ZM9.15 4.55Q7.55 5.15 6.35 6.35Q5.15 7.55 4.55 9.15L7.3 10.3Q7.725 9.25 8.488 8.463Q9.25 7.675 10.3 7.3ZM4.55 14.85Q5.125 16.45 6.325 17.65Q7.525 18.85 9.1 19.45L10.3 16.7Q9.25 16.325 8.488 15.537Q7.725 14.75 7.3 13.7ZM14.9 19.45Q16.475 18.85 17.663 17.663Q18.85 16.475 19.45 14.9L16.7 13.7Q16.325 14.75 15.55 15.512Q14.775 16.275 13.75 16.7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialSupportSharpFilled.displayName = 'AmauiIconMaterialSupportSharpFilled';

export default IconMaterialSupportSharpFilled;
