import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorbellChimeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellChimeRoundedFilled'
      short_name='DoorbellChime'

      {...props}
    >
      <path d="m22.05 16.7-1.4-1.4q.65-.65 1-1.513Q22 12.925 22 12q0-.925-.35-1.788-.35-.862-1-1.512l1.4-1.4q.95.95 1.45 2.15T24 12q0 1.35-.5 2.55-.5 1.2-1.45 2.15Zm-2.675-2-1.425-1.4q.275-.275.413-.6.137-.325.137-.7 0-.375-.137-.7-.138-.325-.413-.6l1.425-1.4q.55.55.837 1.237.288.688.288 1.463 0 .775-.288 1.462-.287.688-.837 1.238ZM12 22q-2.125 0-3.562-1.438Q7 19.125 7 17V7q0-2.125 1.438-3.562Q9.875 2 12 2t3.562 1.438Q17 4.875 17 7v10q0 2.125-1.438 3.562Q14.125 22 12 22Zm0-4q.825 0 1.413-.587Q14 16.825 14 16q0-.825-.587-1.413Q12.825 14 12 14q-.825 0-1.412.587Q10 15.175 10 16q0 .825.588 1.413Q11.175 18 12 18Zm0-1q-.45 0-.725-.312Q11 16.375 11 16q0-.375.275-.688Q11.55 15 12 15q.45 0 .725.275Q13 15.55 13 16q0 .375-.275.688Q12.45 17 12 17Zm0-7q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Z"/>
    </Icon>
  );
});

IconMaterialDoorbellChimeRoundedFilled.displayName = 'AmauiIconMaterialDoorbellChimeRoundedFilled';

export default IconMaterialDoorbellChimeRoundedFilled;
