import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeRoundedFilled'
      short_name='AutoAwesome'

      {...props}
    >
      <path d="M19 8.3Q18.875 8.3 18.738 8.225Q18.6 8.15 18.55 8L17.75 6.25L16 5.45Q15.85 5.4 15.775 5.262Q15.7 5.125 15.7 5Q15.7 4.875 15.775 4.737Q15.85 4.6 16 4.55L17.75 3.75L18.55 2Q18.6 1.85 18.738 1.775Q18.875 1.7 19 1.7Q19.125 1.7 19.263 1.775Q19.4 1.85 19.45 2L20.25 3.75L22 4.55Q22.15 4.6 22.225 4.737Q22.3 4.875 22.3 5Q22.3 5.125 22.225 5.262Q22.15 5.4 22 5.45L20.25 6.25L19.45 8Q19.4 8.15 19.263 8.225Q19.125 8.3 19 8.3ZM19 22.3Q18.875 22.3 18.738 22.225Q18.6 22.15 18.55 22L17.75 20.25L16 19.45Q15.85 19.4 15.775 19.262Q15.7 19.125 15.7 19Q15.7 18.875 15.775 18.738Q15.85 18.6 16 18.55L17.75 17.75L18.55 16Q18.6 15.85 18.738 15.775Q18.875 15.7 19 15.7Q19.125 15.7 19.263 15.775Q19.4 15.85 19.45 16L20.25 17.75L22 18.55Q22.15 18.6 22.225 18.738Q22.3 18.875 22.3 19Q22.3 19.125 22.225 19.262Q22.15 19.4 22 19.45L20.25 20.25L19.45 22Q19.4 22.15 19.263 22.225Q19.125 22.3 19 22.3ZM9 18.575Q8.725 18.575 8.475 18.425Q8.225 18.275 8.1 18L6.5 14.5L3 12.9Q2.725 12.775 2.575 12.525Q2.425 12.275 2.425 12Q2.425 11.725 2.575 11.475Q2.725 11.225 3 11.1L6.5 9.5L8.1 6Q8.225 5.725 8.475 5.575Q8.725 5.425 9 5.425Q9.275 5.425 9.525 5.575Q9.775 5.725 9.9 6L11.5 9.5L15 11.1Q15.275 11.225 15.425 11.475Q15.575 11.725 15.575 12Q15.575 12.275 15.425 12.525Q15.275 12.775 15 12.9L11.5 14.5L9.9 18Q9.775 18.275 9.525 18.425Q9.275 18.575 9 18.575Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeRoundedFilled.displayName = 'AmauiIconMaterialAutoAwesomeRoundedFilled';

export default IconMaterialAutoAwesomeRoundedFilled;
