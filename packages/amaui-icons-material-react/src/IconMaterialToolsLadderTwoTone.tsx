import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToolsLadderTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadderTwoTone'
      short_name='ToolsLadder'

      {...props}
    >
      <path d="M5.95 21q-.475 0-.75-.387-.275-.388-.15-.838L9.5 3.7q.1-.325.35-.512Q10.1 3 10.425 3q.5 0 .775.387.275.388.15.838L10.85 6h5.625l.625-2.3q.1-.325.362-.512Q17.725 3 18.05 3q.475 0 .75.387.275.388.15.838L14.5 20.3q-.1.325-.35.512-.25.188-.575.188-.5 0-.775-.387-.275-.388-.15-.838l.5-1.775H7.525L6.9 20.3q-.1.325-.362.512Q6.275 21 5.95 21Zm3.525-10h5.6l.825-3h-5.6ZM8.1 16h5.6l.825-3h-5.6Z"/>
    </Icon>
  );
});

IconMaterialToolsLadderTwoTone.displayName = 'AmauiIconMaterialToolsLadderTwoTone';

export default IconMaterialToolsLadderTwoTone;
