import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonePausedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonePausedRounded'
      short_name='PhonePaused'

      {...props}
    >
      <path d="M16 10Q15.575 10 15.288 9.712Q15 9.425 15 9V4Q15 3.575 15.288 3.287Q15.575 3 16 3Q16.425 3 16.712 3.287Q17 3.575 17 4V9Q17 9.425 16.712 9.712Q16.425 10 16 10ZM20 10Q19.575 10 19.288 9.712Q19 9.425 19 9V4Q19 3.575 19.288 3.287Q19.575 3 20 3Q20.425 3 20.712 3.287Q21 3.575 21 4V9Q21 9.425 20.712 9.712Q20.425 10 20 10ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21ZM6.05 9 7.7 7.35Q7.7 7.35 7.7 7.35Q7.7 7.35 7.7 7.35L7.25 5Q7.25 5 7.25 5Q7.25 5 7.25 5H5.05Q5.05 5 5.05 5Q5.05 5 5.05 5Q5.175 6.025 5.4 7.025Q5.625 8.025 6.05 9ZM19 18.95Q19 18.95 19 18.95Q19 18.95 19 18.95V16.75Q19 16.75 19 16.75Q19 16.75 19 16.75L16.65 16.25Q16.65 16.25 16.65 16.25Q16.65 16.25 16.65 16.25L15 17.9Q15.975 18.325 16.975 18.6Q17.975 18.875 19 18.95ZM15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9ZM6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Z"/>
    </Icon>
  );
});

IconMaterialPhonePausedRounded.displayName = 'AmauiIconMaterialPhonePausedRounded';

export default IconMaterialPhonePausedRounded;
