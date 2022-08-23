import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureInPictureRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureRoundedFilled'
      short_name='PictureInPicture'

      {...props}
    >
      <path d="M12 13H18Q18.425 13 18.712 12.712Q19 12.425 19 12V8Q19 7.575 18.712 7.287Q18.425 7 18 7H12Q11.575 7 11.288 7.287Q11 7.575 11 8V12Q11 12.425 11.288 12.712Q11.575 13 12 13ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM15 10Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureRoundedFilled.displayName = 'AmauiIconMaterialPictureInPictureRoundedFilled';

export default IconMaterialPictureInPictureRoundedFilled;
