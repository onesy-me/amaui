import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTranscribeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranscribeSharp'
      short_name='Transcribe'

      {...props}
    >
      <path d="M17.925 17.025q-1.35-1.35-2.138-3.15Q15 12.075 15 10q0-2.05.763-3.85.762-1.8 2.112-3.15l1.7 1.7q-1.025 1.05-1.613 2.387-.587 1.338-.587 2.913 0 1.575.587 2.925.588 1.35 1.613 2.4Zm3.325-3.375q-.7-.7-1.1-1.638-.4-.937-.4-2.012t.4-2q.4-.925 1.1-1.625l1.675 1.675q-.375.375-.588.875-.212.5-.212 1.075t.212 1.075q.213.5.563.875ZM9 14q-1.65 0-2.825-1.175Q5 11.65 5 10q0-1.65 1.175-2.825Q7.35 6 9 6q1.65 0 2.825 1.175Q13 8.35 13 10q0 1.65-1.175 2.825Q10.65 14 9 14Zm-8 8v-2.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q7.075 15 9 15q1.925 0 3.525.45 1.6.45 2.875 1.1.75.375 1.175 1.1.425.725.425 1.55V22Zm2-2h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-.9-.45-2.312-.9Q10.775 17 9 17q-1.775 0-3.188.45-1.412.45-2.312.9-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q11 10.825 11 10t-.587-1.413Q9.825 8 9 8q-.825 0-1.412.587Q7 9.175 7 10q0 .825.588 1.412Q8.175 12 9 12Zm0-2Zm0 10Z"/>
    </Icon>
  );
});

export default IconMaterialTranscribeSharp;
