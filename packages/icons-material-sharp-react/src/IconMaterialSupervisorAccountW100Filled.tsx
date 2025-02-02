import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSupervisorAccountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupervisorAccountW100Filled'

      short_name='SupervisorAccount'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M112-232v-52q0-23.54 13.5-43.27Q139-347 162-356q51-26 105.96-39 54.95-13 112.04-13 18 0 36 1.17 18 1.16 36 2.83-39 33-55.5 67.5T380-260v28H112Zm388 0v-30q0-17 8.33-30.53Q516.67-306.06 532-312q33.13-14 68.57-21 35.43-7 73.43-7 35.97 0 71.49 7Q781-326 816-312q15.33 5.94 23.67 19.47Q848-279 848-262v30H500Zm174-200q-30 0-52-22t-22-52q0-30 22-52t52-22q30 0 52 22t22 52q0 30-22 52t-52 22Zm-294-80q-44.55 0-76.27-31.72Q272-575.45 272-620t31.73-76.28Q335.45-728 380-728t76.27 31.72Q488-664.55 488-620t-31.73 76.28Q424.55-512 380-512Z"/>
    </Icon>
  );
});

IconMaterialSupervisorAccountW100Filled.displayName = 'OnesyIconMaterialSupervisorAccountW100Filled';

export default IconMaterialSupervisorAccountW100Filled;
