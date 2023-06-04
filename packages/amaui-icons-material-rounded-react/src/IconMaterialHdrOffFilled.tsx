import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffFilled'

      short_name='HdrOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.925 15q-.175 0-.35-.113-.175-.112-.25-.262L18.6 13h-1.1v1.25q0 .1-.012.175-.013.075-.063.15L16 13.15V10q0-.425.288-.713Q16.575 9 17 9h2.5q.6 0 1.05.45.45.45.45 1.05v1q0 .45-.262.812-.263.363-.638.588l.475 1.125q.175.425-.013.7-.187.275-.637.275ZM17.5 11.5h2v-1h-2Zm1.575 10.375L2.1 4.9q-.275-.275-.288-.688Q1.8 3.8 2.1 3.5q.275-.275.7-.275.425 0 .7.275l17 16.95q.3.3.288.7-.013.4-.288.7-.3.3-.712.313-.413.012-.713-.288ZM14.5 11.65 11.85 9H13q.6 0 1.05.45.45.45.45 1.05ZM3 14.25v-4.5q0-.325.213-.538Q3.425 9 3.75 9q.325 0 .537.212.213.213.213.538V11h2V9.75q0-.325.213-.538Q6.925 9 7.25 9q.325 0 .537.212Q8 9.425 8 9.75v4.5q0 .325-.213.537Q7.575 15 7.25 15q-.325 0-.537-.213-.213-.212-.213-.537V12.5h-2v1.75q0 .325-.213.537Q4.075 15 3.75 15q-.325 0-.537-.213Q3 14.575 3 14.25Zm6.5-3.35 1.5 1.5v1.1h1.125l1.375 1.4q-.125.05-.25.075Q13.125 15 13 15H9.5Z"/>
    </Icon>
  );
});

IconMaterialHdrOffFilled.displayName = 'AmauiIconMaterialHdrOffFilled';

export default IconMaterialHdrOffFilled;
