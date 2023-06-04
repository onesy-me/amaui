import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuestionMark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionMark'

      short_name='QuestionMark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 16q-.6 0-1.012-.425-.413-.425-.363-1 .075-1.05.5-1.825.425-.775 1.35-1.6 1.025-.9 1.562-1.563.538-.662.538-1.512 0-1.025-.687-1.7Q13.225 5.7 12 5.7q-.8 0-1.362.337-.563.338-.913.838-.35.5-.862.675-.513.175-.988-.025-.575-.25-.787-.825-.213-.575.087-1.075Q7.9 4.5 9.125 3.75T12 3q2.625 0 4.038 1.463 1.412 1.462 1.412 3.512 0 1.25-.537 2.138-.538.887-1.688 2.012-.85.8-1.2 1.3t-.475 1.15q-.1.625-.525 1.025-.425.4-1 .4ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20q0-.825.588-1.413Q11.175 18 12 18t1.413.587Q14 19.175 14 20q0 .825-.587 1.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialQuestionMark.displayName = 'AmauiIconMaterialQuestionMark';

export default IconMaterialQuestionMark;
