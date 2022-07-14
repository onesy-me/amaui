import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindReplaceRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceRounded'
      short_name='FindReplace'

      {...props}
    >
      <path d="M5.375 10Q4.825 10 4.525 9.637Q4.225 9.275 4.375 8.775Q5.05 6.675 6.85 5.338Q8.65 4 11 4Q12.475 4 13.763 4.562Q15.05 5.125 16 6.1V5Q16 4.575 16.288 4.287Q16.575 4 17 4Q17.425 4 17.712 4.287Q18 4.575 18 5V9Q18 9.425 17.712 9.712Q17.425 10 17 10H13Q12.575 10 12.288 9.712Q12 9.425 12 9Q12 8.575 12.288 8.287Q12.575 8 13 8H15Q14.275 7.1 13.262 6.55Q12.25 6 11 6Q9.375 6 8.075 6.925Q6.775 7.85 6.275 9.325Q6.175 9.625 5.925 9.812Q5.675 10 5.375 10ZM18.9 20.3 15.2 16.6Q14.3 17.275 13.238 17.637Q12.175 18 11 18Q9.525 18 8.238 17.438Q6.95 16.875 6 15.9V17Q6 17.425 5.713 17.712Q5.425 18 5 18Q4.575 18 4.287 17.712Q4 17.425 4 17V13Q4 12.575 4.287 12.287Q4.575 12 5 12H9Q9.425 12 9.713 12.287Q10 12.575 10 13Q10 13.425 9.713 13.712Q9.425 14 9 14H7Q7.725 14.9 8.738 15.45Q9.75 16 11 16Q12.625 16 13.925 15.075Q15.225 14.15 15.725 12.675Q15.825 12.375 16.075 12.188Q16.325 12 16.625 12Q17.175 12 17.475 12.375Q17.775 12.75 17.625 13.25Q17.45 13.775 17.2 14.262Q16.95 14.75 16.6 15.2L20.3 18.9Q20.575 19.175 20.575 19.6Q20.575 20.025 20.3 20.3Q20.025 20.575 19.6 20.575Q19.175 20.575 18.9 20.3Z"/>
    </Icon>
  );
});

export default IconMaterialFindReplaceRounded;
