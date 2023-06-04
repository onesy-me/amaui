import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPostAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddFilled'

      short_name='PostAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11q-.425 0-.712-.288Q8 10.425 8 10t.288-.713Q8.575 9 9 9h6q.425 0 .713.287Q16 9.575 16 10t-.287.712Q15.425 11 15 11Zm0 3q-.425 0-.712-.288Q8 13.425 8 13t.288-.713Q8.575 12 9 12h6q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 14 15 14Zm0 3q-.425 0-.712-.288Q8 16.425 8 16t.288-.713Q8.575 15 9 15h6q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 17 15 17Zm9-8q-.425 0-.712-.288Q17 8.425 17 8V7h-1q-.425 0-.712-.287Q15 6.425 15 6t.288-.713Q15.575 5 16 5h1V4q0-.425.288-.713Q17.575 3 18 3t.712.287Q19 3.575 19 4v1h1q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-1v1q0 .425-.288.712Q18.425 9 18 9ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h8q.425 0 .713.287Q14 3.575 14 4t-.287.712Q13.425 5 13 5H5v14h14v-8q0-.425.288-.713Q19.575 10 20 10t.712.287Q21 10.575 21 11v8q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialPostAddFilled.displayName = 'AmauiIconMaterialPostAddFilled';

export default IconMaterialPostAddFilled;
