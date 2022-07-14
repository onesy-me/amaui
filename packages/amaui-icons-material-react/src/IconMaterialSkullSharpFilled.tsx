import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkullSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkullSharpFilled'
      short_name='Skull'

      {...props}
    >
      <path d="M6 22v-4.25q-.975-.425-1.712-1.137Q3.55 15.9 3.038 15q-.513-.9-.775-1.925Q2 12.05 2 11q0-3.95 2.8-6.475Q7.6 2 12 2t7.2 2.525Q22 7.05 22 11q0 1.05-.262 2.075-.263 1.025-.775 1.925-.513.9-1.25 1.613-.738.712-1.713 1.137V22Zm2-2h1v2h2v-2h2v2h2v-2h1v-3.55q.95-.225 1.688-.75.737-.525 1.25-1.25.512-.725.787-1.6Q20 11.975 20 11q0-3.125-2.212-5.062Q15.575 4 12 4T6.213 5.938Q4 7.875 4 11q0 .975.275 1.85.275.875.787 1.6.513.725 1.263 1.25.75.525 1.675.75Zm2.5-4.25h3l-1.5-3ZM8.5 13q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.413Q9.325 9 8.5 9q-.825 0-1.412.587Q6.5 10.175 6.5 11q0 .825.588 1.412Q7.675 13 8.5 13Zm7 0q.825 0 1.413-.588.587-.587.587-1.412t-.587-1.413Q16.325 9 15.5 9q-.825 0-1.412.587-.588.588-.588 1.413 0 .825.588 1.412.587.588 1.412.588ZM8 20v-3.55q-.925-.225-1.675-.75t-1.263-1.25q-.512-.725-.787-1.6Q4 11.975 4 11q0-3.125 2.213-5.062Q8.425 4 12 4q3.575 0 5.788 1.938Q20 7.875 20 11q0 .975-.275 1.85-.275.875-.787 1.6-.513.725-1.25 1.25-.738.525-1.688.75V20H9Z"/>
    </Icon>
  );
});

export default IconMaterialSkullSharpFilled;
