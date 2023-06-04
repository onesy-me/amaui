import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowingW100Filled'

      short_name='Snowing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14.7q-.275 0-.487-.213Q5.3 14.275 5.3 14t.213-.488Q5.725 13.3 6 13.3t.488.212q.212.213.212.488t-.212.487Q6.275 14.7 6 14.7Zm0-8q-.275 0-.487-.213Q5.3 6.275 5.3 6t.213-.488Q5.725 5.3 6 5.3t.488.212Q6.7 5.725 6.7 6t-.212.487Q6.275 6.7 6 6.7Zm12 8q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm0-8q-.275 0-.487-.213Q17.3 6.275 17.3 6t.213-.488Q17.725 5.3 18 5.3t.488.212q.212.213.212.488t-.212.487Q18.275 6.7 18 6.7Zm-9 12q-.275 0-.488-.213Q8.3 18.275 8.3 18t.212-.487Q8.725 17.3 9 17.3t.488.213q.212.212.212.487t-.212.487Q9.275 18.7 9 18.7Zm0-8q-.275 0-.488-.213Q8.3 10.275 8.3 10t.212-.488Q8.725 9.3 9 9.3t.488.212q.212.213.212.488t-.212.487Q9.275 10.7 9 10.7Zm3 4q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm0-8q-.275 0-.487-.213Q11.3 6.275 11.3 6t.213-.488Q11.725 5.3 12 5.3t.488.212q.212.213.212.488t-.212.487Q12.275 6.7 12 6.7Zm3 12q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm0-8q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488Q14.725 9.3 15 9.3t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialSnowingW100Filled.displayName = 'AmauiIconMaterialSnowingW100Filled';

export default IconMaterialSnowingW100Filled;
