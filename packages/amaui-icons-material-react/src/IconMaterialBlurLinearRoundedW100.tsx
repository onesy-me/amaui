import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlurLinearRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurLinearRoundedW100'
      short_name='BlurLinear'

      {...props}
    >
      <path d="M5.25 17.1Q5.7 17.1 6.025 16.775Q6.35 16.45 6.35 16Q6.35 15.55 6.025 15.225Q5.7 14.9 5.25 14.9Q4.8 14.9 4.475 15.225Q4.15 15.55 4.15 16Q4.15 16.45 4.475 16.775Q4.8 17.1 5.25 17.1ZM9.25 12.8Q9.6 12.8 9.825 12.575Q10.05 12.35 10.05 12Q10.05 11.65 9.825 11.425Q9.6 11.2 9.25 11.2Q8.9 11.2 8.675 11.425Q8.45 11.65 8.45 12Q8.45 12.35 8.675 12.575Q8.9 12.8 9.25 12.8ZM9.25 8.8Q9.6 8.8 9.825 8.575Q10.05 8.35 10.05 8Q10.05 7.65 9.825 7.425Q9.6 7.2 9.25 7.2Q8.9 7.2 8.675 7.425Q8.45 7.65 8.45 8Q8.45 8.35 8.675 8.575Q8.9 8.8 9.25 8.8ZM4 20.35Q3.85 20.35 3.75 20.25Q3.65 20.15 3.65 20Q3.65 19.85 3.75 19.75Q3.85 19.65 4 19.65H20Q20.15 19.65 20.25 19.75Q20.35 19.85 20.35 20Q20.35 20.15 20.25 20.25Q20.15 20.35 20 20.35ZM5.25 9.1Q5.7 9.1 6.025 8.775Q6.35 8.45 6.35 8Q6.35 7.55 6.025 7.225Q5.7 6.9 5.25 6.9Q4.8 6.9 4.475 7.225Q4.15 7.55 4.15 8Q4.15 8.45 4.475 8.775Q4.8 9.1 5.25 9.1ZM5.25 13.1Q5.7 13.1 6.025 12.775Q6.35 12.45 6.35 12Q6.35 11.55 6.025 11.225Q5.7 10.9 5.25 10.9Q4.8 10.9 4.475 11.225Q4.15 11.55 4.15 12Q4.15 12.45 4.475 12.775Q4.8 13.1 5.25 13.1ZM9.25 16.8Q9.6 16.8 9.825 16.575Q10.05 16.35 10.05 16Q10.05 15.65 9.825 15.425Q9.6 15.2 9.25 15.2Q8.9 15.2 8.675 15.425Q8.45 15.65 8.45 16Q8.45 16.35 8.675 16.575Q8.9 16.8 9.25 16.8ZM17.25 16.5Q17.475 16.5 17.613 16.363Q17.75 16.225 17.75 16Q17.75 15.775 17.613 15.637Q17.475 15.5 17.25 15.5Q17.025 15.5 16.888 15.637Q16.75 15.775 16.75 16Q16.75 16.225 16.888 16.363Q17.025 16.5 17.25 16.5ZM4 3.65H20Q20.15 3.65 20.25 3.75Q20.35 3.85 20.35 4Q20.35 4.15 20.25 4.25Q20.15 4.35 20 4.35H4Q3.85 4.35 3.75 4.25Q3.65 4.15 3.65 4Q3.65 3.85 3.75 3.75Q3.85 3.65 4 3.65ZM17.25 8.5Q17.475 8.5 17.613 8.363Q17.75 8.225 17.75 8Q17.75 7.775 17.613 7.637Q17.475 7.5 17.25 7.5Q17.025 7.5 16.888 7.637Q16.75 7.775 16.75 8Q16.75 8.225 16.888 8.363Q17.025 8.5 17.25 8.5ZM17.25 12.5Q17.475 12.5 17.613 12.363Q17.75 12.225 17.75 12Q17.75 11.775 17.613 11.637Q17.475 11.5 17.25 11.5Q17.025 11.5 16.888 11.637Q16.75 11.775 16.75 12Q16.75 12.225 16.888 12.363Q17.025 12.5 17.25 12.5ZM13.25 8.8Q13.6 8.8 13.825 8.575Q14.05 8.35 14.05 8Q14.05 7.65 13.825 7.425Q13.6 7.2 13.25 7.2Q12.9 7.2 12.675 7.425Q12.45 7.65 12.45 8Q12.45 8.35 12.675 8.575Q12.9 8.8 13.25 8.8ZM13.25 12.8Q13.6 12.8 13.825 12.575Q14.05 12.35 14.05 12Q14.05 11.65 13.825 11.425Q13.6 11.2 13.25 11.2Q12.9 11.2 12.675 11.425Q12.45 11.65 12.45 12Q12.45 12.35 12.675 12.575Q12.9 12.8 13.25 12.8ZM13.25 16.8Q13.6 16.8 13.825 16.575Q14.05 16.35 14.05 16Q14.05 15.65 13.825 15.425Q13.6 15.2 13.25 15.2Q12.9 15.2 12.675 15.425Q12.45 15.65 12.45 16Q12.45 16.35 12.675 16.575Q12.9 16.8 13.25 16.8ZM3.65 20Q3.65 19.85 3.65 19.75Q3.65 19.65 3.65 19.65Q3.65 19.65 3.65 19.75Q3.65 19.85 3.65 20V4Q3.65 4.15 3.65 4.25Q3.65 4.35 3.65 4.35Q3.65 4.35 3.65 4.25Q3.65 4.15 3.65 4Z"/>
    </Icon>
  );
});

IconMaterialBlurLinearRoundedW100.displayName = 'AmauiIconMaterialBlurLinearRoundedW100';

export default IconMaterialBlurLinearRoundedW100;
