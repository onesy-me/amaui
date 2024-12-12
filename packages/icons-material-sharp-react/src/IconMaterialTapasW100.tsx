import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapasW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasW100'

      short_name='Tapas'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M286-60v-386h-86q-31.08 0-52.54-21.44Q126-488.89 126-519.94q0-31.06 21.46-52.56Q168.92-594 200-594h86v-52h-86q-31.08 0-52.54-21.44Q126-688.89 126-719.94q0-31.06 21.46-52.56Q168.92-794 200-794h86v-106h28v106h86q31.08 0 52.54 21.44Q474-751.11 474-720.06q0 31.06-21.46 52.56Q431.08-646 400-646h-86v52h86q31.08 0 52.54 21.44Q474-551.11 474-520.06q0 31.06-21.46 52.56Q431.08-446 400-446h-86v386h-28Zm-86-414h200q19 0 32.5-13.5T446-520q0-19-13.5-32.5T400-566H200q-19 0-32.5 13.5T154-520q0 19 13.5 32.5T200-474Zm0-200h200q19 0 32.5-13.5T446-720q0-19-13.5-32.5T400-766H200q-19 0-32.5 13.5T154-720q0 19 13.5 32.5T200-674ZM606-60v-28h80v-338q-50-13-85-48.5T566-560v-340h268v340q0 50-35 85.5T714-426v338h80v28H606Zm94-394q45 0 75.5-30.5T806-560v-106H594v106q0 45 30.5 75.5T700-454ZM594-694h212v-178H594v178ZM154-474v-92 92Zm0-200v-92 92Zm546 8Z"/>
    </Icon>
  );
});

IconMaterialTapasW100.displayName = 'OnesyIconMaterialTapasW100';

export default IconMaterialTapasW100;
