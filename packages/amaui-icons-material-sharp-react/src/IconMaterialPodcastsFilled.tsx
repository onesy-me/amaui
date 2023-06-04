import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodcastsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodcastsFilled'

      short_name='Podcasts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-8.275q-.45-.275-.725-.713Q10 12.575 10 12q0-.825.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .575-.275 1.025-.275.45-.725.7V22Zm-5.9-2.75q-1.425-1.375-2.262-3.238Q2 14.15 2 12q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 2.15-.837 4.025-.838 1.875-2.263 3.225l-1.4-1.4q1.15-1.1 1.825-2.612Q20 13.725 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 1.725.675 3.225t1.85 2.6Zm2.825-2.825q-.875-.825-1.4-1.963Q6 13.325 6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 1.325-.525 2.475-.525 1.15-1.4 1.95L14.65 15q.625-.575.987-1.35Q16 12.875 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 .9.363 1.662.362.763.987 1.338Z"/>
    </Icon>
  );
});

IconMaterialPodcastsFilled.displayName = 'AmauiIconMaterialPodcastsFilled';

export default IconMaterialPodcastsFilled;
