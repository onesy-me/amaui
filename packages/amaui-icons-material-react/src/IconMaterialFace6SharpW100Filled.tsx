import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFace6SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Face6SharpW100Filled'
      short_name='Face6'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388q.688-1.587 1.863-2.775Q7.025 4.65 8.613 3.975 10.2 3.3 12 3.3t3.388.675q1.587.675 2.775 1.862 1.187 1.188 1.862 2.775Q20.7 10.2 20.7 12q0 1.8-.675 3.387-.675 1.588-1.862 2.763-1.188 1.175-2.775 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.337Q20 15.325 20 12v-.375q0-.2-.025-.375H17.95l-2.55-3.9H8.625l-2.55 3.9h-2.05Q4 11.425 4 11.625V12q0 3.325 2.338 5.663Q8.675 20 12 20Zm-3-5.75q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Zm6 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887q-.362.363-.887.363Z"/>
    </Icon>
  );
});

IconMaterialFace6SharpW100Filled.displayName = 'AmauiIconMaterialFace6SharpW100Filled';

export default IconMaterialFace6SharpW100Filled;
