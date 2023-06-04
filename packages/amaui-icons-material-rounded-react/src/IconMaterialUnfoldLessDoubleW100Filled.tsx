import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLessDoubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessDoubleW100Filled'

      short_name='UnfoldLessDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 10.1 2.925-2.9q.125-.1.25-.113.125-.012.25.113t.113.262q-.013.138-.113.238l-2.9 2.9q-.225.225-.525.225-.3 0-.525-.225L8.6 7.725q-.125-.125-.112-.25.012-.125.112-.25.125-.125.25-.138.125-.012.25.113Zm0-5 2.925-2.9q.125-.1.25-.113.125-.012.25.113t.113.262q-.013.138-.113.238l-2.9 2.9q-.225.225-.525.225-.3 0-.525-.225L8.6 2.725q-.125-.125-.112-.25.012-.125.112-.25.125-.125.25-.138.125-.012.25.113Zm.025 13.775-2.925 2.9q-.125.1-.25.112-.125.013-.25-.112t-.125-.263q0-.137.125-.237l2.9-2.875q.225-.225.525-.225.3 0 .525.225l2.875 2.875q.125.125.125.25t-.125.25q-.125.125-.262.112-.138-.012-.238-.112Zm0-5-2.925 2.9q-.125.1-.25.112-.125.013-.25-.112t-.125-.263q0-.137.125-.237l2.9-2.875q.225-.225.525-.225.3 0 .525.225l2.875 2.875q.125.125.125.25t-.125.25q-.125.125-.262.112-.138-.012-.238-.112Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessDoubleW100Filled.displayName = 'AmauiIconMaterialUnfoldLessDoubleW100Filled';

export default IconMaterialUnfoldLessDoubleW100Filled;
