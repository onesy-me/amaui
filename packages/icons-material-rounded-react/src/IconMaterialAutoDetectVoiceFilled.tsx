import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoDetectVoiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDetectVoiceFilled'

      short_name='AutoDetectVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.05 7.95-1.375-.625q-.2-.1-.2-.325t.2-.325L4.05 6.05l.625-1.375q.1-.2.325-.2t.325.2L5.95 6.05l1.375.625q.2.1.2.325t-.2.325L5.95 7.95l-.625 1.375q-.1.2-.325.2t-.325-.2Zm13.325-2.325-.7-.325q-.2-.1-.2-.3 0-.2.2-.3l.7-.325.325-.7q.1-.2.3-.2.2 0 .3.2l.325.7.7.325q.2.1.2.3 0 .2-.2.3l-.7.325-.325.7q-.1.2-.3.2-.2 0-.3-.2Zm2 4-.7-.325q-.2-.1-.2-.3 0-.2.2-.3l.7-.325.325-.7q.1-.2.3-.2.2 0 .3.2l.325.7.7.325q.2.1.2.3 0 .2-.2.3l-.7.325-.325.7q-.1.2-.3.2-.2 0-.3-.2ZM12 15q-1.25 0-2.125-.875T9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q0 1.25-.875 2.125T12 15Zm0 7q-.425 0-.712-.288Q11 21.425 11 21v-2.1q-2.325-.3-3.95-1.925t-1.975-3.9q-.075-.425.225-.75T6.1 12q.35 0 .625.262.275.263.35.638.325 1.75 1.7 2.925Q10.15 17 12 17t3.225-1.175q1.375-1.175 1.7-2.925.075-.375.363-.638.287-.262.637-.262.475 0 .775.325.3.325.225.75-.35 2.275-1.975 3.9T13 18.9V21q0 .425-.287.712Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAutoDetectVoiceFilled.displayName = 'OnesyIconMaterialAutoDetectVoiceFilled';

export default IconMaterialAutoDetectVoiceFilled;
