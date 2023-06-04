import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face'

      short_name='Face'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14.25q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm6 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363ZM12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-.6-.075-1.163-.075-.562-.275-1.087-.525.125-1.05.188-.525.062-1.1.062-2.275 0-4.3-.975T9.75 6.3q-.8 1.95-2.287 3.388Q5.975 11.125 4 11.85V12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0 2q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22ZM10.65 4.125q1.05 1.75 2.85 2.813Q15.3 8 17.5 8q.35 0 .675-.037.325-.038.675-.088Q17.8 6.125 16 5.062 14.2 4 12 4q-.35 0-.675.037-.325.038-.675.088Zm-6.225 5.35Q5.7 8.75 6.65 7.6q.95-1.15 1.425-2.575Q6.8 5.75 5.85 6.9 4.9 8.05 4.425 9.475Zm6.225-5.35Zm-2.575.9Z"/>
    </Icon>
  );
});

IconMaterialFace.displayName = 'AmauiIconMaterialFace';

export default IconMaterialFace;
