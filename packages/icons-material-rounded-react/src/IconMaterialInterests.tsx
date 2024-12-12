import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInterests = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Interests'

      short_name='Interests'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m113-579 132-238q6-11 15-16t20-5q11 0 20 5t15 16l132 238q5 10 4.5 20t-5.5 19q-5 9-14 14.5t-20 5.5H148q-11 0-20-5.5T114-540q-5-9-5.5-19t4.5-20Zm167 459q-66 0-113-47t-47-113q0-67 47-113.5T280-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-280q0-33-23.5-56.5T280-360q-33 0-56.5 23.5T200-280q0 33 23.5 56.5T280-200Zm-64-400h128l-64-115-64 115Zm304 440v-240q0-17 11.5-28.5T560-440h240q17 0 28.5 11.5T840-400v240q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm80-40h160v-160H600v160Zm54-342-53-45q-69-58-95-91.5T480-753q0-45 31.5-76t78.5-31q27 0 50.5 12.5T680-813q16-22 39.5-34.5T770-860q47 0 78.5 31t31.5 76q0 41-26 74.5T759-587l-53 45q-11 10-26 10t-26-10Zm26-83q72-60 96-85t24-41q0-13-7.5-21t-20.5-8q-10 0-19.5 5.5T729-755l-49 47-49-47q-14-14-23.5-19.5T588-780q-13 0-20.5 8t-7.5 21q0 16 24 41t96 85Zm0-78Zm-400 45Zm0 378Zm400 0Z"/>
    </Icon>
  );
});

IconMaterialInterests.displayName = 'OnesyIconMaterialInterests';

export default IconMaterialInterests;
