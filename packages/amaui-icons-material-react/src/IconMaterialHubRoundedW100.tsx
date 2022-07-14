import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHubRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HubRoundedW100'
      short_name='Hub'

      {...props}
    >
      <path d="M6 22.35Q5.025 22.35 4.338 21.663Q3.65 20.975 3.65 20Q3.65 19.025 4.338 18.337Q5.025 17.65 6 17.65Q6.275 17.65 6.6 17.737Q6.925 17.825 7.2 17.975L10.075 14.4Q9.575 13.875 9.4 13.25Q9.225 12.625 9.35 11.975L5.1 10.575Q4.8 11.15 4.238 11.5Q3.675 11.85 3 11.85Q2.025 11.85 1.337 11.162Q0.65 10.475 0.65 9.5Q0.65 8.525 1.337 7.837Q2.025 7.15 3 7.15Q3.975 7.15 4.663 7.837Q5.35 8.525 5.35 9.5Q5.35 9.65 5.338 9.725Q5.325 9.8 5.325 9.875L9.55 11.35Q9.825 10.8 10.363 10.375Q10.9 9.95 11.65 9.825V5.325Q10.7 5.175 10.175 4.487Q9.65 3.8 9.65 3Q9.65 2.025 10.338 1.337Q11.025 0.65 12 0.65Q12.975 0.65 13.663 1.337Q14.35 2.025 14.35 3Q14.35 3.8 13.825 4.487Q13.3 5.175 12.35 5.325V9.825Q13.1 9.95 13.625 10.375Q14.15 10.8 14.45 11.35L18.675 9.875Q18.65 9.775 18.65 9.712Q18.65 9.65 18.65 9.5Q18.65 8.525 19.338 7.837Q20.025 7.15 21 7.15Q21.975 7.15 22.663 7.837Q23.35 8.525 23.35 9.5Q23.35 10.475 22.663 11.162Q21.975 11.85 21 11.85Q20.325 11.85 19.763 11.5Q19.2 11.15 18.9 10.575L14.65 11.975Q14.775 12.625 14.6 13.25Q14.425 13.875 13.925 14.375L16.8 17.95Q17.075 17.825 17.4 17.737Q17.725 17.65 18 17.65Q18.975 17.65 19.663 18.337Q20.35 19.025 20.35 20Q20.35 20.975 19.663 21.663Q18.975 22.35 18 22.35Q17.025 22.35 16.338 21.663Q15.65 20.975 15.65 20Q15.65 19.575 15.788 19.175Q15.925 18.775 16.275 18.425L13.4 14.8Q12.825 15.2 12.013 15.2Q11.2 15.2 10.6 14.8L7.725 18.425Q8.05 18.775 8.2 19.175Q8.35 19.575 8.35 20Q8.35 20.975 7.662 21.663Q6.975 22.35 6 22.35ZM3 11.15Q3.675 11.15 4.163 10.662Q4.65 10.175 4.65 9.5Q4.65 8.825 4.163 8.337Q3.675 7.85 3 7.85Q2.325 7.85 1.838 8.337Q1.35 8.825 1.35 9.5Q1.35 10.175 1.838 10.662Q2.325 11.15 3 11.15ZM6 21.65Q6.675 21.65 7.163 21.163Q7.65 20.675 7.65 20Q7.65 19.325 7.163 18.837Q6.675 18.35 6 18.35Q5.325 18.35 4.838 18.837Q4.35 19.325 4.35 20Q4.35 20.675 4.838 21.163Q5.325 21.65 6 21.65ZM12 4.65Q12.675 4.65 13.163 4.162Q13.65 3.675 13.65 3Q13.65 2.325 13.163 1.837Q12.675 1.35 12 1.35Q11.325 1.35 10.838 1.837Q10.35 2.325 10.35 3Q10.35 3.675 10.838 4.162Q11.325 4.65 12 4.65ZM12 14.5Q12.825 14.5 13.413 13.912Q14 13.325 14 12.5Q14 11.675 13.413 11.087Q12.825 10.5 12 10.5Q11.175 10.5 10.588 11.087Q10 11.675 10 12.5Q10 13.325 10.588 13.912Q11.175 14.5 12 14.5ZM18 21.65Q18.675 21.65 19.163 21.163Q19.65 20.675 19.65 20Q19.65 19.325 19.163 18.837Q18.675 18.35 18 18.35Q17.325 18.35 16.837 18.837Q16.35 19.325 16.35 20Q16.35 20.675 16.837 21.163Q17.325 21.65 18 21.65ZM21 11.15Q21.675 11.15 22.163 10.662Q22.65 10.175 22.65 9.5Q22.65 8.825 22.163 8.337Q21.675 7.85 21 7.85Q20.325 7.85 19.838 8.337Q19.35 8.825 19.35 9.5Q19.35 10.175 19.838 10.662Q20.325 11.15 21 11.15ZM12 3Q12 3 12 3Q12 3 12 3Q12 3 12 3Q12 3 12 3Q12 3 12 3Q12 3 12 3Q12 3 12 3Q12 3 12 3ZM3 9.5Q3 9.5 3 9.5Q3 9.5 3 9.5Q3 9.5 3 9.5Q3 9.5 3 9.5Q3 9.5 3 9.5Q3 9.5 3 9.5Q3 9.5 3 9.5Q3 9.5 3 9.5ZM12 12.5Q12 12.5 12 12.5Q12 12.5 12 12.5Q12 12.5 12 12.5Q12 12.5 12 12.5Q12 12.5 12 12.5Q12 12.5 12 12.5Q12 12.5 12 12.5Q12 12.5 12 12.5ZM21 9.5Q21 9.5 21 9.5Q21 9.5 21 9.5Q21 9.5 21 9.5Q21 9.5 21 9.5Q21 9.5 21 9.5Q21 9.5 21 9.5Q21 9.5 21 9.5Q21 9.5 21 9.5ZM6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20ZM18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Z"/>
    </Icon>
  );
});

export default IconMaterialHubRoundedW100;
