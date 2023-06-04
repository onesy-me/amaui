import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeakAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakAddW100Filled'

      short_name='LeakAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 5.5V4.3h1.2q0 .5-.35.85t-.85.35Zm.35 8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1q3.35-.125 5.688-2.463Q12.675 8 12.8 4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25q-.125 3.65-2.662 6.187Q8.3 13.375 4.65 13.5Zm0-4q-.125 0-.238-.1-.112-.1-.112-.25 0-.125.1-.238.1-.112.25-.137 1.675-.125 2.838-1.288Q8.65 6.325 8.775 4.65 8.8 4.5 8.9 4.4t.25-.1q.15 0 .25.112.1.113.1.238Q9.375 6.625 8 8T4.65 9.5Zm6.2 10.2q-.15 0-.25-.1t-.1-.25q.125-3.65 2.663-6.188Q15.7 10.625 19.35 10.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1q-3.35.125-5.687 2.462Q11.325 16 11.2 19.35q0 .15-.1.25t-.25.1Zm7.65 0q0-.5.35-.85t.85-.35v1.2Zm-3.65 0q-.15 0-.25-.113-.1-.112-.1-.237.125-1.975 1.5-3.35t3.35-1.5q.125 0 .238.1.112.1.112.25 0 .125-.1.237-.1.113-.25.138-1.675.125-2.837 1.287-1.163 1.163-1.288 2.838-.025.15-.125.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialLeakAddW100Filled.displayName = 'AmauiIconMaterialLeakAddW100Filled';

export default IconMaterialLeakAddW100Filled;
