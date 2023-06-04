import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter3'

      short_name='Filter3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15h3q.825 0 1.413-.588Q17 13.825 17 13v-1.5q0-.65-.425-1.075Q16.15 10 15.5 10q.65 0 1.075-.425Q17 9.15 17 8.5V7q0-.825-.587-1.412Q15.825 5 15 5h-3.025q-.425 0-.7.287Q11 5.575 11 6t.288.713Q11.575 7 12 7h3v2h-1.025q-.425 0-.7.287Q13 9.575 13 10t.288.712Q13.575 11 14 11h1v2h-3.025q-.425 0-.7.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm-4 3q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialFilter3.displayName = 'AmauiIconMaterialFilter3';

export default IconMaterialFilter3;
