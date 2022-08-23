import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttractionsRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttractionsRoundedW100'
      short_name='Attractions'

      {...props}
    >
      <path d="M7.325 21.05Q7.125 21.05 7.037 20.9Q6.95 20.75 7.025 20.575L7.9 18.6Q7.45 18.3 7.037 17.962Q6.625 17.625 6.25 17.2Q6.1 17.275 5.925 17.312Q5.75 17.35 5.6 17.35Q4.925 17.35 4.438 16.863Q3.95 16.375 3.95 15.7Q3.95 15.325 4.125 14.975Q4.3 14.625 4.6 14.4Q4.4 13.825 4.3 13.237Q4.2 12.65 4.2 12Q4.2 11.35 4.3 10.762Q4.4 10.175 4.6 9.6Q4.3 9.375 4.125 9.025Q3.95 8.675 3.95 8.3Q3.95 7.625 4.438 7.137Q4.925 6.65 5.6 6.65Q5.75 6.65 5.925 6.687Q6.1 6.725 6.25 6.8Q7.075 5.9 8.113 5.287Q9.15 4.675 10.35 4.4Q10.425 3.8 10.913 3.375Q11.4 2.95 12 2.95Q12.6 2.95 13.088 3.35Q13.575 3.75 13.65 4.35Q14.9 4.625 15.938 5.237Q16.975 5.85 17.8 6.75Q17.95 6.675 18.1 6.662Q18.25 6.65 18.4 6.65Q19.075 6.65 19.562 7.137Q20.05 7.625 20.05 8.3Q20.05 8.675 19.875 9.025Q19.7 9.375 19.4 9.6Q19.6 10.175 19.7 10.762Q19.8 11.35 19.8 12Q19.8 12.65 19.7 13.262Q19.6 13.875 19.4 14.45Q19.675 14.675 19.837 15Q20 15.325 20 15.7Q20 16.375 19.513 16.863Q19.025 17.35 18.35 17.35Q18.2 17.35 18.05 17.325Q17.9 17.3 17.75 17.25Q17.375 17.675 16.988 18.013Q16.6 18.35 16.1 18.65L16.95 20.575Q17.025 20.75 16.925 20.9Q16.825 21.05 16.625 21.05Q16.525 21.05 16.438 21Q16.35 20.95 16.3 20.85L15.5 19Q15.05 19.225 14.6 19.375Q14.15 19.525 13.65 19.65Q13.575 20.25 13.088 20.65Q12.6 21.05 12 21.05Q11.4 21.05 10.913 20.625Q10.425 20.2 10.35 19.6Q9.85 19.475 9.4 19.325Q8.95 19.175 8.5 18.95L7.65 20.85Q7.6 20.95 7.513 21Q7.425 21.05 7.325 21.05ZM8.15 17.95 10.25 13.3Q10.025 13.025 9.913 12.7Q9.8 12.375 9.8 12Q9.8 11.1 10.45 10.45Q11.1 9.8 12 9.8Q12.9 9.8 13.55 10.45Q14.2 11.1 14.2 12Q14.2 12.375 14.062 12.712Q13.925 13.05 13.7 13.35L15.8 18Q16.175 17.775 16.513 17.487Q16.85 17.2 17.15 16.85Q16.925 16.625 16.812 16.337Q16.7 16.05 16.7 15.7Q16.7 14.9 17.363 14.387Q18.025 13.875 18.75 14.1Q18.9 13.6 19 13.087Q19.1 12.575 19.1 12Q19.1 11.425 19 10.912Q18.9 10.4 18.75 9.9Q18.025 10.125 17.388 9.613Q16.75 9.1 16.75 8.3Q16.75 8 16.875 7.713Q17 7.425 17.2 7.2Q16.475 6.4 15.562 5.887Q14.65 5.375 13.6 5.1Q13.45 5.6 13.013 5.925Q12.575 6.25 12 6.25Q11.425 6.25 10.988 5.925Q10.55 5.6 10.4 5.1Q9.35 5.375 8.438 5.887Q7.525 6.4 6.8 7.2Q7 7.425 7.125 7.713Q7.25 8 7.25 8.3Q7.25 9.125 6.588 9.613Q5.925 10.1 5.2 9.9Q5.05 10.4 4.975 10.912Q4.9 11.425 4.9 12Q4.9 12.575 4.975 13.087Q5.05 13.6 5.2 14.1Q5.875 13.875 6.562 14.375Q7.25 14.875 7.25 15.7Q7.25 16.05 7.138 16.312Q7.025 16.575 6.8 16.8Q7.1 17.15 7.438 17.413Q7.775 17.675 8.15 17.95ZM8.75 18.3Q9.125 18.5 9.538 18.637Q9.95 18.775 10.4 18.9Q10.55 18.4 10.988 18.075Q11.425 17.75 12 17.75Q12.575 17.75 13.013 18.075Q13.45 18.4 13.6 18.9Q14.025 18.775 14.425 18.663Q14.825 18.55 15.2 18.35L13.2 13.85Q12.925 14 12.638 14.1Q12.35 14.2 12 14.2Q11.65 14.2 11.338 14.1Q11.025 14 10.75 13.8ZM12 13.5Q12.6 13.5 13.05 13.075Q13.5 12.65 13.5 12Q13.5 11.4 13.05 10.95Q12.6 10.5 12 10.5Q11.35 10.5 10.925 10.95Q10.5 11.4 10.5 12Q10.5 12.65 10.925 13.075Q11.35 13.5 12 13.5ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialAttractionsRoundedW100.displayName = 'AmauiIconMaterialAttractionsRoundedW100';

export default IconMaterialAttractionsRoundedW100;
