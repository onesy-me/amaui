import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantDirectionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirectionW100Filled'

      short_name='AssistantDirection'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.7q-2.025 0-3.787-.762-1.763-.763-3.075-2.075-1.313-1.313-2.076-3.076Q2.3 14.025 2.3 12t.762-3.8q.763-1.775 2.076-3.088Q6.45 3.8 8.213 3.05 9.975 2.3 12 2.3t3.8.75q1.775.75 3.088 2.062Q20.2 6.425 20.95 8.2q.75 1.775.75 3.8t-.75 3.787q-.75 1.763-2.062 3.076-1.313 1.312-3.088 2.075-1.775.762-3.8.762Zm-.625-3.925q.25.25.575.25.325 0 .575-.25l5.2-5.2q.25-.25.25-.6t-.25-.6l-5.2-5.2q-.25-.25-.575-.25-.325 0-.575.25l-5.2 5.2q-.25.25-.25.6t.25.6Zm-2.05-6.45V14q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25v-3q0-.15.1-.25t.25-.1h5.75L13.2 9.1q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l1.825 1.825q.225.225.225.525 0 .3-.225.525l-1.85 1.85q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l1.5-1.5Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirectionW100Filled.displayName = 'AmauiIconMaterialAssistantDirectionW100Filled';

export default IconMaterialAssistantDirectionW100Filled;
