import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOffRoundedFilled'
      short_name='LinkOff'

      {...props}
    >
      <path d="M15.825 13 13.825 11H15.825Q16.25 11 16.538 11.287Q16.825 11.575 16.825 12Q16.825 12.425 16.538 12.712Q16.25 13 15.825 13ZM19.25 16.45 17.75 14.9Q18.725 14.625 19.363 13.837Q20 13.05 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9H14Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7H17Q19.075 7 20.538 8.438Q22 9.875 22 12Q22 13.425 21.25 14.637Q20.5 15.85 19.25 16.45ZM19.1 21.9 2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM10 17H7Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 10.25 3.062 8.912Q4.125 7.575 5.75 7.15L7.6 9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16Q11 16.425 10.713 16.712Q10.425 17 10 17ZM11.6 13H8.175Q7.75 13 7.463 12.712Q7.175 12.425 7.175 12Q7.175 11.575 7.463 11.287Q7.75 11 8.175 11H9.625Z"/>
    </Icon>
  );
});

export default IconMaterialLinkOffRoundedFilled;
