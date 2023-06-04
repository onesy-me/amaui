import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSnippet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippet'

      short_name='TextSnippet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h14V9.825L14.175 5H5v14Zm0 2q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h9.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V19q0 .825-.587 1.413Q19.825 21 19 21Zm3-4h8q.425 0 .712-.288Q17 16.425 17 16t-.288-.713Q16.425 15 16 15H8q-.425 0-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm0-4h8q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm0-4h5q.425 0 .713-.288Q14 8.425 14 8t-.287-.713Q13.425 7 13 7H8q-.425 0-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialTextSnippet.displayName = 'AmauiIconMaterialTextSnippet';

export default IconMaterialTextSnippet;
