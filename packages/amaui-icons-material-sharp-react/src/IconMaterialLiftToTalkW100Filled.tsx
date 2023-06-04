import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiftToTalkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiftToTalkW100Filled'

      short_name='LiftToTalk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.575 21.475q-.125 0-.275-.025-.15-.025-.275-.075L6 19.475q-.475-.2-.75-.6-.275-.4-.275-.875 0-.05.1-.525L7.75 9.95H6.575l2.025-3q.175-.25.125-.55-.05-.3-.25-.5l-.1-.1-3.4 2.95q-.45.4-.7.938-.25.537-.25 1.137v4.85H3.3v-4.85q0-.75.313-1.438Q3.925 8.7 4.5 8.2l3.925-3.4.85.875.5-1.4q.175-.5.588-.775.412-.275.887-.275.125 0 .288.037.162.038.287.088l5.025 1.9q.475.2.737.6.263.4.263.875 0 .175-.1.525l-.7 2q.8.025 1.262.5.463.475.463 1.05 0 .225-.062.437-.063.213-.188.413h.625q.65 0 1.1.45.45.45.45 1.1 0 .575-.35.962-.35.388-.875.563.15.2.2.437.05.238.05.438 0 .65-.437 1.1-.438.45-1.088.45h-.65q.125.175.2.412.075.238.075.438 0 .65-.45 1.1-.45.45-1.1.45H13.35l-.3.9q-.175.5-.575.762-.4.263-.9.263ZM16.2 11.65h1.025q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25H16.8Zm-3.5 7.6L16.725 8l-6.6-2.5L6.1 16.75Zm.9-.4h2.675q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25h-2.05Zm.85-2.4h3.75q.35 0 .588-.25.237-.25.237-.6t-.237-.6q-.238-.25-.588-.25h-3.1Zm.875-2.4h3.825q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25h-3.225Z"/>
    </Icon>
  );
});

IconMaterialLiftToTalkW100Filled.displayName = 'AmauiIconMaterialLiftToTalkW100Filled';

export default IconMaterialLiftToTalkW100Filled;
