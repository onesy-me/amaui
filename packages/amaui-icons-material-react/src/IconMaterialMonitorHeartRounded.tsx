import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorHeartRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartRounded'
      short_name='MonitorHeart'

      {...props}
    >
      <path d="M3 9Q2.575 9 2.288 8.712Q2 8.425 2 8V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V8Q22 8.425 21.712 8.712Q21.425 9 21 9Q20.575 9 20.288 8.712Q20 8.425 20 8V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V8Q4 8.425 3.713 8.712Q3.425 9 3 9ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V16Q2 15.575 2.288 15.287Q2.575 15 3 15Q3.425 15 3.713 15.287Q4 15.575 4 16V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V16Q20 15.575 20.288 15.287Q20.575 15 21 15Q21.425 15 21.712 15.287Q22 15.575 22 16V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM10 17Q10.275 17 10.525 16.863Q10.775 16.725 10.9 16.45L14 10.25L15.1 12.45Q15.225 12.725 15.475 12.863Q15.725 13 16 13H21Q21.425 13 21.712 12.712Q22 12.425 22 12Q22 11.575 21.712 11.287Q21.425 11 21 11H16.625L14.9 7.55Q14.625 7.05 14 7.05Q13.375 7.05 13.1 7.55L10 13.75L8.9 11.55Q8.775 11.275 8.525 11.137Q8.275 11 8 11H3Q2.575 11 2.288 11.287Q2 11.575 2 12Q2 12.425 2.288 12.712Q2.575 13 3 13H7.375L9.1 16.45Q9.225 16.725 9.475 16.863Q9.725 17 10 17ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

export default IconMaterialMonitorHeartRounded;
