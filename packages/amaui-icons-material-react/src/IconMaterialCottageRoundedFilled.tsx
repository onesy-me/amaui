import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCottageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageRoundedFilled'
      short_name='Cottage'

      {...props}
    >
      <path d="M5.3 5Q4.75 5 4.412 4.537Q4.075 4.075 4.375 3.55Q4.775 2.85 5.463 2.425Q6.15 2 7 2Q7.275 2 7.525 1.875Q7.775 1.75 7.9 1.475Q8.025 1.25 8.238 1.125Q8.45 1 8.725 1Q9.3 1 9.6 1.475Q9.9 1.95 9.625 2.45Q9.225 3.15 8.537 3.575Q7.85 4 7 4Q6.725 4 6.475 4.137Q6.225 4.275 6.1 4.525Q5.975 4.775 5.75 4.887Q5.525 5 5.3 5ZM5 21Q4.575 21 4.287 20.712Q4 20.425 4 20V11.625L3 12.4Q2.65 12.65 2.25 12.6Q1.85 12.55 1.6 12.2Q1.35 11.85 1.4 11.45Q1.45 11.05 1.775 10.8L4 9.1V7Q4 6.575 4.287 6.287Q4.575 6 5 6Q5.425 6 5.713 6.287Q6 6.575 6 7V7.575L11.4 3.475Q11.525 3.375 11.675 3.312Q11.825 3.25 12 3.25Q12.175 3.25 12.325 3.312Q12.475 3.375 12.6 3.475L22.225 10.8Q22.55 11.05 22.6 11.45Q22.65 11.85 22.4 12.2Q22.15 12.525 21.75 12.575Q21.35 12.625 21.025 12.375L20 11.625V20Q20 20.425 19.712 20.712Q19.425 21 19 21H13V16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16V21Z"/>
    </Icon>
  );
});

IconMaterialCottageRoundedFilled.displayName = 'AmauiIconMaterialCottageRoundedFilled';

export default IconMaterialCottageRoundedFilled;
