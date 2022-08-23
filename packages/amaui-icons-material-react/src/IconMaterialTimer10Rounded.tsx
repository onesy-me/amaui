import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer10Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10Rounded'
      short_name='Timer10'

      {...props}
    >
      <path d="M5.125 16.95Q4.8 16.95 4.575 16.725Q4.35 16.5 4.35 16.175V9.15L3.4 9.825Q3.15 10 2.85 9.962Q2.55 9.925 2.375 9.65Q2.225 9.425 2.263 9.15Q2.3 8.875 2.525 8.7L4.125 7.55Q4.35 7.375 4.725 7.362Q5.1 7.35 5.35 7.475Q5.65 7.65 5.775 7.925Q5.9 8.2 5.9 8.55V16.175Q5.9 16.5 5.675 16.725Q5.45 16.95 5.125 16.95ZM11.1 17Q9.075 17 8.113 15.4Q7.15 13.8 7.15 12Q7.15 10.2 8.113 8.6Q9.075 7 11.1 7Q13.125 7 14.062 8.6Q15 10.2 15 12Q15 13.775 14.062 15.387Q13.125 17 11.1 17ZM11.1 15.55Q12.45 15.55 12.95 14.325Q13.45 13.1 13.45 12Q13.45 10.9 12.975 9.675Q12.5 8.45 11.1 8.45Q9.7 8.45 9.225 9.662Q8.75 10.875 8.75 12Q8.75 13.1 9.25 14.325Q9.75 15.55 11.1 15.55ZM19 17Q18.2 17 17.45 16.7Q16.7 16.4 16.225 15.725Q16.075 15.5 16.175 15.212Q16.275 14.925 16.55 14.8Q16.8 14.675 17.1 14.762Q17.4 14.85 17.675 15.125Q17.95 15.4 18.275 15.525Q18.6 15.65 19 15.65Q19.375 15.65 19.863 15.475Q20.35 15.3 20.35 14.8Q20.35 14.375 19.938 14.125Q19.525 13.875 18.85 13.75Q17.9 13.55 17.025 13.087Q16.15 12.625 16.15 11.5Q16.15 10.4 17.038 9.925Q17.925 9.45 18.9 9.45Q19.55 9.45 20.188 9.637Q20.825 9.825 21.25 10.275Q21.475 10.525 21.363 10.862Q21.25 11.2 20.9 11.35Q20.7 11.425 20.488 11.362Q20.275 11.3 20.075 11.125Q19.85 10.925 19.55 10.837Q19.25 10.75 18.9 10.75Q18.55 10.75 18.125 10.9Q17.7 11.05 17.7 11.5Q17.7 11.925 18.05 12.137Q18.4 12.35 19.2 12.5Q20.15 12.7 21.025 13.137Q21.9 13.575 21.9 14.75Q21.9 15.95 20.975 16.475Q20.05 17 19 17Z"/>
    </Icon>
  );
});

IconMaterialTimer10Rounded.displayName = 'AmauiIconMaterialTimer10Rounded';

export default IconMaterialTimer10Rounded;
