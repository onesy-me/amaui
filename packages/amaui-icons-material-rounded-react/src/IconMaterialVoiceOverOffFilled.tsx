import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceOverOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceOverOffFilled'

      short_name='VoiceOverOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 10.1 8 5.2q.225-.075.475-.138Q8.725 5 9 5q1.65 0 2.825 1.175Q13 7.35 13 9q0 .275-.037.55-.038.275-.113.55ZM18.975 22 17 20q0 .425-.288.712Q16.425 21 16 21H2q-.425 0-.712-.288Q1 20.425 1 20v-1.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q7.075 14 9 14q.65 0 1.238.062.587.063 1.162.138L10 12.85q-.225.075-.475.112Q9.275 13 9 13q-1.65 0-2.825-1.175Q5 10.65 5 9q0-.275.037-.525.038-.25.113-.475L2.1 4.9q-.3-.3-.3-.7 0-.4.3-.7.275-.275.7-.275.425 0 .7.275l16.875 17.125q.275.275.288.675.012.4-.263.7-.275.3-.7.312-.425.013-.725-.312Zm.15-6.875q-.275-.275-.288-.7-.012-.425.263-.775.775-.95 1.212-2.138.438-1.187.438-2.512 0-1.3-.438-2.475Q19.875 5.35 19.1 4.4q-.275-.35-.275-.775 0-.425.3-.725.35-.35.838-.35.487 0 .787.35 1.05 1.275 1.65 2.825Q23 7.275 23 9q0 1.725-.6 3.275-.6 1.55-1.65 2.825-.3.35-.787.362-.488.013-.838-.337ZM15.9 11.9q-.275-.275-.312-.712-.038-.438.212-.863.175-.3.262-.637.088-.338.088-.688 0-.35-.088-.688-.087-.337-.262-.637-.25-.425-.212-.863.037-.437.312-.712.35-.35.85-.338.5.013.775.388.425.625.675 1.337.25.713.25 1.513 0 .8-.25 1.512-.25.713-.675 1.338-.275.375-.775.388-.5.012-.85-.338Z"/>
    </Icon>
  );
});

IconMaterialVoiceOverOffFilled.displayName = 'AmauiIconMaterialVoiceOverOffFilled';

export default IconMaterialVoiceOverOffFilled;
