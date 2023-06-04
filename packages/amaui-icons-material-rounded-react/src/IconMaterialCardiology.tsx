import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardiology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cardiology'

      short_name='Cardiology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M300 216q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518 390h-76q-15-41-55-67.5T300 296q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm180 707q-14 0-28-5t-25-16q-34-31-64.5-59T305 789q-27-26-50.5-49T212 696h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-19 21-42.5 44T656 789q-27 26-58 54t-65 59q-11 11-25 16t-28 5Zm-38-187q13 0 22.5-7.5T478 709l54-163 35 52q5 8 14 13t19 5h280q17 0 28.5-11.5T920 576q0-17-11.5-28.5T880 536H623l-69-102q-6-9-15.5-13.5T518 416q-13 0-22.5 7.5T482 443l-54 162-34-51q-5-8-14-13t-19-5H80q-17 0-28.5 11.5T40 576q0 17 11.5 28.5T80 616h257l69 102q6 9 15.5 13.5T442 736Zm38-167Z"/>
    </Icon>
  );
});

IconMaterialCardiology.displayName = 'AmauiIconMaterialCardiology';

export default IconMaterialCardiology;
