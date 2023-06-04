import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChildCareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildCareFilled'

      short_name='ChildCare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 11.75q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm-5 0q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363ZM12 17q1.5 0 2.713-.825Q15.925 15.35 16.5 14h-9q.575 1.35 1.788 2.175Q10.5 17 12 17Zm0 4q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.925Q10.125 3 12 3t3.513.712q1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q21 10.125 21 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 21 12 21Zm.4-12.5q.425 0 .963-.163.537-.162.537-.737 0-.3-.2-.525-.2-.225-.5-.225-.2 0-.388.075Q12.625 7 12.4 7q-.525 0-.888-.363-.362-.362-.362-.887 0-.275.088-.463.087-.187.262-.262-.475.05-.925.125-.45.075-.875.25-.025.075-.037.175-.013.1-.013.175 0 1.125.813 1.938.812.812 1.937.812Z"/>
    </Icon>
  );
});

IconMaterialChildCareFilled.displayName = 'AmauiIconMaterialChildCareFilled';

export default IconMaterialChildCareFilled;
