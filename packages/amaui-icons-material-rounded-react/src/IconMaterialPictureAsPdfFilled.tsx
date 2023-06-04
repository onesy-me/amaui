import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureAsPdfFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfFilled'

      short_name='PictureAsPdf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 10.5h1q.425 0 .713-.288Q12 9.925 12 9.5v-1q0-.425-.287-.713Q11.425 7.5 11 7.5H9.5q-.2 0-.35.15Q9 7.8 9 8v4q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35Zm0-1v-1h1v1Zm5 3q.425 0 .713-.288.287-.287.287-.712v-3q0-.425-.287-.713Q15.425 7.5 15 7.5h-1.5q-.2 0-.35.15Q13 7.8 13 8v4q0 .2.15.35.15.15.35.15Zm-1-1v-3h1v3Zm4-1h.5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15H18v-1h.5q.2 0 .35-.15Q19 8.2 19 8q0-.2-.15-.35-.15-.15-.35-.15h-1q-.2 0-.35.15Q17 7.8 17 8v4q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialPictureAsPdfFilled.displayName = 'AmauiIconMaterialPictureAsPdfFilled';

export default IconMaterialPictureAsPdfFilled;
