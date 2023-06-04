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
      <path d="M610 296q-21 0-35.5-14.5T560 246q0-21 14.5-35.5T610 196q21 0 35.5 14.5T660 246q0 21-14.5 35.5T610 296Zm0 660q-21 0-35.5-14.5T560 906q0-21 14.5-35.5T610 856q21 0 35.5 14.5T660 906q0 21-14.5 35.5T610 956Zm160-520q-21 0-35.5-14.5T720 386q0-21 14.5-35.5T770 336q21 0 35.5 14.5T820 386q0 21-14.5 35.5T770 436Zm0 380q-21 0-35.5-14.5T720 766q0-21 14.5-35.5T770 716q21 0 35.5 14.5T820 766q0 21-14.5 35.5T770 816Zm60-190q-21 0-35.5-14.5T780 576q0-21 14.5-35.5T830 526q21 0 35.5 14.5T880 576q0 21-14.5 35.5T830 626ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176v80q-134 0-227 93t-93 227q0 134 93 227t227 93v80Zm0-320q-33 0-56.5-23.5T400 576q0-5 .5-10.5T403 555l-83-83 56-56 83 83q4-1 21-3 33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Z"/>
    </Icon>
  );
});

IconMaterialAvgPaceFilled.displayName = 'AmauiIconMaterialAvgPaceFilled';

export default IconMaterialAvgPaceFilled;
