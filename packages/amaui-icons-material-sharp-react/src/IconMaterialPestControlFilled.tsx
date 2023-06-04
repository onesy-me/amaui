import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPestControlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PestControlFilled'

      short_name='PestControl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.6 0-2.863-.825Q7.875 19.35 7.075 18L4.7 19.35l-1-1.725 2.575-1.5q-.075-.275-.125-.563-.05-.287-.1-.562H3v-2h3.05q.05-.3.1-.588.05-.287.125-.562L3.7 10.35l1-1.725L7.05 10q.2-.35.463-.688.262-.337.537-.612Q8 8.525 8 8.35V8q0-.6.175-1.15.175-.55.475-1.025L7 4.175 8.4 2.75l1.75 1.7q.425-.225.888-.338Q11.5 4 12 4q.5 0 .975.125t.9.35L15.6 2.75 17 4.175l-1.65 1.65q.3.475.462 1.025.163.55.163 1.15v.337q0 .163-.05.338.275.275.537.625.263.35.463.7L19.3 8.65l1 1.725-2.6 1.475q.075.275.138.562.062.288.112.588H21v2h-3.05q-.05.3-.1.587-.05.288-.125.563l2.575 1.5-1 1.725L16.925 18q-.8 1.35-2.062 2.175Q13.6 21 12 21ZM10.1 7.35q.425-.175.912-.262Q11.5 7 12 7t.963.075q.462.075.887.25-.2-.575-.7-.95Q12.65 6 12 6q-.65 0-1.175.387-.525.388-.725.963ZM12 19q1.825 0 2.913-1.525Q16 15.95 16 14q0-1.75-1.012-3.375Q13.975 9 12 9q-1.95 0-2.975 1.613Q8 12.225 8 14q0 1.95 1.088 3.475Q10.175 19 12 19Zm-1-2v-6h2v6Z"/>
    </Icon>
  );
});

IconMaterialPestControlFilled.displayName = 'AmauiIconMaterialPestControlFilled';

export default IconMaterialPestControlFilled;
