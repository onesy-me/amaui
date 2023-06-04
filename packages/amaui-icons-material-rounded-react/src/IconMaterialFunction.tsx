import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Function'

      short_name='Function'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 18v-2h1.55l2.625-3-2.625-3H9.9l-1.6 8.6q-.2 1.125-.925 1.763Q6.65 21 5.525 21T3.7 20.4q-.7-.6-.7-1.6 0-.8.425-1.288.425-.487 1.075-.487.625 0 1.062.425.438.425.438 1.025 0 .125-.012.225-.013.1-.038.225.125-.025.212-.137.088-.113.138-.313L7.85 10H5V8h3.225l.525-2.85q.175-.95.938-1.55Q10.45 3 11.5 3q1.1 0 1.8.65t.7 1.625q0 .75-.425 1.237Q13.15 7 12.5 7q-.625 0-1.062-.425Q11 6.15 11 5.525q0-.125.012-.225.013-.1.038-.225-.15.05-.225.15-.075.1-.125.3L10.275 8H15v2h-.8l1.3 1.475L16.8 10H16V8h5v2h-1.55l-2.625 3 2.625 3H21v2h-5v-2h.8l-1.3-1.5-1.3 1.5h.8v2Z"/>
    </Icon>
  );
});

IconMaterialFunction.displayName = 'AmauiIconMaterialFunction';

export default IconMaterialFunction;
