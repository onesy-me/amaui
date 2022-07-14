import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropRotateRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRotateRoundedFilled'
      short_name='CropRotate'

      {...props}
    >
      <path d="M15 13V9Q15 9 15 9Q15 9 15 9H11V7H15Q15.825 7 16.413 7.587Q17 8.175 17 9V13ZM16 19Q15.575 19 15.288 18.712Q15 18.425 15 18V17H9Q8.175 17 7.588 16.413Q7 15.825 7 15V9H6Q5.575 9 5.287 8.712Q5 8.425 5 8Q5 7.575 5.287 7.287Q5.575 7 6 7H7V6Q7 5.575 7.287 5.287Q7.575 5 8 5Q8.425 5 8.713 5.287Q9 5.575 9 6V15Q9 15 9 15Q9 15 9 15H18Q18.425 15 18.712 15.287Q19 15.575 19 16Q19 16.425 18.712 16.712Q18.425 17 18 17H17V18Q17 18.425 16.712 18.712Q16.425 19 16 19ZM22.9 11Q22.525 11 22.238 10.738Q21.95 10.475 21.875 10.1Q21.225 6.825 18.763 4.575Q16.3 2.325 12.9 2.05L13.75 2.9Q14.025 3.175 14.025 3.6Q14.025 4.025 13.75 4.3Q13.475 4.575 13.05 4.575Q12.625 4.575 12.35 4.3L9.65 1.6Q9.2 1.15 9.312 0.7Q9.425 0.25 10.05 0.15Q10.55 0.075 11.025 0.037Q11.5 0 12 0Q16.45 0 19.788 2.825Q23.125 5.65 23.875 9.95Q23.95 10.375 23.663 10.688Q23.375 11 22.9 11ZM12 24Q7.55 24 4.213 21.175Q0.875 18.35 0.125 14.05Q0.05 13.625 0.338 13.312Q0.625 13 1.1 13Q1.475 13 1.763 13.262Q2.05 13.525 2.125 13.9Q2.775 17.175 5.238 19.425Q7.7 21.675 11.1 21.95L10.25 21.1Q9.975 20.825 9.975 20.4Q9.975 19.975 10.25 19.7Q10.525 19.425 10.95 19.425Q11.375 19.425 11.65 19.7L14.35 22.4Q14.8 22.85 14.688 23.3Q14.575 23.75 13.95 23.85Q13.45 23.925 12.975 23.962Q12.5 24 12 24Z"/>
    </Icon>
  );
});

export default IconMaterialCropRotateRoundedFilled;
