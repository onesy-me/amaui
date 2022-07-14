import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAppShortcutRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppShortcutRounded'
      short_name='AppShortcut'

      {...props}
    >
      <path d="M20.675 10.4 20.35 9.65 19.6 9.325Q19.4 9.225 19.4 9Q19.4 8.775 19.6 8.675L20.35 8.35L20.675 7.6Q20.775 7.4 21 7.4Q21.225 7.4 21.325 7.6L21.65 8.35L22.4 8.675Q22.6 8.775 22.6 9Q22.6 9.225 22.4 9.325L21.65 9.65L21.325 10.4Q21.225 10.6 21 10.6Q20.775 10.6 20.675 10.4ZM15.55 15 14.75 13.25 13 12.45Q12.7 12.325 12.7 12Q12.7 11.675 13 11.55L14.75 10.75L15.55 9Q15.675 8.7 16 8.7Q16.325 8.7 16.45 9L17.25 10.75L19 11.55Q19.3 11.675 19.3 12Q19.3 12.325 19 12.45L17.25 13.25L16.45 15Q16.325 15.3 16 15.3Q15.675 15.3 15.55 15ZM20.675 16.4 20.35 15.65 19.6 15.325Q19.4 15.225 19.4 15Q19.4 14.775 19.6 14.675L20.35 14.35L20.675 13.6Q20.775 13.4 21 13.4Q21.225 13.4 21.325 13.6L21.65 14.35L22.4 14.675Q22.6 14.775 22.6 15Q22.6 15.225 22.4 15.325L21.65 15.65L21.325 16.4Q21.225 16.6 21 16.6Q20.775 16.6 20.675 16.4ZM17 20H7V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21ZM17 4V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3V4ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V7H17V6H7V18H17V17H19V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 21Q7 21 7 21Q7 21 7 21V20V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

export default IconMaterialAppShortcutRounded;
