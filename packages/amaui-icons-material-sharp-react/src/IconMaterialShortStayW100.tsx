import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShortStayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStayW100'

      short_name='ShortStay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 20h3.55H5.3h2Zm-2.7.7V3.3H15v7.15q-.2.05-.362.112-.163.063-.338.138V4h-9v8.175q.375-.425.888-.65Q6.7 11.3 7.3 11.3h5q.2 0 .375.025t.375.075q-.2.125-.375.275-.175.15-.375.325h-5q-.825 0-1.412.587Q5.3 13.175 5.3 14v6h5.55q.1.2.188.362.087.163.212.338ZM9.8 9q-.575 0-.962-.387-.388-.388-.388-.963t.388-.962Q9.225 6.3 9.8 6.3t.962.388q.388.387.388.962t-.388.963Q10.375 9 9.8 9Zm-.35 9.35h.7v-4.7h-.7v2h-2v.7h2Zm7.55 3q-1.8 0-3.075-1.275Q12.65 18.8 12.65 17q0-1.8 1.275-3.075Q15.2 12.65 17 12.65q1.8 0 3.075 1.275Q21.35 15.2 21.35 17q0 1.8-1.275 3.075Q18.8 21.35 17 21.35Zm1.675-2.175.5-.5-1.825-1.825v-2.7h-.7v3Z"/>
    </Icon>
  );
});

IconMaterialShortStayW100.displayName = 'AmauiIconMaterialShortStayW100';

export default IconMaterialShortStayW100;
