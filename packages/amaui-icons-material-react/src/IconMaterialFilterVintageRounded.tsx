import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterVintageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterVintageRounded'
      short_name='FilterVintage'

      {...props}
    >
      <path d="M12.05 22Q10.625 22 9.525 21.1Q8.425 20.2 8.15 18.8Q6.825 19.225 5.475 18.75Q4.125 18.275 3.4 17.1Q2.65 15.9 2.85 14.438Q3.05 12.975 4.15 12Q3.1 11.05 2.888 9.65Q2.675 8.25 3.35 7.05Q4.025 5.85 5.388 5.312Q6.75 4.775 8.1 5.2Q8.375 3.8 9.475 2.9Q10.575 2 12 2Q13.425 2 14.525 2.9Q15.625 3.8 15.9 5.2Q17.3 4.775 18.613 5.275Q19.925 5.775 20.65 7.05Q21.325 8.3 21.138 9.662Q20.95 11.025 19.85 12Q20.95 12.975 21.163 14.412Q21.375 15.85 20.7 17.1Q19.975 18.375 18.663 18.8Q17.35 19.225 15.95 18.8Q15.675 20.2 14.575 21.1Q13.475 22 12.05 22ZM12.05 20Q13.225 20 13.812 18.988Q14.4 17.975 13.8 17L13.1 15.85Q12.825 15.925 12.575 15.962Q12.325 16 12.05 16Q11.8 16 11.538 15.962Q11.275 15.925 11 15.85L10.3 17Q9.7 17.975 10.288 18.988Q10.875 20 12.05 20ZM5.05 16Q5.65 17.025 6.812 17.025Q7.975 17.025 8.55 16L9.2 14.85Q9 14.65 8.825 14.425Q8.65 14.2 8.525 13.95Q8.4 13.725 8.3 13.488Q8.2 13.25 8.125 13H6.8Q5.625 13 5.05 13.988Q4.475 14.975 5.05 16ZM15.45 16Q16.025 17.025 17.188 17.025Q18.35 17.025 18.95 16Q19.525 14.975 18.95 13.988Q18.375 13 17.2 13H15.875Q15.825 13.25 15.713 13.488Q15.6 13.725 15.475 13.95Q15.35 14.2 15.175 14.425Q15 14.65 14.8 14.85ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM8.125 11Q8.2 10.725 8.312 10.462Q8.425 10.2 8.55 9.975Q8.675 9.75 8.838 9.55Q9 9.35 9.2 9.15L8.55 8Q7.975 6.975 6.812 6.975Q5.65 6.975 5.05 8Q4.475 9.025 5.05 10.012Q5.625 11 6.8 11ZM17.2 11Q18.375 11 18.95 10.012Q19.525 9.025 18.95 8Q18.35 6.975 17.188 6.975Q16.025 6.975 15.45 8L14.8 9.15Q15 9.35 15.163 9.55Q15.325 9.75 15.45 9.975Q15.575 10.2 15.688 10.462Q15.8 10.725 15.875 11ZM10.925 8.15Q11.2 8.075 11.463 8.037Q11.725 8 12 8Q12.275 8 12.538 8.037Q12.8 8.075 13.075 8.15L13.75 7Q14.325 6.025 13.75 5.012Q13.175 4 12 4Q10.825 4 10.25 5Q9.675 6 10.25 7ZM10.925 8.15Q11.2 8.075 11.463 8.037Q11.725 8 12 8Q12.275 8 12.538 8.037Q12.8 8.075 13.075 8.15Q12.8 8.075 12.538 8.037Q12.275 8 12 8Q11.725 8 11.463 8.037Q11.2 8.075 10.925 8.15ZM8.525 13.95Q8.4 13.725 8.3 13.488Q8.2 13.25 8.125 13Q8.2 13.25 8.3 13.488Q8.4 13.725 8.525 13.95Q8.65 14.2 8.825 14.425Q9 14.65 9.2 14.85Q9 14.65 8.825 14.425Q8.65 14.2 8.525 13.95ZM8.125 11Q8.2 10.725 8.312 10.462Q8.425 10.2 8.55 9.975Q8.675 9.75 8.838 9.55Q9 9.35 9.2 9.15Q9 9.35 8.838 9.55Q8.675 9.75 8.55 9.975Q8.425 10.2 8.312 10.462Q8.2 10.725 8.125 11ZM12.05 16Q11.8 16 11.538 15.962Q11.275 15.925 11 15.85Q11.275 15.925 11.538 15.962Q11.8 16 12.05 16Q12.325 16 12.575 15.962Q12.825 15.925 13.1 15.85Q12.825 15.925 12.575 15.962Q12.325 16 12.05 16ZM14.8 14.85Q15 14.65 15.175 14.425Q15.35 14.2 15.475 13.95Q15.6 13.725 15.713 13.488Q15.825 13.25 15.875 13Q15.825 13.25 15.713 13.488Q15.6 13.725 15.475 13.95Q15.35 14.2 15.175 14.425Q15 14.65 14.8 14.85ZM15.875 11Q15.8 10.725 15.688 10.462Q15.575 10.2 15.45 9.975Q15.325 9.75 15.163 9.55Q15 9.35 14.8 9.15Q15 9.35 15.163 9.55Q15.325 9.75 15.45 9.975Q15.575 10.2 15.688 10.462Q15.8 10.725 15.875 11ZM12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialFilterVintageRounded.displayName = 'AmauiIconMaterialFilterVintageRounded';

export default IconMaterialFilterVintageRounded;
