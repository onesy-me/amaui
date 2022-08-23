import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleRoundedFilled'
      short_name='Article'

      {...props}
    >
      <path d="M8 17H13Q13.425 17 13.713 16.712Q14 16.425 14 16Q14 15.575 13.713 15.287Q13.425 15 13 15H8Q7.575 15 7.287 15.287Q7 15.575 7 16Q7 16.425 7.287 16.712Q7.575 17 8 17ZM8 13H16Q16.425 13 16.712 12.712Q17 12.425 17 12Q17 11.575 16.712 11.287Q16.425 11 16 11H8Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13ZM8 9H16Q16.425 9 16.712 8.712Q17 8.425 17 8Q17 7.575 16.712 7.287Q16.425 7 16 7H8Q7.575 7 7.287 7.287Q7 7.575 7 8Q7 8.425 7.287 8.712Q7.575 9 8 9ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialArticleRoundedFilled.displayName = 'AmauiIconMaterialArticleRoundedFilled';

export default IconMaterialArticleRoundedFilled;
