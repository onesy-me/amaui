import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBikeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBikeW100'

      short_name='DirectionsBike'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 5.35q-.575 0-.962-.388-.388-.387-.388-.962t.388-.963q.387-.387.962-.387t.963.387q.387.388.387.963t-.387.962q-.388.388-.963.388Zm-3 13q-.15 0-.25-.1t-.1-.25v-4.575L8.1 10.85q-.225-.175-.325-.4-.1-.225-.1-.525 0-.3.113-.513Q7.9 9.2 8.1 9l2.95-2.95q.2-.2.475-.313.275-.112.575-.112.3 0 .575.112.275.113.475.313l1.9 1.9q.575.575 1.363 1.012.787.438 1.712.588.125.025.225.138.1.112.1.262 0 .175-.113.275-.112.1-.287.075-1.1-.175-1.988-.65-.887-.475-1.612-1.2L13.2 7.2l-3.15 3.15 1.875 1.975q.2.2.313.475.112.275.112.55V18q0 .15-.1.25t-.25.1ZM5.5 21.2q-1.775 0-2.987-1.213Q1.3 18.775 1.3 17q0-1.775 1.213-2.988Q3.725 12.8 5.5 12.8q1.775 0 2.988 1.212Q9.7 15.225 9.7 17t-1.212 2.987Q7.275 21.2 5.5 21.2Zm0-.7q1.475 0 2.488-1.012Q9 18.475 9 17t-1.012-2.488Q6.975 13.5 5.5 13.5t-2.487 1.012Q2 15.525 2 17t1.013 2.488Q4.025 20.5 5.5 20.5Zm13 .7q-1.775 0-2.987-1.213Q14.3 18.775 14.3 17q0-1.775 1.213-2.988Q16.725 12.8 18.5 12.8q1.775 0 2.988 1.212Q22.7 15.225 22.7 17t-1.212 2.987Q20.275 21.2 18.5 21.2Zm0-.7q1.475 0 2.488-1.012Q22 18.475 22 17t-1.012-2.488Q19.975 13.5 18.5 13.5t-2.487 1.012Q15 15.525 15 17t1.013 2.488Q17.025 20.5 18.5 20.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBikeW100.displayName = 'AmauiIconMaterialDirectionsBikeW100';

export default IconMaterialDirectionsBikeW100;
