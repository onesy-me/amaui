import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileUploadRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUploadRounded'
      short_name='FileUpload'

      {...props}
    >
      <path d="M12 16Q11.575 16 11.288 15.712Q11 15.425 11 15V7.85L9.125 9.725Q8.825 10.025 8.425 10.025Q8.025 10.025 7.7 9.7Q7.4 9.4 7.413 8.987Q7.425 8.575 7.7 8.3L11.3 4.7Q11.45 4.55 11.625 4.487Q11.8 4.425 12 4.425Q12.2 4.425 12.375 4.487Q12.55 4.55 12.7 4.7L16.3 8.3Q16.6 8.6 16.587 9.012Q16.575 9.425 16.3 9.7Q16 10 15.588 10.012Q15.175 10.025 14.875 9.725L13 7.85V15Q13 15.425 12.713 15.712Q12.425 16 12 16ZM6 20Q5.175 20 4.588 19.413Q4 18.825 4 18V16Q4 15.575 4.287 15.287Q4.575 15 5 15Q5.425 15 5.713 15.287Q6 15.575 6 16V18Q6 18 6 18Q6 18 6 18H18Q18 18 18 18Q18 18 18 18V16Q18 15.575 18.288 15.287Q18.575 15 19 15Q19.425 15 19.712 15.287Q20 15.575 20 16V18Q20 18.825 19.413 19.413Q18.825 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialFileUploadRounded.displayName = 'AmauiIconMaterialFileUploadRounded';

export default IconMaterialFileUploadRounded;
