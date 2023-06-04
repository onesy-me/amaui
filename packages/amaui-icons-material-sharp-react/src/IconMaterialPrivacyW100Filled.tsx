import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyW100Filled'

      short_name='Privacy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.125 7.5q.1-.05.263-.075.162-.025.312-.025.675 0 1.138.462.462.463.462 1.138v.675ZM7.95 5.3h7.95q.625 0 1.063.438.437.437.437 1.062v4.7l2.75-2.75v6.5L17.4 12.5v2.25l-.7-.7V6.8q0-.35-.225-.575Q16.25 6 15.9 6H8.65Zm11.1 14.95L11.9 13.1q-.2.25-.537.375-.338.125-.663.125-.65 0-1.125-.475T9.1 12v-1.7L2.95 4.15l.5-.5 16.1 16.1ZM5.5 18.7q-.65 0-1.075-.425Q4 17.85 4 17.2V6.8q0-.55.325-.938.325-.387.825-.512L5.8 6h-.3q-.35 0-.575.225Q4.7 6.45 4.7 6.8v10.4q0 .35.225.575Q5.15 18 5.5 18h4.9v-1.7q-1.575-.125-2.7-1.2-1.125-1.075-1.275-2.7h.7q.125 1.35 1.15 2.275Q9.3 15.6 10.7 15.6q.7 0 1.312-.25.613-.25 1.113-.675l.575.425q-.525.5-1.212.813-.688.312-1.488.387V18h4.9q.35 0 .575-.225.225-.225.225-.575v-.3l.65.65q-.125.5-.513.825-.387.325-.937.325Z"/>
    </Icon>
  );
});

IconMaterialPrivacyW100Filled.displayName = 'AmauiIconMaterialPrivacyW100Filled';

export default IconMaterialPrivacyW100Filled;
