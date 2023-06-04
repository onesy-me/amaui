import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistWalkerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistWalkerW100Filled'

      short_name='AssistWalker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.75 7.1q-.65 0-1.125-.475T11.15 5.5q0-.65.475-1.125T12.75 3.9q.65 0 1.125.475T14.35 5.5q0 .65-.475 1.125T12.75 7.1Zm-3.5 13.5q-.15 0-.25-.1t-.1-.25V16.2l-2.55-2.55.275 2.475q.025.225-.037.437-.063.213-.188.388l-2.5 3.2q-.1.125-.225.138-.125.012-.25-.088-.125-.1-.15-.238-.025-.137.075-.262l2.525-3.225L4.7 12.75q-.125-.425-.062-.863.062-.437.387-.762l3.1-3.075q.2-.2.45-.3.25-.1.5-.1.425 0 .663.15.237.15.312.225L11.525 9.5q.775.775 1.7 1.337.925.563 2.275.563h1.875q.325 0 .55.2.225.2.275.5l.7 6.825q.35.1.588.387.237.288.237.688 0 .45-.312.775-.313.325-.788.325-.45 0-.788-.325Q17.5 20.45 17.5 20q0-.35.188-.625.187-.275.462-.4l-.225-2.125h-3.65l-.35 3.45q-.025.125-.125.213-.1.087-.225.087-.15 0-.263-.112-.112-.113-.087-.263l.85-8.3q-1.075-.275-1.763-.788-.687-.512-1.287-1.137l-.525-.525-3.3 3.275 2.175 2.85q.125.15.175.312.05.163.05.363v3.975q0 .15-.1.25t-.25.1Zm5.1-4.45h3.525l-.425-4.05h-2.7Z"/>
    </Icon>
  );
});

IconMaterialAssistWalkerW100Filled.displayName = 'AmauiIconMaterialAssistWalkerW100Filled';

export default IconMaterialAssistWalkerW100Filled;
