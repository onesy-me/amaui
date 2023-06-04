import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCheckW100Filled'

      short_name='NetworkCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.6 19.15q-.45-.15-.65-.563-.2-.412 0-.937.175-.425.8-1.825t1.375-3.1q.75-1.7 1.488-3.35.737-1.65 1.137-2.525.05-.075.138-.138.087-.062.212-.012t.188.138q.062.087.012.212-.25.925-.75 2.662-.5 1.738-1.012 3.538-.513 1.8-.938 3.275-.425 1.475-.55 1.875-.2.5-.575.7-.375.2-.875.05Zm10.65-8.4q-.15.15-.35.137-.2-.012-.35-.137-.725-.675-1.637-1.3-.913-.625-1.863-1.1l.3-.95q1.175.55 2.1 1.175t1.8 1.475q.15.125.15.337 0 .213-.15.363Zm-20.5 0q-.15-.15-.15-.363 0-.212.15-.337 2.025-1.875 4.625-2.963Q8.975 6 12 6q.425 0 .988.025.562.025.862.075l-.45 1q-.375-.05-.712-.075Q12.35 7 12 7q-2.775 0-5.213.987-2.437.988-4.337 2.763-.15.125-.35.137-.2.013-.35-.137ZM18 15q-.15.15-.35.137-.2-.012-.35-.137-.2-.2-.437-.375-.238-.175-.513-.325l.3-1q.35.2.7.475.35.275.65.55.15.125.15.325T18 15ZM6 15q-.15-.15-.15-.363 0-.212.15-.337.975-.875 2.225-1.463Q9.475 12.25 11.2 12l-.5 1.1q-1.225.2-2.25.737-1.025.538-1.75 1.188-.15.125-.362.112Q6.125 15.125 6 15Z"/>
    </Icon>
  );
});

IconMaterialNetworkCheckW100Filled.displayName = 'AmauiIconMaterialNetworkCheckW100Filled';

export default IconMaterialNetworkCheckW100Filled;
