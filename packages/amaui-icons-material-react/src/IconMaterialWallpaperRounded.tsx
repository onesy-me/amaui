import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWallpaperRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperRounded'
      short_name='Wallpaper'

      {...props}
    >
      <path d="M15.5 10Q14.85 10 14.425 9.575Q14 9.15 14 8.5Q14 7.85 14.425 7.425Q14.85 7 15.5 7Q16.15 7 16.575 7.425Q17 7.85 17 8.5Q17 9.15 16.575 9.575Q16.15 10 15.5 10ZM4 11Q3.575 11 3.288 10.712Q3 10.425 3 10V5Q3 4.175 3.587 3.587Q4.175 3 5 3H10Q10.425 3 10.713 3.287Q11 3.575 11 4Q11 4.425 10.713 4.712Q10.425 5 10 5H5Q5 5 5 5Q5 5 5 5V10Q5 10.425 4.713 10.712Q4.425 11 4 11ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V14Q3 13.575 3.288 13.287Q3.575 13 4 13Q4.425 13 4.713 13.287Q5 13.575 5 14V19Q5 19 5 19Q5 19 5 19H10Q10.425 19 10.713 19.288Q11 19.575 11 20Q11 20.425 10.713 20.712Q10.425 21 10 21ZM20 11Q19.575 11 19.288 10.712Q19 10.425 19 10V5Q19 5 19 5Q19 5 19 5H14Q13.575 5 13.288 4.712Q13 4.425 13 4Q13 3.575 13.288 3.287Q13.575 3 14 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V10Q21 10.425 20.712 10.712Q20.425 11 20 11ZM14 21Q13.575 21 13.288 20.712Q13 20.425 13 20Q13 19.575 13.288 19.288Q13.575 19 14 19H19Q19 19 19 19Q19 19 19 19V14Q19 13.575 19.288 13.287Q19.575 13 20 13Q20.425 13 20.712 13.287Q21 13.575 21 14V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7 17Q6.7 17 6.55 16.725Q6.4 16.45 6.6 16.2L8.6 13.525Q8.75 13.325 9 13.325Q9.25 13.325 9.4 13.525L11.25 16L13.85 12.525Q14 12.325 14.25 12.325Q14.5 12.325 14.65 12.525L17.4 16.2Q17.6 16.45 17.45 16.725Q17.3 17 17 17Z"/>
    </Icon>
  );
});

export default IconMaterialWallpaperRounded;
