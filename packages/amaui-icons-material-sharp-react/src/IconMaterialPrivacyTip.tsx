import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyTip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyTip'

      short_name='PrivacyTip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-6h-2Zm1-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm0-2.1q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.9Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTip.displayName = 'AmauiIconMaterialPrivacyTip';

export default IconMaterialPrivacyTip;
