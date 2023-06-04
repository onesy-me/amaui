import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvgPaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgPaceFilled'

      short_name='AvgPace'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M610 296q-21 0-35.5-14.5T560 246q0-21 14.5-35.5T610 196q21 0 35.5 14.5T660 246q0 21-14.5 35.5T610 296Zm0 660q-21 0-35.5-14.5T560 906q0-21 14.5-35.5T610 856q21 0 35.5 14.5T660 906q0 21-14.5 35.5T610 956Zm160-520q-21 0-35.5-14.5T720 386q0-21 14.5-35.5T770 336q21 0 35.5 14.5T820 386q0 21-14.5 35.5T770 436Zm0 380q-21 0-35.5-14.5T720 766q0-21 14.5-35.5T770 716q21 0 35.5 14.5T820 766q0 21-14.5 35.5T770 816Zm60-190q-21 0-35.5-14.5T780 576q0-21 14.5-35.5T830 526q21 0 35.5 14.5T880 576q0 21-14.5 35.5T830 626ZM80 576q0-157 104.5-270T441 178q16-2 27.5 9.5T480 216q0 16-10.5 28T443 258q-121 14-202 104t-81 214q0 125 81 214.5T443 894q16 2 26.5 14t10.5 28q0 17-11.5 28.5T441 974q-153-15-257-128T80 576Zm400 80q-33 0-56.5-23.5T400 576q0-5 .5-10.5T403 555l-55-55q-11-11-11-28t11-28q11-11 28-11t28 11l55 55q4-1 21-3 33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Z"/>
    </Icon>
  );
});

IconMaterialAvgPaceFilled.displayName = 'AmauiIconMaterialAvgPaceFilled';

export default IconMaterialAvgPaceFilled;
