import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanTool = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanTool'

      short_name='PanTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.45 24H18q1.65 0 2.825-1.175Q22 21.65 22 20V6.15q0-1.05-.725-1.775-.725-.725-1.775-.725h-.25q-.125 0-.25.05v-.3q0-1.025-.725-1.763Q17.55.9 16.5.9q-.275 0-.5.037-.225.038-.45.163-.35-.5-.875-.8Q14.15 0 13.5 0q-.875 0-1.688.55Q11 1.1 11 2.35q-.125-.05-.25-.05h-.25q-1.05 0-1.775.725Q8 3.75 8 4.8v9.6l-2.65-1.35q-.575-.275-1.112-.25-.538.025-1.038.45l-.85.725q-.575.5-.55 1.263.025.762.55 1.312l5.95 6.2q.575.6 1.45.925.875.325 1.7.325Zm0-2q-.425 0-.925-.163-.5-.162-.775-.437L3.9 15.3l.25-.25.25-.25 2.7 1.375q1 .5 1.95-.075t.95-1.7V4.8q0-.225.137-.363.138-.137.363-.137.225 0 .363.137.137.138.137.363V11q0 .425.288.712.287.288.712.288t.713-.288Q13 11.425 13 11V2.5q0-.225.137-.363Q13.275 2 13.5 2q.225 0 .363.137.137.138.137.363V11q0 .425.288.712.287.288.712.288t.713-.288Q16 11.425 16 11V3.4q0-.2.138-.35.137-.15.362-.15.225 0 .363.15.137.15.137.35V11q0 .425.288.712.287.288.712.288t.712-.288Q19 11.425 19 11V6.15q0-.225.138-.363.137-.137.362-.137.225 0 .363.137.137.138.137.363V20q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialPanTool.displayName = 'AmauiIconMaterialPanTool';

export default IconMaterialPanTool;
