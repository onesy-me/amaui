import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoutineTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoutineTwoTone'
      short_name='Routine'

      {...props}
    >
      <path d="M17.2 15.075q-.375-.15-.55-.538-.175-.387-.025-.762.175-.425.25-.888.075-.462.075-1.062 0-1.875-1.425-3.338Q14.1 7.025 12.15 7.025q-.5 0-.987.075-.488.075-.963.275-.4.175-.775 0T8.9 6.8q-.15-.4.013-.775.162-.375.562-.525.65-.25 1.3-.363.65-.112 1.375-.112 2.825 0 4.812 2 1.988 2 1.988 4.8 0 .8-.087 1.425-.088.625-.338 1.275-.15.375-.537.525-.388.15-.788.025ZM12 3q-.425 0-.712-.288Q11 2.425 11 2V1q0-.425.288-.713Q11.575 0 12 0t.713.287Q13 .575 13 1v1q0 .425-.287.712Q12.425 3 12 3Zm0 21q-.425 0-.712-.288Q11 23.425 11 23v-1q0-.425.288-.712Q11.575 21 12 21t.713.288Q13 21.575 13 22v1q0 .425-.287.712Q12.425 24 12 24Zm6.35-18.375q-.3-.3-.3-.713 0-.412.3-.712l.7-.7q.3-.3.725-.3t.725.3q.3.3.288.712-.013.413-.313.713l-.7.7q-.3.3-.713.3-.412 0-.712-.3ZM3.525 20.475q-.3-.3-.3-.712 0-.413.3-.713l.7-.7q.275-.275.675-.275t.7.275q.3.275.325.7.025.425-.275.725l-.7.7q-.3.3-.712.3-.413 0-.713-.3ZM22 13q-.425 0-.712-.288Q21 12.425 21 12t.288-.713Q21.575 11 22 11h1q.425 0 .712.287.288.288.288.713t-.288.712Q23.425 13 23 13ZM1 13q-.425 0-.712-.288Q0 12.425 0 12t.288-.713Q.575 11 1 11h1q.425 0 .713.287Q3 11.575 3 12t-.287.712Q2.425 13 2 13Zm18.05 7.475-.7-.7q-.275-.275-.275-.675t.275-.7q.275-.3.7-.325.425-.025.725.275l.7.7q.3.3.288.7-.013.4-.288.7-.275.3-.7.312-.425.013-.725-.287ZM4.225 5.625l-.7-.7q-.3-.3-.288-.688.013-.387.288-.687.275-.3.7-.325.425-.025.725.275l.7.7q.3.3.3.712 0 .413-.3.713t-.712.3q-.413 0-.713-.3ZM12 19q-2.925 0-4.962-2.038Q5 14.925 5 12q0-1.025.312-2.062.313-1.038.963-1.963.125-.2.338-.313.212-.112.437-.112.275-.025.538.125.262.15.387.4 1.4 2.55 3.425 4.562Q13.425 14.65 15.975 16q.225.125.362.337.138.213.163.488.025.25-.1.475-.125.225-.325.375-.925.65-1.962.988Q13.075 19 12 19Zm0-2q.35 0 .688-.038.337-.037.712-.162-1.875-1.2-3.425-2.75-1.55-1.55-2.775-3.4-.1.35-.15.675Q7 11.65 7 12q0 2.125 1.488 3.55Q9.975 16.975 12 17Zm-1.8-3.175Z"/>
    </Icon>
  );
});

export default IconMaterialRoutineTwoTone;
