import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadRoundedFilled'
      short_name='Download'

      {...props}
    >
      <path d="M12 15.575Q11.8 15.575 11.625 15.512Q11.45 15.45 11.3 15.3L7.7 11.7Q7.425 11.425 7.425 11Q7.425 10.575 7.7 10.3Q7.975 10.025 8.412 10.012Q8.85 10 9.125 10.275L11 12.15V5Q11 4.575 11.288 4.287Q11.575 4 12 4Q12.425 4 12.713 4.287Q13 4.575 13 5V12.15L14.875 10.275Q15.15 10 15.588 10.012Q16.025 10.025 16.3 10.3Q16.575 10.575 16.575 11Q16.575 11.425 16.3 11.7L12.7 15.3Q12.55 15.45 12.375 15.512Q12.2 15.575 12 15.575ZM6 20Q5.175 20 4.588 19.413Q4 18.825 4 18V16Q4 15.575 4.287 15.287Q4.575 15 5 15Q5.425 15 5.713 15.287Q6 15.575 6 16V18Q6 18 6 18Q6 18 6 18H18Q18 18 18 18Q18 18 18 18V16Q18 15.575 18.288 15.287Q18.575 15 19 15Q19.425 15 19.712 15.287Q20 15.575 20 16V18Q20 18.825 19.413 19.413Q18.825 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialDownloadRoundedFilled.displayName = 'AmauiIconMaterialDownloadRoundedFilled';

export default IconMaterialDownloadRoundedFilled;
