import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialErrorMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorMedFilled'

      short_name='ErrorMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.225 12.425 1.45 1.975q.15.2.4.2t.4-.2l1.45-1.975L14.35 14.4q.15.2.412.2.263 0 .413-.2l2.25-3.075q.25-.35.188-.75-.063-.4-.413-.65t-.75-.188q-.4.063-.65.413l-1.05 1.425L13.325 9.6q-.15-.2-.412-.2-.263 0-.413.2l-1.425 1.975L9.625 9.6q-.15-.2-.4-.2t-.4.2l-2.25 3.075q-.25.35-.187.75.062.4.412.65t.75.187q.4-.062.65-.412ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialErrorMedFilled.displayName = 'AmauiIconMaterialErrorMedFilled';

export default IconMaterialErrorMedFilled;
