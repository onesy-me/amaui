import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClearDayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearDayW100Filled'

      short_name='ClearDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.55q-.15 0-.25-.1t-.1-.25V2.7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.5q0 .15-.1.25t-.25.1Zm4.55 1.9q-.1-.1-.088-.238.013-.137.113-.262L18.3 5.175q.1-.125.25-.125t.275.125q.125.125.125.25t-.125.25L17.05 7.45q-.125.125-.25.125t-.25-.125Zm2.25 4.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-6.8 9.3q-.15 0-.25-.1t-.1-.25v-2.475q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V21.3q0 .15-.1.25t-.25.1ZM6.975 7.45l-1.8-1.75q-.125-.1-.125-.25t.125-.275q.125-.1.263-.1.137 0 .237.1l1.8 1.8q.125.125.113.25-.013.125-.113.225-.125.125-.25.112-.125-.012-.25-.112Zm11.35 11.375-1.75-1.775q-.1-.125-.113-.262-.012-.138.088-.238.1-.1.238-.1.137 0 .262.125l1.775 1.75q.1.1.1.237 0 .138-.1.263-.125.125-.263.125-.137 0-.237-.125ZM2.7 12.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm2.5 6.475q-.1-.125-.112-.263-.013-.137.087-.237l1.75-1.75q.125-.125.25-.125t.25.125q.125.125.125.262 0 .138-.125.263L5.7 18.825q-.125.125-.262.125-.138 0-.238-.125ZM12 16.7q-1.95 0-3.325-1.375Q7.3 13.95 7.3 12q0-1.95 1.375-3.325Q10.05 7.3 12 7.3q1.95 0 3.325 1.375Q16.7 10.05 16.7 12q0 1.95-1.375 3.325Q13.95 16.7 12 16.7Zm0-.7q1.675 0 2.838-1.163Q16 13.675 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.675 1.163 2.837Q10.325 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialClearDayW100Filled.displayName = 'AmauiIconMaterialClearDayW100Filled';

export default IconMaterialClearDayW100Filled;
