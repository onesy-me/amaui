import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFace6Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face6Sharp'
      short_name='Face6'

      {...props}
    >
      <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.9.787-1.825 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.137 3.187-1.35 1.363-3.175 2.15Q14.075 22 12 22Zm0-18Q9.225 4 7.1 5.662 4.975 7.325 4.275 9.9h1.15L7.4 6h9.225L18.6 9.9h1.125q-.7-2.575-2.812-4.238Q14.8 4 12 4Zm0 16q3.35 0 5.688-2.35 2.337-2.35 2.312-5.7v-.05h-2.625L15.4 8H8.625L6.65 11.9H4v.075q0 3.35 2.338 5.688Q8.675 20 12 20Zm-3-5.75q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm6 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363ZM12 6Z"/>
    </Icon>
  );
});

export default IconMaterialFace6Sharp;
