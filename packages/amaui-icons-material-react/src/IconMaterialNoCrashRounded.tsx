import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoCrashRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashRounded'
      short_name='NoCrash'

      {...props}
    >
      <path d="M12 3.55 14.85 0.7Q15.125 0.425 15.55 0.425Q15.975 0.425 16.25 0.7Q16.525 0.975 16.525 1.4Q16.525 1.825 16.25 2.1L12.7 5.65Q12.4 5.95 11.988 5.95Q11.575 5.95 11.275 5.65L9.875 4.25Q9.575 3.95 9.575 3.537Q9.575 3.125 9.875 2.825Q10.175 2.525 10.575 2.525Q10.975 2.525 11.275 2.825ZM4 24Q3.575 24 3.288 23.712Q3 23.425 3 23V15L5.1 9Q5.25 8.55 5.638 8.275Q6.025 8 6.5 8H17.5Q17.975 8 18.363 8.275Q18.75 8.55 18.9 9L21 15V23Q21 23.425 20.712 23.712Q20.425 24 20 24H19Q18.575 24 18.288 23.712Q18 23.425 18 23V22H6V23Q6 23.425 5.713 23.712Q5.425 24 5 24ZM5.8 13H18.2L17.15 10H6.85ZM5 20V15V20ZM7.5 19Q8.125 19 8.562 18.562Q9 18.125 9 17.5Q9 16.875 8.562 16.438Q8.125 16 7.5 16Q6.875 16 6.438 16.438Q6 16.875 6 17.5Q6 18.125 6.438 18.562Q6.875 19 7.5 19ZM16.5 19Q17.125 19 17.562 18.562Q18 18.125 18 17.5Q18 16.875 17.562 16.438Q17.125 16 16.5 16Q15.875 16 15.438 16.438Q15 16.875 15 17.5Q15 18.125 15.438 18.562Q15.875 19 16.5 19ZM5 20H19V15H5Z"/>
    </Icon>
  );
});

IconMaterialNoCrashRounded.displayName = 'AmauiIconMaterialNoCrashRounded';

export default IconMaterialNoCrashRounded;
