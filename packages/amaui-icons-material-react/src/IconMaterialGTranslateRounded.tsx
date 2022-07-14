import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGTranslateRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GTranslateRounded'
      short_name='GTranslate'

      {...props}
    >
      <path d="M12 22 11 19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V4Q2 3.175 2.588 2.587Q3.175 2 4 2H10L10.875 5H20Q20.875 5 21.438 5.562Q22 6.125 22 7V20Q22 20.825 21.438 21.413Q20.875 22 20 22ZM7.15 14.6Q8.875 14.6 9.988 13.488Q11.1 12.375 11.1 10.6Q11.1 10.4 11.088 10.237Q11.075 10.075 11.025 9.9H7.075V11.45H9.3Q9.1 12.15 8.537 12.537Q7.975 12.925 7.175 12.925Q6.2 12.925 5.5 12.225Q4.8 11.525 4.8 10.5Q4.8 9.475 5.5 8.775Q6.2 8.075 7.175 8.075Q7.625 8.075 8.025 8.237Q8.425 8.4 8.75 8.725L9.975 7.55Q9.45 7 8.713 6.7Q7.975 6.4 7.15 6.4Q5.475 6.4 4.288 7.587Q3.1 8.775 3.1 10.5Q3.1 12.225 4.288 13.412Q5.475 14.6 7.15 14.6ZM13.85 15.1 14.4 14.575Q14.05 14.15 13.763 13.75Q13.475 13.35 13.2 12.9ZM15.1 13.825Q15.8 13 16.163 12.25Q16.525 11.5 16.65 11.075H12.675L12.975 12.125H13.975Q14.175 12.5 14.45 12.938Q14.725 13.375 15.1 13.825ZM13 21H20Q20.45 21 20.725 20.712Q21 20.425 21 20V7Q21 6.55 20.725 6.275Q20.45 6 20 6H11.175L12.35 10.05H14.325V9H15.35V10.05H19V11.075H17.725Q17.475 12.025 16.975 12.925Q16.475 13.825 15.8 14.6L18.525 17.275L17.8 18L15.1 15.3L14.2 16.225L15 19Z"/>
    </Icon>
  );
});

export default IconMaterialGTranslateRounded;
