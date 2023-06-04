import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAPhotoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoFilled'

      short_name='AddAPhoto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.825 0-1.412-.587Q1 20.825 1 20V8q0-.825.588-1.412Q2.175 6 3 6h3.15L7.4 4.65q.275-.3.662-.475Q8.45 4 8.875 4H13q.425 0 .713.287Q14 4.575 14 5v2q0 .425.288.713Q14.575 8 15 8h2v2q0 .425.288.712.287.288.712.288h2q.425 0 .712.287.288.288.288.713v8q0 .825-.587 1.413Q19.825 22 19 22Zm8-3.5q1.875 0 3.188-1.312Q15.5 15.875 15.5 14q0-1.875-1.312-3.188Q12.875 9.5 11 9.5q-1.875 0-3.188 1.312Q6.5 12.125 6.5 14q0 1.875 1.312 3.188Q9.125 18.5 11 18.5ZM19 6h-1q-.425 0-.712-.287Q17 5.425 17 5t.288-.713Q17.575 4 18 4h1V3q0-.425.288-.713Q19.575 2 20 2t.712.287Q21 2.575 21 3v1h1q.425 0 .712.287Q23 4.575 23 5t-.288.713Q22.425 6 22 6h-1v1q0 .425-.288.713Q20.425 8 20 8t-.712-.287Q19 7.425 19 7Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoFilled.displayName = 'AmauiIconMaterialAddAPhotoFilled';

export default IconMaterialAddAPhotoFilled;
