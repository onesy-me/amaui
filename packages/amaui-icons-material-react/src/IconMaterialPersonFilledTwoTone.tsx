import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonFilledTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonFilledTwoTone'
      short_name='PersonFilled'

      {...props}
    >
      <path d="M12 12Q10.35 12 9.175 10.825Q8 9.65 8 8Q8 6.35 9.175 5.175Q10.35 4 12 4Q13.65 4 14.825 5.175Q16 6.35 16 8Q16 9.65 14.825 10.825Q13.65 12 12 12ZM4 20V17.2Q4 16.35 4.438 15.637Q4.875 14.925 5.6 14.55Q7.15 13.775 8.75 13.387Q10.35 13 12 13Q13.65 13 15.25 13.387Q16.85 13.775 18.4 14.55Q19.125 14.925 19.562 15.637Q20 16.35 20 17.2V20ZM6 18H18V17.2Q18 16.925 17.863 16.7Q17.725 16.475 17.5 16.35Q16.15 15.675 14.775 15.337Q13.4 15 12 15Q10.6 15 9.225 15.337Q7.85 15.675 6.5 16.35Q6.275 16.475 6.138 16.7Q6 16.925 6 17.2ZM12 10Q12.825 10 13.413 9.412Q14 8.825 14 8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8Q10 8.825 10.588 9.412Q11.175 10 12 10ZM12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8ZM12 18Q12 18 12 18Q12 18 12 18Q12 18 12 18Q12 18 12 18Q12 18 12 18Q12 18 12 18Q12 18 12 18Q12 18 12 18Z"/>
    </Icon>
  );
});

IconMaterialPersonFilledTwoTone.displayName = 'AmauiIconMaterialPersonFilledTwoTone';

export default IconMaterialPersonFilledTwoTone;
