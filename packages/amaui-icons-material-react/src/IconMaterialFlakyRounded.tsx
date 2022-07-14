import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlakyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlakyRounded'
      short_name='Flaky'

      {...props}
    >
      <path d="M14.075 15.475 16.025 13.525Q16.25 13.3 16.55 13.3Q16.85 13.3 17.075 13.525Q17.3 13.75 17.3 14.05Q17.3 14.35 17.075 14.575L14.575 17.075Q14.35 17.3 14.05 17.3Q13.75 17.3 13.525 17.075L12.175 15.725Q11.95 15.5 11.95 15.188Q11.95 14.875 12.175 14.65Q12.4 14.425 12.7 14.425Q13 14.425 13.225 14.65ZM8.75 9.8 9.625 10.7Q9.85 10.925 10.15 10.925Q10.45 10.925 10.675 10.7Q10.9 10.475 10.9 10.162Q10.9 9.85 10.675 9.625L9.825 8.75L10.7 7.875Q10.925 7.65 10.925 7.35Q10.925 7.05 10.7 6.825Q10.475 6.6 10.163 6.6Q9.85 6.6 9.625 6.825L8.775 7.675L7.875 6.8Q7.65 6.575 7.35 6.575Q7.05 6.575 6.825 6.8Q6.6 7.025 6.6 7.337Q6.6 7.65 6.825 7.875L7.7 8.725L6.8 9.625Q6.575 9.85 6.575 10.15Q6.575 10.45 6.8 10.675Q7.025 10.9 7.338 10.9Q7.65 10.9 7.875 10.675ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 10.35 19.375 8.9Q18.75 7.45 17.65 6.35L6.35 17.65Q7.45 18.75 8.9 19.375Q10.35 20 12 20Z"/>
    </Icon>
  );
});

export default IconMaterialFlakyRounded;
