import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextSnippetRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetRounded'
      short_name='TextSnippet'

      {...props}
    >
      <path d="M5 19H19Q19 19 19 19Q19 19 19 19V9.825Q19 9.825 19 9.825Q19 9.825 19 9.825L14.175 5Q14.175 5 14.175 5Q14.175 5 14.175 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H14.175Q14.575 3 14.938 3.15Q15.3 3.3 15.575 3.575L20.425 8.425Q20.7 8.7 20.85 9.062Q21 9.425 21 9.825V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM8 17H16Q16.425 17 16.712 16.712Q17 16.425 17 16Q17 15.575 16.712 15.287Q16.425 15 16 15H8Q7.575 15 7.287 15.287Q7 15.575 7 16Q7 16.425 7.287 16.712Q7.575 17 8 17ZM8 13H16Q16.425 13 16.712 12.712Q17 12.425 17 12Q17 11.575 16.712 11.287Q16.425 11 16 11H8Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13ZM8 9H13Q13.425 9 13.713 8.712Q14 8.425 14 8Q14 7.575 13.713 7.287Q13.425 7 13 7H8Q7.575 7 7.287 7.287Q7 7.575 7 8Q7 8.425 7.287 8.712Q7.575 9 8 9ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V9.825Q5 9.825 5 9.825Q5 9.825 5 9.825V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

export default IconMaterialTextSnippetRounded;
