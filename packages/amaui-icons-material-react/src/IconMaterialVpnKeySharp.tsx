import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVpnKeySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeySharp'
      short_name='VpnKey'

      {...props}
    >
      <path d="M7 18Q4.5 18 2.75 16.25Q1 14.5 1 12Q1 9.5 2.75 7.75Q4.5 6 7 6Q8.65 6 10.025 6.825Q11.4 7.65 12.2 9H23V15H21V18H15V15H12.2Q11.4 16.35 10.025 17.175Q8.65 18 7 18ZM7 16Q8.65 16 9.65 14.988Q10.65 13.975 10.85 13H17V16H19V13H21V11H10.85Q10.65 10.025 9.65 9.012Q8.65 8 7 8Q5.35 8 4.175 9.175Q3 10.35 3 12Q3 13.65 4.175 14.825Q5.35 16 7 16ZM7 14Q7.825 14 8.412 13.412Q9 12.825 9 12Q9 11.175 8.412 10.587Q7.825 10 7 10Q6.175 10 5.588 10.587Q5 11.175 5 12Q5 12.825 5.588 13.412Q6.175 14 7 14ZM7 12Q7 12 7 12Q7 12 7 12Q7 12 7 12Q7 12 7 12Q7 12 7 12Q7 12 7 12Q7 12 7 12Q7 12 7 12Z"/>
    </Icon>
  );
});

export default IconMaterialVpnKeySharp;
