import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveTwoTone'
      short_name='QuietTimeActive'

      {...props}
    >
      <path d="M20.15 18.125 18.725 16.7q.425-.4.775-.862.35-.463.625-.963-1.2-.125-2.35-.45-1.15-.325-2.2-.875L10.4 8.375q-.55-1.05-.875-2.187Q9.2 5.05 9.1 3.85q-.5.275-.963.625-.462.35-.862.775l-1.4-1.4Q6.7 3 7.662 2.375q.963-.625 2.013-1 .55-.2 1.013.137.462.338.437.913-.075 2.1.687 4.037.763 1.938 2.263 3.438 1.5 1.5 3.425 2.25 1.925.75 4.05.675.65-.025.963.425.312.45.087 1.05-.35 1.05-.975 2.025-.625.975-1.475 1.8Zm-1.475 4.2-2-1.975q-.85.325-1.737.487Q14.05 21 13.1 21q-2.1 0-3.938-.8-1.837-.8-3.199-2.162-1.363-1.363-2.163-3.2Q3 13 3 10.9q0-.95.163-1.838.162-.887.487-1.737L1.675 5.35q-.3-.3-.287-.713.012-.412.312-.712t.713-.3q.412 0 .712.3l16.975 17q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM13.1 19q.5 0 1-.062.5-.063.975-.188l-4.925-4.925-4.9-4.9q-.125.5-.188.987Q5 10.4 5 10.9q0 3.375 2.363 5.737Q9.725 19 13.1 19Zm-2.95-5.175Zm2.85-2.85Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveTwoTone.displayName = 'AmauiIconMaterialQuietTimeActiveTwoTone';

export default IconMaterialQuietTimeActiveTwoTone;
