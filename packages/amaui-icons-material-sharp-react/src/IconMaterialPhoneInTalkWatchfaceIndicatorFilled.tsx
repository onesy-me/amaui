import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneInTalkWatchfaceIndicatorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalkWatchfaceIndicatorFilled'

      short_name='PhoneInTalkWatchfaceIndicator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.875 22q-3.9 0-7.337-1.475-3.438-1.475-6-4.037-2.563-2.563-4.05-6Q2 7.05 2 3.125q-.025-.45.3-.788Q2.625 2 3.1 2H7q.45 0 .775.337.325.338.325.813 0 1.1.15 2.075.15.975.475 1.85.125.275.05.562-.075.288-.3.538l-2.5 2.5q1.075 2.2 3.05 4.175Q11 16.825 13.275 18l2.5-2.5q.225-.225.525-.3.3-.075.6.05.925.3 1.912.462.988.163 2.038.163.475 0 .813.35.337.35.337.85V20.9q0 .45-.325.775t-.8.325ZM20 12q0-3.35-2.325-5.675Q15.35 4 12 4V2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12Zm-4 0q0-1.65-1.175-2.825Q13.65 8 12 8V6q2.5 0 4.25 1.75T18 12Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalkWatchfaceIndicatorFilled.displayName = 'AmauiIconMaterialPhoneInTalkWatchfaceIndicatorFilled';

export default IconMaterialPhoneInTalkWatchfaceIndicatorFilled;
