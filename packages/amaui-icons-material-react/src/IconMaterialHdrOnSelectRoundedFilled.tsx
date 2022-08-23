import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOnSelectRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnSelectRoundedFilled'
      short_name='HdrOnSelect'

      {...props}
    >
      <path d="M20.5 22V20H18.5V18.5H20.5V16.5H22V18.5H24V20H22V22ZM12 14Q9.5 14 7.75 12.25Q6 10.5 6 8Q6 5.5 7.75 3.75Q9.5 2 12 2Q14.5 2 16.25 3.75Q18 5.5 18 8Q18 10.5 16.25 12.25Q14.5 14 12 14ZM13 22V16H16.5Q17.1 16 17.55 16.45Q18 16.9 18 17.5V18.5Q18 19.075 17.738 19.387Q17.475 19.7 17.1 19.9L18 22H16.5L15.6 20H14.5V22ZM14.5 18.5H16.5Q16.5 18.5 16.5 18.5Q16.5 18.5 16.5 18.5V17.5Q16.5 17.5 16.5 17.5Q16.5 17.5 16.5 17.5H14.5ZM0 22V16H1.5V18H3.5V16H5V22H3.5V19.5H1.5V22ZM6.5 22V16H10Q10.6 16 11.05 16.45Q11.5 16.9 11.5 17.5V20.5Q11.5 21.1 11.05 21.55Q10.6 22 10 22ZM8 20.5H10Q10 20.5 10 20.5Q10 20.5 10 20.5V17.5Q10 17.5 10 17.5Q10 17.5 10 17.5H8Z"/>
    </Icon>
  );
});

IconMaterialHdrOnSelectRoundedFilled.displayName = 'AmauiIconMaterialHdrOnSelectRoundedFilled';

export default IconMaterialHdrOnSelectRoundedFilled;
