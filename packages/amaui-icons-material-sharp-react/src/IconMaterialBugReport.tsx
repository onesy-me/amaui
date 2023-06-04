import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBugReport = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BugReport'

      short_name='BugReport'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.625 0-3.012-.8Q7.6 19.4 6.8 18H4v-2h2.1q-.075-.5-.087-1Q6 14.5 6 14H4v-2h2q0-.5.013-1 .012-.5.087-1H4V8h2.8q.35-.575.788-1.075.437-.5 1.012-.875L7 4.4 8.4 3l2.15 2.15q.7-.225 1.425-.225.725 0 1.425.225L15.6 3 17 4.4l-1.65 1.65q.575.375 1.038.862Q16.85 7.4 17.2 8H20v2h-2.1q.075.5.088 1 .012.5.012 1h2v2h-2q0 .5-.012 1-.013.5-.088 1H20v2h-2.8q-.8 1.4-2.187 2.2-1.388.8-3.013.8Zm0-2q1.65 0 2.825-1.175Q16 16.65 16 15v-4q0-1.65-1.175-2.825Q13.65 7 12 7q-1.65 0-2.825 1.175Q8 9.35 8 11v4q0 1.65 1.175 2.825Q10.35 19 12 19Zm-2-3h4v-2h-4Zm0-4h4v-2h-4Zm2 1Z"/>
    </Icon>
  );
});

IconMaterialBugReport.displayName = 'AmauiIconMaterialBugReport';

export default IconMaterialBugReport;
