import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentAddFilled'

      short_name='AssignmentAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 4.25q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM18 23q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm-6.325-2H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v6.7q-.725-.35-1.462-.525Q18.8 11 18 11q-.275 0-.512.012-.238.013-.488.063V11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h5.125q-.45.425-.813.925-.362.5-.637 1.075H8q-.425 0-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17h3.075q-.05.25-.063.488Q11 17.725 11 18q0 .825.15 1.538.15.712.525 1.462Zm5.825-2.5v2q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35v-2h2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-2v-2q0-.2-.15-.35Q18.2 15 18 15q-.2 0-.35.15-.15.15-.15.35v2h-2q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM8 9h8q.425 0 .712-.288Q17 8.425 17 8t-.288-.713Q16.425 7 16 7H8q-.425 0-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Z"/>
    </Icon>
  );
});

IconMaterialAssignmentAddFilled.displayName = 'AmauiIconMaterialAssignmentAddFilled';

export default IconMaterialAssignmentAddFilled;
