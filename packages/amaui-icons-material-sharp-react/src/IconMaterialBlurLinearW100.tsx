import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlurLinearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurLinearW100'

      short_name='BlurLinear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.25 17.1q.45 0 .775-.325T6.35 16q0-.45-.325-.775T5.25 14.9q-.45 0-.775.325T4.15 16q0 .45.325.775t.775.325Zm4-4.3q.35 0 .575-.225.225-.225.225-.575t-.225-.575Q9.6 11.2 9.25 11.2t-.575.225q-.225.225-.225.575t.225.575q.225.225.575.225Zm0-4q.35 0 .575-.225.225-.225.225-.575t-.225-.575Q9.6 7.2 9.25 7.2t-.575.225Q8.45 7.65 8.45 8t.225.575q.225.225.575.225Zm-5.6 11.55v-.7h16.7v.7ZM5.25 9.1q.45 0 .775-.325T6.35 8q0-.45-.325-.775T5.25 6.9q-.45 0-.775.325T4.15 8q0 .45.325.775t.775.325Zm0 4q.45 0 .775-.325T6.35 12q0-.45-.325-.775T5.25 10.9q-.45 0-.775.325T4.15 12q0 .45.325.775t.775.325Zm4 3.7q.35 0 .575-.225.225-.225.225-.575t-.225-.575Q9.6 15.2 9.25 15.2t-.575.225q-.225.225-.225.575t.225.575q.225.225.575.225Zm8-.3q.225 0 .363-.137.137-.138.137-.363 0-.225-.137-.363-.138-.137-.363-.137-.225 0-.362.137-.138.138-.138.363 0 .225.138.363.137.137.362.137ZM3.65 4.35v-.7h16.7v.7Zm13.6 4.15q.225 0 .363-.137.137-.138.137-.363 0-.225-.137-.363-.138-.137-.363-.137-.225 0-.362.137-.138.138-.138.363 0 .225.138.363.137.137.362.137Zm0 4q.225 0 .363-.137.137-.138.137-.363 0-.225-.137-.363-.138-.137-.363-.137-.225 0-.362.137-.138.138-.138.363 0 .225.138.363.137.137.362.137Zm-4-3.7q.35 0 .575-.225.225-.225.225-.575t-.225-.575Q13.6 7.2 13.25 7.2t-.575.225q-.225.225-.225.575t.225.575q.225.225.575.225Zm0 4q.35 0 .575-.225.225-.225.225-.575t-.225-.575q-.225-.225-.575-.225t-.575.225q-.225.225-.225.575t.225.575q.225.225.575.225Zm0 4q.35 0 .575-.225.225-.225.225-.575t-.225-.575q-.225-.225-.575-.225t-.575.225q-.225.225-.225.575t.225.575q.225.225.575.225Zm-9.6 2.85V4.35Z"/>
    </Icon>
  );
});

IconMaterialBlurLinearW100.displayName = 'AmauiIconMaterialBlurLinearW100';

export default IconMaterialBlurLinearW100;
