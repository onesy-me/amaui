import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioButtonCheckedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioButtonCheckedRoundedFilled'
      short_name='RadioButtonChecked'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialRadioButtonCheckedRoundedFilled.displayName = 'AmauiIconMaterialRadioButtonCheckedRoundedFilled';

export default IconMaterialRadioButtonCheckedRoundedFilled;
