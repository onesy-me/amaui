import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpokeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpokeRounded'
      short_name='Spoke'

      {...props}
    >
      <path d="M12 11Q10.35 11 9.175 9.825Q8 8.65 8 7Q8 5.35 9.175 4.175Q10.35 3 12 3Q13.65 3 14.825 4.175Q16 5.35 16 7Q16 8.65 14.825 9.825Q13.65 11 12 11ZM12 9Q12.825 9 13.413 8.412Q14 7.825 14 7Q14 6.175 13.413 5.588Q12.825 5 12 5Q11.175 5 10.588 5.588Q10 6.175 10 7Q10 7.825 10.588 8.412Q11.175 9 12 9ZM7 21Q5.35 21 4.175 19.825Q3 18.65 3 17Q3 15.35 4.175 14.175Q5.35 13 7 13Q8.65 13 9.825 14.175Q11 15.35 11 17Q11 18.65 9.825 19.825Q8.65 21 7 21ZM7 19Q7.825 19 8.412 18.413Q9 17.825 9 17Q9 16.175 8.412 15.588Q7.825 15 7 15Q6.175 15 5.588 15.588Q5 16.175 5 17Q5 17.825 5.588 18.413Q6.175 19 7 19ZM17 21Q15.35 21 14.175 19.825Q13 18.65 13 17Q13 15.35 14.175 14.175Q15.35 13 17 13Q18.65 13 19.825 14.175Q21 15.35 21 17Q21 18.65 19.825 19.825Q18.65 21 17 21ZM17 19Q17.825 19 18.413 18.413Q19 17.825 19 17Q19 16.175 18.413 15.588Q17.825 15 17 15Q16.175 15 15.588 15.588Q15 16.175 15 17Q15 17.825 15.588 18.413Q16.175 19 17 19ZM12 7Q12 7 12 7Q12 7 12 7Q12 7 12 7Q12 7 12 7Q12 7 12 7Q12 7 12 7Q12 7 12 7Q12 7 12 7ZM7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17Q7 17 7 17ZM17 17Q17 17 17 17Q17 17 17 17Q17 17 17 17Q17 17 17 17Q17 17 17 17Q17 17 17 17Q17 17 17 17Q17 17 17 17Z"/>
    </Icon>
  );
});

IconMaterialSpokeRounded.displayName = 'AmauiIconMaterialSpokeRounded';

export default IconMaterialSpokeRounded;
