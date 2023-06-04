import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeBlocksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeBlocksW100Filled'

      short_name='CodeBlocks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.9 12 1.925-1.925q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125l-1.9 1.9q-.125.125-.175.25-.05.125-.05.275 0 .15.05.275.05.125.175.25L9.35 14.45q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25Zm8.2 0-1.95 1.95q-.1.1-.112.238-.013.137.112.262t.25.125q.125 0 .25-.125l1.925-1.925q.125-.125.175-.25.05-.125.05-.275 0-.15-.05-.275-.05-.125-.175-.25L14.65 9.55q-.05-.05-.112-.075-.063-.025-.125-.025-.063 0-.138.025-.075.025-.125.075-.125.125-.125.25t.125.25ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCodeBlocksW100Filled.displayName = 'AmauiIconMaterialCodeBlocksW100Filled';

export default IconMaterialCodeBlocksW100Filled;
