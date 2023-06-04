import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGTranslateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GTranslateW100Filled'

      short_name='GTranslate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 20-.8-2.4H5.6q-.65 0-1.125-.475T4 16V5.6q0-.65.475-1.125T5.6 4h4.8l.7 2.4h7.3q.7 0 1.15.45Q20 7.3 20 8v10.4q0 .65-.45 1.125T18.4 20Zm-3.875-5.925q1.4 0 2.275-.887.875-.888.875-2.313v-.338q0-.112-.05-.212H8.05v1.225h1.8q-.175.575-.612.888-.438.312-1.088.312-.775 0-1.338-.575Q6.25 11.6 6.25 10.8t.562-1.375q.563-.575 1.338-.575.35 0 .662.125.313.125.588.4l.975-.925q-.425-.425-1.012-.675-.588-.25-1.238-.25-1.35 0-2.3.962-.95.963-.95 2.313t.95 2.312q.95.963 2.3.963Zm5.35.4.45-.425q-.275-.35-.525-.663-.25-.312-.45-.662Zm1-1.025q.575-.65.863-1.25.287-.6.387-.95H12.55l.225.85h.8q.15.3.375.65.225.35.525.7ZM12.8 19.2h5.6q.35 0 .575-.225.225-.225.225-.575V8q0-.35-.225-.575Q18.75 7.2 18.4 7.2h-7.05l.925 3.25h1.575V9.6h.825v.85H17.6v.8h-1.025q-.2.75-.587 1.475-.388.725-.938 1.35l2.175 2.15-.575.575-2.175-2.15-.725.725.65 2.225Z"/>
    </Icon>
  );
});

IconMaterialGTranslateW100Filled.displayName = 'AmauiIconMaterialGTranslateW100Filled';

export default IconMaterialGTranslateW100Filled;
