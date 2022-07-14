import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAPhotoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoSharpFilled'
      short_name='AddAPhoto'

      {...props}
    >
      <path d="M1 22V6H6.15L8 4H14V8H17V11H21V22ZM11 18.5Q12.875 18.5 14.188 17.188Q15.5 15.875 15.5 14Q15.5 12.125 14.188 10.812Q12.875 9.5 11 9.5Q9.125 9.5 7.812 10.812Q6.5 12.125 6.5 14Q6.5 15.875 7.812 17.188Q9.125 18.5 11 18.5ZM19 8V6H17V4H19V2H21V4H23V6H21V8Z"/>
    </Icon>
  );
});

export default IconMaterialAddAPhotoSharpFilled;
