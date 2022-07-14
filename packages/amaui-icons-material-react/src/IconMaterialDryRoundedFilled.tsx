import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryRoundedFilled'
      short_name='Dry'

      {...props}
    >
      <path d="M4 23Q2.75 23 1.875 22.125Q1 21.25 1 20V13.975Q1 13.35 1.25 12.787Q1.5 12.225 1.95 11.8L8.4 5.675Q8.7 5.4 9.125 5.412Q9.55 5.425 9.825 5.725L10.225 6.15Q10.475 6.425 10.5 6.762Q10.525 7.1 10.35 7.4L8.875 10H18.825Q19.325 10 19.663 10.375Q20 10.75 20 11.25Q20 11.775 19.638 12.137Q19.275 12.5 18.75 12.5H12.5Q12.3 12.5 12.15 12.65Q12 12.8 12 13Q12 13.2 12.15 13.35Q12.3 13.5 12.5 13.5H20.75Q21.275 13.5 21.638 13.863Q22 14.225 22 14.75Q22 15.275 21.638 15.637Q21.275 16 20.75 16H12.5Q12.3 16 12.15 16.15Q12 16.3 12 16.5Q12 16.7 12.15 16.85Q12.3 17 12.5 17H19.75Q20.275 17 20.638 17.363Q21 17.725 21 18.25Q21 18.775 20.638 19.137Q20.275 19.5 19.75 19.5H12.5Q12.3 19.5 12.15 19.65Q12 19.8 12 20Q12 20.2 12.15 20.35Q12.3 20.5 12.5 20.5H17.75Q18.275 20.5 18.638 20.863Q19 21.225 19 21.75Q19 22.275 18.638 22.637Q18.275 23 17.75 23ZM16.025 9Q15.625 9 15.387 8.712Q15.15 8.425 15.15 7.95Q15.15 7.45 14.925 6.987Q14.7 6.525 14.35 6.15Q13.675 5.45 13.338 4.6Q13 3.75 13.025 2.825Q13.025 2.475 13.3 2.237Q13.575 2 13.95 2Q14.375 2 14.613 2.275Q14.85 2.55 14.85 3.025Q14.85 3.525 15.025 3.975Q15.2 4.425 15.575 4.8Q16.25 5.5 16.625 6.362Q17 7.225 16.975 8.15Q16.975 8.5 16.688 8.75Q16.4 9 16.025 9ZM20.025 9Q19.625 9 19.388 8.712Q19.15 8.425 19.15 7.95Q19.15 7.45 18.925 6.987Q18.7 6.525 18.35 6.15Q17.675 5.45 17.337 4.6Q17 3.75 17.025 2.825Q17.025 2.475 17.3 2.237Q17.575 2 17.95 2Q18.375 2 18.613 2.275Q18.85 2.55 18.85 3.025Q18.85 3.525 19.025 3.975Q19.2 4.425 19.575 4.8Q20.25 5.5 20.625 6.362Q21 7.225 20.975 8.15Q20.975 8.5 20.688 8.75Q20.4 9 20.025 9Z"/>
    </Icon>
  );
});

export default IconMaterialDryRoundedFilled;
