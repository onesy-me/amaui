import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryBooksRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksRoundedFilled'
      short_name='LibraryBooks'

      {...props}
    >
      <path d="M11 11H17Q17.425 11 17.712 10.712Q18 10.425 18 10Q18 9.575 17.712 9.287Q17.425 9 17 9H11Q10.575 9 10.288 9.287Q10 9.575 10 10Q10 10.425 10.288 10.712Q10.575 11 11 11ZM11 14H13Q13.425 14 13.713 13.712Q14 13.425 14 13Q14 12.575 13.713 12.287Q13.425 12 13 12H11Q10.575 12 10.288 12.287Q10 12.575 10 13Q10 13.425 10.288 13.712Q10.575 14 11 14ZM11 8H17Q17.425 8 17.712 7.713Q18 7.425 18 7Q18 6.575 17.712 6.287Q17.425 6 17 6H11Q10.575 6 10.288 6.287Q10 6.575 10 7Q10 7.425 10.288 7.713Q10.575 8 11 8ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooksRoundedFilled.displayName = 'AmauiIconMaterialLibraryBooksRoundedFilled';

export default IconMaterialLibraryBooksRoundedFilled;
