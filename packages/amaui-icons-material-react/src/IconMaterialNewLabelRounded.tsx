import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewLabelRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelRounded'
      short_name='NewLabel'

      {...props}
    >
      <path d="M12 19V17H15Q15 17 15 17Q15 17 15 17L18.55 12L15 7Q15 7 15 7Q15 7 15 7H5Q5 7 5 7Q5 7 5 7V10H3V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85L20.175 10.85Q20.525 11.375 20.525 12Q20.525 12.625 20.175 13.15L16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19ZM11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12Q11.775 12 11.775 12ZM6 20Q5.575 20 5.287 19.712Q5 19.425 5 19V17H3Q2.575 17 2.288 16.712Q2 16.425 2 16Q2 15.575 2.288 15.287Q2.575 15 3 15H5V13Q5 12.575 5.287 12.287Q5.575 12 6 12Q6.425 12 6.713 12.287Q7 12.575 7 13V15H9Q9.425 15 9.713 15.287Q10 15.575 10 16Q10 16.425 9.713 16.712Q9.425 17 9 17H7V19Q7 19.425 6.713 19.712Q6.425 20 6 20Z"/>
    </Icon>
  );
});

export default IconMaterialNewLabelRounded;
