import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddReactionRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddReactionRoundedFilled'
      short_name='AddReaction'

      {...props}
    >
      <path d="M20 5H19Q18.575 5 18.288 4.712Q18 4.425 18 4Q18 3.575 18.288 3.287Q18.575 3 19 3H20V2Q20 1.575 20.288 1.287Q20.575 1 21 1Q21.425 1 21.712 1.287Q22 1.575 22 2V3H23Q23.425 3 23.712 3.287Q24 3.575 24 4Q24 4.425 23.712 4.712Q23.425 5 23 5H22V6Q22 6.425 21.712 6.713Q21.425 7 21 7Q20.575 7 20.288 6.713Q20 6.425 20 6ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q13.125 2 14.188 2.237Q15.25 2.475 16.2 2.925Q16.1 3.175 16.05 3.45Q16 3.725 16 4Q16 5 16.587 5.8Q17.175 6.6 18.125 6.875Q18.4 7.825 19.2 8.412Q20 9 21 9Q21.125 9 21.263 8.988Q21.4 8.975 21.525 8.95Q21.75 9.675 21.875 10.438Q22 11.2 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM15.5 11Q16.15 11 16.575 10.575Q17 10.15 17 9.5Q17 8.85 16.575 8.425Q16.15 8 15.5 8Q14.85 8 14.425 8.425Q14 8.85 14 9.5Q14 10.15 14.425 10.575Q14.85 11 15.5 11ZM8.5 11Q9.15 11 9.575 10.575Q10 10.15 10 9.5Q10 8.85 9.575 8.425Q9.15 8 8.5 8Q7.85 8 7.425 8.425Q7 8.85 7 9.5Q7 10.15 7.425 10.575Q7.85 11 8.5 11ZM12 17.5Q13.775 17.5 15.137 16.525Q16.5 15.55 17.1 14H6.9Q7.5 15.55 8.863 16.525Q10.225 17.5 12 17.5Z"/>
    </Icon>
  );
});

export default IconMaterialAddReactionRoundedFilled;
