import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTranscribeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranscribeFilled'

      short_name='Transcribe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 10.1q0-1.575.5-3.113Q16 5.45 17.05 4.1q.325-.425.863-.45.537-.025.912.35.3.3.338.725.037.425-.213.775-.725 1.075-1.1 2.225-.375 1.15-.375 2.375 0 1.2.375 2.4t1.1 2.225q.25.35.213.763-.038.412-.338.712-.375.375-.912.35-.538-.025-.863-.45-1.05-1.375-1.55-2.9t-.5-3.1Zm4.725 0q0-.6.15-1.225.15-.625.45-1.175.225-.425.7-.563.475-.137.9.113.425.25.625.7.2.45 0 .9-.125.3-.2.612-.075.313-.075.638t.075.65q.075.325.2.625.2.425.012.875-.187.45-.612.7-.425.25-.9.112-.475-.137-.7-.562-.325-.575-.475-1.175-.15-.6-.15-1.225ZM9 14q-1.65 0-2.825-1.175Q5 11.65 5 10q0-1.65 1.175-2.825Q7.35 6 9 6q1.65 0 2.825 1.175Q13 8.35 13 10q0 1.65-1.175 2.825Q10.65 14 9 14Zm-7 8q-.425 0-.712-.288Q1 21.425 1 21v-1.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q7.075 15 9 15q1.925 0 3.525.45 1.6.45 2.875 1.1.75.375 1.175 1.1.425.725.425 1.55V21q0 .425-.288.712Q16.425 22 16 22Z"/>
    </Icon>
  );
});

IconMaterialTranscribeFilled.displayName = 'AmauiIconMaterialTranscribeFilled';

export default IconMaterialTranscribeFilled;
