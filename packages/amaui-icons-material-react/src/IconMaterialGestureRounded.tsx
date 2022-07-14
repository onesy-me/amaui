import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGestureRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GestureRounded'
      short_name='Gesture'

      {...props}
    >
      <path d="M13.85 21.05Q12.525 21.05 11.588 20.138Q10.65 19.225 10.65 17.9Q10.65 17.15 10.975 16.3Q11.3 15.45 11.963 14.688Q12.625 13.925 13.637 13.337Q14.65 12.75 16.025 12.525Q15.95 11.525 15.55 11.112Q15.15 10.7 14.55 10.7Q13.8 10.7 12.925 11.325Q12.05 11.95 10.85 13.375Q8.9 15.7 7.988 16.4Q7.075 17.1 6.025 17.1Q4.75 17.1 3.875 16.163Q3 15.225 3 13.9Q3 12.575 3.587 11.175Q4.175 9.775 5.575 7.825Q6.025 7.175 6.263 6.725Q6.5 6.275 6.5 6Q6.5 5.825 6.438 5.737Q6.375 5.65 6.25 5.65Q6.125 5.65 5.95 5.737Q5.775 5.825 5.575 6Q5.15 6.35 4.688 6.362Q4.225 6.375 3.875 6.025Q3.5 5.65 3.5 5.112Q3.5 4.575 3.85 4.25Q4.45 3.7 5.062 3.425Q5.675 3.15 6.25 3.15Q7.425 3.15 8.213 3.962Q9 4.775 9 5.95Q9 6.675 8.625 7.537Q8.25 8.4 7.375 9.6Q6.425 10.95 5.963 11.975Q5.5 13 5.5 13.725Q5.5 14.15 5.638 14.375Q5.775 14.6 6.025 14.6Q6.325 14.6 6.863 14.087Q7.4 13.575 9.025 11.675Q10.6 9.8 11.875 9Q13.15 8.2 14.55 8.2Q16.475 8.2 17.438 9.475Q18.4 10.75 18.525 12.4H19.75Q20.275 12.4 20.638 12.762Q21 13.125 21 13.65Q21 14.175 20.638 14.537Q20.275 14.9 19.75 14.9H18.525Q18.375 17.1 17.3 19.075Q16.225 21.05 13.85 21.05ZM13.9 18.55Q14.875 18.55 15.363 17.438Q15.85 16.325 16 15.075Q14.6 15.425 13.875 16.287Q13.15 17.15 13.15 17.8Q13.15 18.15 13.35 18.35Q13.55 18.55 13.9 18.55Z"/>
    </Icon>
  );
});

export default IconMaterialGestureRounded;
