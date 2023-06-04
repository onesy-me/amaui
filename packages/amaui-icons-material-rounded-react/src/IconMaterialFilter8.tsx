import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter8 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter8'

      short_name='Filter8'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h2q.825 0 1.413-.588Q17 13.825 17 13v-1.5q0-.65-.425-1.075Q16.15 10 15.5 10q.65 0 1.075-.425Q17 9.15 17 8.5V7q0-.825-.587-1.412Q15.825 5 15 5h-2q-.825 0-1.412.588Q11 6.175 11 7v1.5q0 .65.425 1.075Q11.85 10 12.5 10q-.65 0-1.075.425Q11 10.85 11 11.5V13q0 .825.588 1.412Q12.175 15 13 15Zm0-8h2v2h-2V7Zm0 6v-2h2v2Zm-5 5q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialFilter8.displayName = 'AmauiIconMaterialFilter8';

export default IconMaterialFilter8;
