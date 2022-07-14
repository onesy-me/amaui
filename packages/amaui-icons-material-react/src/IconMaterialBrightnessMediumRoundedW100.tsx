import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessMediumRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessMediumRoundedW100'
      short_name='BrightnessMedium'

      {...props}
    >
      <path d="M9.2 18.7H6.8Q6.175 18.7 5.738 18.262Q5.3 17.825 5.3 17.2V14.8L3.55 13.05Q3.125 12.625 3.125 12Q3.125 11.375 3.55 10.95L5.3 9.2V6.8Q5.3 6.175 5.738 5.738Q6.175 5.3 6.8 5.3H9.2L10.95 3.55Q11.375 3.125 12 3.125Q12.625 3.125 13.05 3.55L14.8 5.3H17.2Q17.825 5.3 18.262 5.738Q18.7 6.175 18.7 6.8V9.2L20.45 10.95Q20.875 11.375 20.875 12Q20.875 12.625 20.45 13.05L18.7 14.8V17.2Q18.7 17.825 18.262 18.262Q17.825 18.7 17.2 18.7H14.8L13.05 20.45Q12.625 20.875 12 20.875Q11.375 20.875 10.95 20.45ZM12 12ZM12 16Q13.65 16 14.825 14.825Q16 13.65 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8ZM12 20.5 14.5 18H18V14.5L20.5 12L18 9.5V6H14.5L12 3.5L9.5 6H6V9.5L3.5 12L6 14.5V18H9.5Z"/>
    </Icon>
  );
});

export default IconMaterialBrightnessMediumRoundedW100;
