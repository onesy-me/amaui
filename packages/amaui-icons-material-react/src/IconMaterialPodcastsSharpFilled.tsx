import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPodcastsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodcastsSharpFilled'
      short_name='Podcasts'

      {...props}
    >
      <path d="M5.1 19.25Q3.675 17.875 2.838 16.012Q2 14.15 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.15 21.163 16.025Q20.325 17.9 18.9 19.25L17.5 17.85Q18.65 16.75 19.325 15.238Q20 13.725 20 12Q20 8.65 17.675 6.325Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 13.725 4.675 15.225Q5.35 16.725 6.525 17.825ZM7.925 16.425Q7.05 15.6 6.525 14.462Q6 13.325 6 12Q6 9.5 7.75 7.75Q9.5 6 12 6Q14.5 6 16.25 7.75Q18 9.5 18 12Q18 13.325 17.475 14.475Q16.95 15.625 16.075 16.425L14.65 15Q15.275 14.425 15.637 13.65Q16 12.875 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 12.9 8.363 13.662Q8.725 14.425 9.35 15ZM11 22V13.725Q10.55 13.45 10.275 13.012Q10 12.575 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.575 13.725 13.025Q13.45 13.475 13 13.725V22Z"/>
    </Icon>
  );
});

export default IconMaterialPodcastsSharpFilled;
