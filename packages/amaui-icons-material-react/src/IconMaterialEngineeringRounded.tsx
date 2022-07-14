import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEngineeringRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EngineeringRounded'
      short_name='Engineering'

      {...props}
    >
      <path d="M19.275 10Q19.075 10 18.95 9.887Q18.825 9.775 18.775 9.6L18.65 8.95Q18.425 8.875 18.238 8.762Q18.05 8.65 17.9 8.5L17.225 8.725Q17.05 8.775 16.9 8.712Q16.75 8.65 16.65 8.5L16.35 8Q16.25 7.85 16.275 7.675Q16.3 7.5 16.45 7.375L17 6.9Q16.95 6.775 16.95 6.7Q16.95 6.625 16.95 6.5Q16.95 6.375 16.95 6.3Q16.95 6.225 17 6.1L16.45 5.625Q16.3 5.5 16.275 5.325Q16.25 5.15 16.35 5L16.65 4.5Q16.75 4.35 16.9 4.287Q17.05 4.225 17.225 4.275L17.9 4.5Q18.05 4.35 18.238 4.237Q18.425 4.125 18.65 4.05L18.775 3.4Q18.825 3.225 18.95 3.112Q19.075 3 19.275 3H19.825Q20.025 3 20.15 3.112Q20.275 3.225 20.325 3.4L20.45 4.05Q20.675 4.125 20.863 4.237Q21.05 4.35 21.2 4.5L21.875 4.275Q22.05 4.225 22.2 4.287Q22.35 4.35 22.45 4.5L22.75 5Q22.85 5.15 22.825 5.325Q22.8 5.5 22.65 5.625L22.1 6.1Q22.15 6.225 22.15 6.3Q22.15 6.375 22.15 6.5Q22.15 6.625 22.15 6.7Q22.15 6.775 22.1 6.9L22.65 7.375Q22.8 7.5 22.825 7.675Q22.85 7.85 22.75 8L22.45 8.5Q22.35 8.65 22.2 8.712Q22.05 8.775 21.875 8.725L21.2 8.5Q21.05 8.65 20.863 8.762Q20.675 8.875 20.45 8.95L20.325 9.6Q20.275 9.775 20.15 9.887Q20.025 10 19.825 10ZM19.55 7.75Q20.075 7.75 20.438 7.387Q20.8 7.025 20.8 6.5Q20.8 5.975 20.438 5.612Q20.075 5.25 19.55 5.25Q19.025 5.25 18.663 5.612Q18.3 5.975 18.3 6.5Q18.3 7.025 18.663 7.387Q19.025 7.75 19.55 7.75ZM16.75 15Q16.7 15 16.5 14.8L16.4 14.25Q16.25 14.2 16.113 14.137Q15.975 14.075 15.85 13.95L15.35 14.125Q15.35 14.125 15.05 14.025L14.75 13.475Q14.725 13.45 14.8 13.175L15.2 12.8Q15.2 12.725 15.2 12.65Q15.2 12.575 15.2 12.5Q15.2 12.425 15.2 12.35Q15.2 12.275 15.2 12.2L14.8 11.825Q14.775 11.8 14.75 11.525L15.05 10.975Q15.05 10.975 15.35 10.875L15.85 11.05Q15.95 10.95 16.1 10.875Q16.25 10.8 16.4 10.75L16.5 10.2Q16.5 10.15 16.75 10H17.35Q17.4 10 17.6 10.2L17.7 10.75Q17.85 10.8 18 10.875Q18.15 10.95 18.25 11.05L18.75 10.875Q18.75 10.875 19.05 10.975L19.35 11.525Q19.375 11.55 19.3 11.825L18.9 12.2Q18.9 12.275 18.9 12.35Q18.9 12.425 18.9 12.5Q18.9 12.575 18.9 12.65Q18.9 12.725 18.9 12.8L19.3 13.175Q19.325 13.2 19.35 13.475L19.05 14.025Q19.05 14.025 18.75 14.125L18.25 13.95Q18.125 14.075 17.988 14.137Q17.85 14.2 17.7 14.25L17.6 14.8Q17.6 14.85 17.35 15ZM17.05 13.25Q17.35 13.25 17.575 13.025Q17.8 12.8 17.8 12.5Q17.8 12.2 17.575 11.975Q17.35 11.75 17.05 11.75Q16.75 11.75 16.525 11.975Q16.3 12.2 16.3 12.5Q16.3 12.8 16.525 13.025Q16.75 13.25 17.05 13.25ZM9.05 13Q7.4 13 6.225 11.825Q5.05 10.65 5.05 9H4.8Q4.575 9 4.438 8.863Q4.3 8.725 4.3 8.5Q4.3 8.275 4.438 8.137Q4.575 8 4.8 8H5.05Q5.05 6.875 5.6 5.975Q6.15 5.075 7.05 4.55V5.5Q7.05 5.725 7.188 5.862Q7.325 6 7.55 6Q7.775 6 7.913 5.862Q8.05 5.725 8.05 5.5V4.15Q8.275 4.075 8.525 4.037Q8.775 4 9.05 4Q9.325 4 9.575 4.037Q9.825 4.075 10.05 4.15V5.5Q10.05 5.725 10.188 5.862Q10.325 6 10.55 6Q10.775 6 10.913 5.862Q11.05 5.725 11.05 5.5V4.55Q11.95 5.075 12.5 5.975Q13.05 6.875 13.05 8H13.3Q13.525 8 13.663 8.137Q13.8 8.275 13.8 8.5Q13.8 8.725 13.663 8.863Q13.525 9 13.3 9H13.05Q13.05 10.65 11.875 11.825Q10.7 13 9.05 13ZM9.05 11Q9.875 11 10.463 10.412Q11.05 9.825 11.05 9H7.05Q7.05 9.825 7.638 10.412Q8.225 11 9.05 11ZM1.05 21V18.2Q1.05 17.375 1.475 16.65Q1.9 15.925 2.65 15.55Q3.925 14.9 5.525 14.45Q7.125 14 9.05 14Q10.975 14 12.575 14.45Q14.175 14.9 15.45 15.55Q16.2 15.925 16.625 16.65Q17.05 17.375 17.05 18.2V21ZM3.05 19H15.05V18.2Q15.05 17.925 14.913 17.7Q14.775 17.475 14.55 17.35Q13.65 16.9 12.238 16.45Q10.825 16 9.05 16Q7.275 16 5.863 16.45Q4.45 16.9 3.55 17.35Q3.325 17.475 3.188 17.7Q3.05 17.925 3.05 18.2ZM9.05 19Q9.05 19 9.05 19Q9.05 19 9.05 19Q9.05 19 9.05 19Q9.05 19 9.05 19Q9.05 19 9.05 19Q9.05 19 9.05 19Q9.05 19 9.05 19Q9.05 19 9.05 19Z"/>
    </Icon>
  );
});

export default IconMaterialEngineeringRounded;
