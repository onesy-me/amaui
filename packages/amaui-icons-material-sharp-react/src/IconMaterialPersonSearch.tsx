import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearch'

      short_name='PersonSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 12q-1.65 0-2.825-1.175Q7 9.65 7 8q0-1.65 1.175-2.825Q9.35 4 11 4q1.65 0 2.825 1.175Q15 6.35 15 8q0 1.65-1.175 2.825Q12.65 12 11 12Zm0-2q.825 0 1.413-.588Q13 8.825 13 8t-.587-1.412Q11.825 6 11 6q-.825 0-1.412.588Q9 7.175 9 8t.588 1.412Q10.175 10 11 10Zm11.1 13.5-3.2-3.2q-.525.3-1.125.5T16.5 21q-1.875 0-3.188-1.312Q12 18.375 12 16.5q0-1.875 1.312-3.188Q14.625 12 16.5 12q1.875 0 3.188 1.312Q21 14.625 21 16.5q0 .675-.2 1.275-.2.6-.5 1.125l3.2 3.2ZM16.5 19q1.05 0 1.775-.725Q19 17.55 19 16.5q0-1.05-.725-1.775Q17.55 14 16.5 14q-1.05 0-1.775.725Q14 15.45 14 16.5q0 1.05.725 1.775Q15.45 19 16.5 19ZM3 20v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.875-1.1 1.6-.45 3.55-.45-.3.45-.512.962-.213.513-.338 1.063-1.5.125-2.675.512-1.175.388-1.975.813-.25.125-.387.362Q5 16.95 5 17.225V18h5.175q.125.55.338 1.05.212.5.512.95Zm8-12Zm-.825 10Z"/>
    </Icon>
  );
});

IconMaterialPersonSearch.displayName = 'AmauiIconMaterialPersonSearch';

export default IconMaterialPersonSearch;
