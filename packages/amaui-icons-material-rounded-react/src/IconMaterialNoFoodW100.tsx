import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFoodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodW100'

      short_name='NoFood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.725 22.05 1.175 3.5q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm.2-3.6-.625-.625L20.375 7.5h-8.85v-.05q0-.275.15-.462.15-.188.425-.188h3.825V3.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.8H20.5q.275 0 .425.175.15.175.125.45Zm-4.3-4.325ZM3.225 18.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7.325-9.825v.7q-.325-.05-.65-.063-.325-.012-.675-.012-2.325 0-3.712.688-1.388.687-1.763 1.612h9.725l.7.7h-10.6q-.3 0-.487-.213-.188-.212-.113-.487.375-1.2 1.963-2.1 1.587-.9 4.287-.9.35 0 .675.012.325.013.65.063ZM9.225 14.8Z"/>
    </Icon>
  );
});

IconMaterialNoFoodW100.displayName = 'AmauiIconMaterialNoFoodW100';

export default IconMaterialNoFoodW100;
