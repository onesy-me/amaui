import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownRounded'
      short_name='ThumbsUpDown'

      {...props}
    >
      <path d="M2 14Q1.175 14 0.588 13.412Q0 12.825 0 12V6.225Q0 5.825 0.15 5.462Q0.3 5.1 0.575 4.825L4.65 0.75Q4.9 0.5 5.275 0.462Q5.65 0.425 5.95 0.625Q6.25 0.825 6.4 1.162Q6.55 1.5 6.475 1.85L5.8 5H10.05Q11.25 5 11.775 5.925Q12.3 6.85 11.9 7.8L9.775 12.775Q9.525 13.35 9.038 13.675Q8.55 14 7.95 14ZM7.95 12 10 7.15V7Q10 7 10 7Q10 7 10 7H3.35L3.95 4.3L2 6.2V12Q2 12 2 12Q2 12 2 12ZM17.85 23.225Q17.6 23.025 17.538 22.725Q17.475 22.425 17.525 22.15L18.2 19H14Q12.8 19 12.238 18.087Q11.675 17.175 12.1 16.2L14.225 11.225Q14.475 10.65 14.963 10.325Q15.45 10 16.05 10H22Q22.825 10 23.413 10.587Q24 11.175 24 12V17.775Q24 18.175 23.85 18.538Q23.7 18.9 23.425 19.175L19.35 23.25Q19.025 23.575 18.6 23.538Q18.175 23.5 17.85 23.225ZM16.05 12 14 16.85V17Q14 17 14 17Q14 17 14 17H20.65L20.05 19.7L22 17.8V12Q22 12 22 12Q22 12 22 12ZM2 12V6.2V7Q2 7 2 7Q2 7 2 7V7.15V12Q2 12 2 12Q2 12 2 12ZM22 12V17.8V17Q22 17 22 17Q22 17 22 17V16.85V12Q22 12 22 12Q22 12 22 12Z"/>
    </Icon>
  );
});

IconMaterialThumbsUpDownRounded.displayName = 'AmauiIconMaterialThumbsUpDownRounded';

export default IconMaterialThumbsUpDownRounded;
