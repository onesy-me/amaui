import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWavesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavesRoundedFilled'
      short_name='Waves'

      {...props}
    >
      <path d="M2 19.25Q2 18.925 2.237 18.663Q2.475 18.4 2.825 18.3Q3.8 18.05 4.613 17.525Q5.425 17 7 17Q7.95 17 8.562 17.212Q9.175 17.425 9.7 17.688Q10.225 17.95 10.75 18.175Q11.275 18.4 12 18.4Q12.725 18.4 13.25 18.175Q13.775 17.95 14.3 17.688Q14.825 17.425 15.45 17.212Q16.075 17 17 17Q18.575 17 19.388 17.525Q20.2 18.05 21.175 18.3Q21.525 18.4 21.763 18.65Q22 18.9 22 19.25Q22 19.725 21.675 20.025Q21.35 20.325 20.925 20.25Q19.65 20 18.925 19.475Q18.2 18.95 17 18.95Q16.3 18.95 15.788 19.163Q15.275 19.375 14.762 19.637Q14.25 19.9 13.613 20.125Q12.975 20.35 12 20.35Q11.025 20.35 10.387 20.125Q9.75 19.9 9.238 19.637Q8.725 19.375 8.225 19.163Q7.725 18.95 7 18.95Q5.8 18.95 5.075 19.475Q4.35 20 3.075 20.25Q2.65 20.325 2.325 20.025Q2 19.725 2 19.25ZM2 14.8Q2 14.475 2.237 14.212Q2.475 13.95 2.825 13.85Q3.8 13.6 4.613 13.075Q5.425 12.55 7 12.55Q7.95 12.55 8.562 12.762Q9.175 12.975 9.7 13.238Q10.225 13.5 10.75 13.725Q11.275 13.95 12 13.95Q12.725 13.95 13.25 13.725Q13.775 13.5 14.3 13.238Q14.825 12.975 15.45 12.762Q16.075 12.55 17 12.55Q18.575 12.55 19.388 13.075Q20.2 13.6 21.175 13.85Q21.525 13.95 21.763 14.2Q22 14.45 22 14.8Q22 15.275 21.675 15.575Q21.35 15.875 20.925 15.8Q19.65 15.55 18.925 15.025Q18.2 14.5 17 14.5Q16.275 14.5 15.763 14.712Q15.25 14.925 14.738 15.188Q14.225 15.45 13.6 15.675Q12.975 15.9 12 15.9Q11.025 15.9 10.387 15.675Q9.75 15.45 9.238 15.188Q8.725 14.925 8.225 14.712Q7.725 14.5 7 14.5Q5.8 14.5 5.075 15.025Q4.35 15.55 3.075 15.8Q2.65 15.875 2.325 15.575Q2 15.275 2 14.8ZM2 5.9Q2 5.575 2.237 5.312Q2.475 5.05 2.825 4.95Q3.8 4.7 4.613 4.175Q5.425 3.65 7 3.65Q7.95 3.65 8.562 3.862Q9.175 4.075 9.7 4.337Q10.225 4.6 10.75 4.825Q11.275 5.05 12 5.05Q12.725 5.05 13.25 4.825Q13.775 4.6 14.3 4.337Q14.825 4.075 15.45 3.862Q16.075 3.65 17 3.65Q18.575 3.65 19.388 4.175Q20.2 4.7 21.175 4.95Q21.525 5.05 21.763 5.3Q22 5.55 22 5.9Q22 6.375 21.675 6.675Q21.35 6.975 20.925 6.9Q19.65 6.65 18.925 6.125Q18.2 5.6 17 5.6Q16.3 5.6 15.788 5.812Q15.275 6.025 14.762 6.287Q14.25 6.55 13.613 6.775Q12.975 7 12 7Q11.025 7 10.387 6.775Q9.75 6.55 9.238 6.287Q8.725 6.025 8.225 5.812Q7.725 5.6 7 5.6Q5.8 5.6 5.075 6.125Q4.35 6.65 3.075 6.9Q2.65 6.975 2.325 6.675Q2 6.375 2 5.9ZM2 10.35Q2 10.025 2.237 9.762Q2.475 9.5 2.825 9.4Q3.8 9.15 4.613 8.625Q5.425 8.1 7 8.1Q7.95 8.1 8.562 8.312Q9.175 8.525 9.7 8.787Q10.225 9.05 10.75 9.275Q11.275 9.5 12 9.5Q12.725 9.5 13.25 9.275Q13.775 9.05 14.3 8.787Q14.825 8.525 15.45 8.312Q16.075 8.1 17 8.1Q18.575 8.1 19.388 8.625Q20.2 9.15 21.175 9.4Q21.525 9.5 21.763 9.75Q22 10 22 10.35Q22 10.825 21.675 11.125Q21.35 11.425 20.925 11.35Q19.65 11.1 18.925 10.575Q18.2 10.05 17 10.05Q16.3 10.05 15.788 10.262Q15.275 10.475 14.762 10.738Q14.25 11 13.613 11.225Q12.975 11.45 12 11.45Q11.025 11.45 10.387 11.225Q9.75 11 9.238 10.738Q8.725 10.475 8.225 10.262Q7.725 10.05 7 10.05Q5.8 10.05 5.075 10.575Q4.35 11.1 3.075 11.35Q2.65 11.425 2.325 11.125Q2 10.825 2 10.35Z"/>
    </Icon>
  );
});

IconMaterialWavesRoundedFilled.displayName = 'AmauiIconMaterialWavesRoundedFilled';

export default IconMaterialWavesRoundedFilled;
