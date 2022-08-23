import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachFileRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileRoundedW100'
      short_name='AttachFile'

      {...props}
    >
      <path d="M11.5 21.7Q9.475 21.7 8.037 20.262Q6.6 18.825 6.6 16.8V5.5Q6.6 4.025 7.638 2.987Q8.675 1.95 10.15 1.95Q11.625 1.95 12.663 2.987Q13.7 4.025 13.7 5.5V15.65Q13.7 16.575 13.062 17.212Q12.425 17.85 11.5 17.85Q10.575 17.85 9.938 17.212Q9.3 16.575 9.3 15.65V5.85Q9.3 5.7 9.4 5.6Q9.5 5.5 9.65 5.5Q9.8 5.5 9.9 5.6Q10 5.7 10 5.85V15.65Q10 16.275 10.438 16.712Q10.875 17.15 11.5 17.15Q12.15 17.15 12.575 16.712Q13 16.275 13 15.65V5.5Q13 4.3 12.175 3.475Q11.35 2.65 10.15 2.65Q8.95 2.65 8.125 3.475Q7.3 4.3 7.3 5.5V16.8Q7.3 18.55 8.525 19.775Q9.75 21 11.5 21Q13.25 21 14.475 19.775Q15.7 18.55 15.7 16.8V5.85Q15.7 5.7 15.8 5.6Q15.9 5.5 16.05 5.5Q16.2 5.5 16.3 5.6Q16.4 5.7 16.4 5.85V16.8Q16.4 18.825 14.963 20.262Q13.525 21.7 11.5 21.7Z"/>
    </Icon>
  );
});

IconMaterialAttachFileRoundedW100.displayName = 'AmauiIconMaterialAttachFileRoundedW100';

export default IconMaterialAttachFileRoundedW100;
