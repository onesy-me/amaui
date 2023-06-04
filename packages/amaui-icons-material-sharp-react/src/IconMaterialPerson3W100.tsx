import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerson3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3W100'

      short_name='Person3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 13.2q-.725 0-1.212-.512Q8.3 12.175 8.3 11.5q0-.725.35-1T9 9.65q0-.3-.1-.575-.1-.275-.1-.575 0-.55.3-.988.3-.437 1.025-.737.35-.325.725-.65T12 5.8q.825 0 1.175.35.35.35.7.625.725.3 1.025.737.3.438.3.988 0 .3-.1.575-.1.275-.1.575 0 .575.35.85t.35 1q0 .675-.487 1.188-.488.512-1.213.512Zm0-.7h4q.425 0 .713-.3.287-.3.287-.7 0-.175-.062-.325-.063-.15-.188-.3-.275-.325-.362-.638-.088-.312-.088-.587 0-.4.1-.688.1-.287.1-.462 0-.3-.175-.55-.175-.25-.45-.375-.225-.1-.412-.225-.188-.125-.338-.325-.125-.15-.412-.337Q12.425 6.5 12 6.5t-.712.2q-.288.2-.413.35-.15.175-.337.3-.188.125-.413.225-.275.125-.45.375T9.5 8.5q0 .175.1.462.1.288.1.688 0 .275-.087.587-.088.313-.363.638-.125.15-.188.3Q9 11.325 9 11.5q0 .4.288.7.287.3.712.3Zm-4.7 7.7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 15.8 12 15.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Zm.7-.7h12v-.6q0-.35-.237-.662-.238-.313-.663-.538-1.2-.575-2.487-.888Q13.325 16.5 12 16.5t-2.613.312Q8.1 17.125 6.9 17.7q-.425.225-.662.538Q6 18.55 6 18.9Zm6 0Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialPerson3W100.displayName = 'AmauiIconMaterialPerson3W100';

export default IconMaterialPerson3W100;
