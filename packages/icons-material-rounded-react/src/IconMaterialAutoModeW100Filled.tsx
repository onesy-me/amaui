import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoModeW100Filled'

      short_name='AutoMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.7q-2.975 0-5.325-1.575T3 15.675v3.675q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.1q0-.325.213-.538.212-.212.537-.212h4.075q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.55Q4.7 17.875 6.95 19.438 9.2 21 12 21q2.875 0 5.188-1.675Q19.5 17.65 20.45 14.95q.05-.175.2-.25.15-.075.275 0 .175.1.2.275.025.175-.05.375-1.05 2.875-3.487 4.612Q15.15 21.7 12 21.7ZM2.725 10.9q-.15-.05-.237-.2-.088-.15-.038-.325.2-1.15.575-2.05Q3.4 7.425 4.1 6.4q.1-.125.25-.188.15-.062.3.013.125.075.15.213.025.137-.075.262-.625.875-.987 1.762-.363.888-.613 2.113-.05.175-.15.275-.1.1-.25.05Zm3.45-6.2q-.1-.125-.037-.288.062-.162.187-.262.975-.7 1.987-1.1 1.013-.4 2.113-.575.175-.025.313.05.137.075.187.225.05.15-.062.262-.113.113-.288.138-1 .15-1.987.562-.988.413-1.863 1.038-.125.1-.3.087-.175-.012-.25-.137Zm4.775 8.35-1.6-.7q-.225-.1-.225-.35 0-.25.225-.35l1.6-.725.7-1.6q.1-.225.35-.225.25 0 .35.225l.725 1.6 1.6.725q.225.1.225.35 0 .25-.225.35l-1.6.7-.725 1.6q-.1.225-.35.225-.25 0-.35-.225Zm6.8-8.35q-.075.125-.237.125-.163 0-.288-.1-.8-.575-1.825-1-1.025-.425-1.975-.575-.15-.025-.275-.138-.125-.112-.075-.262.05-.15.187-.225.138-.075.313-.05 1.1.175 2.1.587 1 .413 1.95 1.088.125.1.163.262.037.163-.038.288Zm3.5 6.225q-.15.05-.262-.062-.113-.113-.138-.263-.2-1.15-.6-2.113-.4-.962-1.025-1.762Q19.1 6.6 19.1 6.45q0-.15.125-.25t.288-.05q.162.05.287.175.7.95 1.113 1.962.412 1.013.612 2.163.025.175-.05.3-.075.125-.225.175Z"/>
    </Icon>
  );
});

IconMaterialAutoModeW100Filled.displayName = 'OnesyIconMaterialAutoModeW100Filled';

export default IconMaterialAutoModeW100Filled;
