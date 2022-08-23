import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaundrySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaundrySharpW100'
      short_name='Laundry'

      {...props}
    >
      <path d="M7.3 13.1q.175-.05.35-.05t.35-.025v-5.45L4.875 9.3 3.85 7.55 7.7 5.325q.6 1.225 1.75 1.95Q10.6 8 12 8t2.55-.725q1.15-.725 1.75-1.95l3.825 2.225-1 1.75L16 7.575v9.4q.1-.025.175-.062.075-.038.125-.088l.4-.35v-7.7l2.675 1.475 1.7-2.95L16.3 4.525h-.45Q15.425 5.8 14.388 6.55 13.35 7.3 12 7.3q-1.35 0-2.387-.75Q8.575 5.8 8.15 4.525H7.7l-4.8 2.75 1.725 2.975L7.3 8.775Zm-2.575 4.725-.45-.525 1.675-1.425q.5-.425 1.138-.65Q7.725 15 8.375 15q.65 0 1.275.225.625.225 1.125.65l2.9 2.475q.4.35.925.512.525.163 1.05.163t1.038-.163q.512-.162.912-.512l1.675-1.45.45.55-1.675 1.425q-.5.425-1.125.638-.625.212-1.275.212-.65 0-1.287-.212-.638-.213-1.138-.638l-2.9-2.475q-.4-.35-.912-.513-.513-.162-1.038-.162t-1.05.162q-.525.163-.925.513ZM12 8Z"/>
    </Icon>
  );
});

IconMaterialLaundrySharpW100.displayName = 'AmauiIconMaterialLaundrySharpW100';

export default IconMaterialLaundrySharpW100;
