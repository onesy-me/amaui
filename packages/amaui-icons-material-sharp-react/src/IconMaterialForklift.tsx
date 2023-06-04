import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForklift = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forklift'

      short_name='Forklift'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-1.25 0-2.125-.875T1 18q0-.65.25-1.237.25-.588.75-1.013V11h2V5h8l4.7 11.075q.15.35.225.7.075.35.075.725 0 1.45-1.025 2.475Q14.95 21 13.5 21q-1.025 0-1.887-.538-.863-.537-1.288-1.462h-3.5q-.325.9-1.1 1.45Q4.95 21 4 21Zm14-1V4h2v14h3v2ZM4 19q.425 0 .713-.288Q5 18.425 5 18t-.287-.712Q4.425 17 4 17t-.712.288Q3 17.575 3 18t.288.712Q3.575 19 4 19Zm9.5 0q.625 0 1.062-.438Q15 18.125 15 17.5t-.438-1.062Q14.125 16 13.5 16t-1.062.438Q12 16.875 12 17.5t.438 1.062Q12.875 19 13.5 19Zm-6.675-2h3.2q.05-.275.113-.512.062-.238.187-.488h-2.25L5.15 13H4v2q.95 0 1.725.55.775.55 1.1 1.45Zm2.1-3h4.725l-2.975-7H6v4Zm-.85 2-.462-.475q-.463-.475-1-1.038-.538-.562-1-1.025L5.15 13H4h1.15l2.925 3h2.25Z"/>
    </Icon>
  );
});

IconMaterialForklift.displayName = 'AmauiIconMaterialForklift';

export default IconMaterialForklift;
