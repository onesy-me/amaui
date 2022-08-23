import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompressRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressRoundedFilled'
      short_name='Compress'

      {...props}
    >
      <path d="M12 22Q11.575 22 11.288 21.712Q11 21.425 11 21V18.8L10.075 19.725Q9.8 20 9.4 20Q9 20 8.7 19.7Q8.425 19.425 8.425 19Q8.425 18.575 8.7 18.3L11.3 15.7Q11.6 15.4 12 15.4Q12.4 15.4 12.7 15.7L15.325 18.325Q15.6 18.6 15.6 19Q15.6 19.4 15.3 19.7Q15.025 19.975 14.613 19.975Q14.2 19.975 13.9 19.7L13 18.85V21.025Q13 21.45 12.713 21.725Q12.425 22 12 22ZM4.975 14Q4.55 14 4.275 13.712Q4 13.425 4 13Q4 12.575 4.287 12.287Q4.575 12 5 12H19.025Q19.45 12 19.725 12.287Q20 12.575 20 13Q20 13.425 19.712 13.712Q19.425 14 19 14ZM4.975 11Q4.55 11 4.275 10.712Q4 10.425 4 10Q4 9.575 4.287 9.287Q4.575 9 5 9H19.025Q19.45 9 19.725 9.287Q20 9.575 20 10Q20 10.425 19.712 10.712Q19.425 11 19 11ZM11.3 7.3 8.675 4.675Q8.4 4.4 8.4 4Q8.4 3.6 8.7 3.3Q8.975 3.025 9.4 3.025Q9.825 3.025 10.1 3.3L11 4.2V1.975Q11 1.55 11.288 1.275Q11.575 1 12 1Q12.425 1 12.713 1.287Q13 1.575 13 2V4.2L13.925 3.275Q14.2 3 14.6 3Q15 3 15.3 3.3Q15.575 3.575 15.575 4Q15.575 4.425 15.3 4.7L12.7 7.3Q12.4 7.6 12 7.6Q11.6 7.6 11.3 7.3Z"/>
    </Icon>
  );
});

IconMaterialCompressRoundedFilled.displayName = 'AmauiIconMaterialCompressRoundedFilled';

export default IconMaterialCompressRoundedFilled;
