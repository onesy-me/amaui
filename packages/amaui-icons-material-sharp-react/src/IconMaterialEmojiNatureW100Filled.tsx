import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiNatureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiNatureW100Filled'

      short_name='EmojiNature'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18 8.3-1.1 1q-.2.2-.487.2-.288 0-.563-.15-.2-.125-.275-.388-.075-.262.025-.612l.5-1.65-1.15-.7q-.25-.15-.35-.413-.1-.262-.05-.537.05-.25.288-.4.237-.15.562-.15h1.4l.4-1.35q.075-.275.3-.462.225-.188.5-.188t.5.188q.225.187.3.462l.4 1.35h1.4q.3 0 .538.15.237.15.312.4.1.275.012.55-.087.275-.312.4l-1.25.7.5 1.6q.1.325.038.612-.063.288-.288.438-.25.175-.55.162-.3-.012-.5-.212Zm0-1.25q.375 0 .638-.263.262-.262.262-.637t-.262-.638Q18.375 5.25 18 5.25t-.637.262q-.263.263-.263.638t.263.637q.262.263.637.263ZM12.55 17.7q.425 1.1-.312 2.05-.738.95-2.013.95-.625 0-1.163-.375-.537-.375-.862-1.025-1.45 0-2.475-1.012Q4.7 17.275 4.7 15.85q-.65-.275-1.025-.9-.375-.625-.375-1.4 0-1.225 1.088-1.862 1.087-.638 2.312-.138l1.25.5q.275-.95 1.013-1.55.737-.6 1.687-.65v-2h.7v2q1.125.075 1.938.887.812.813.912 2.013h2v.7h-2q-.05.925-.675 1.663-.625.737-1.575 1.037Zm-6.3-2.3q.95 0 1.938-.375.987-.375 2.112-1.175L6.45 12.2q-.875-.375-1.663.05Q4 12.675 4 13.55q0 .775.65 1.313.65.537 1.6.537Zm3.975 4.6q.9 0 1.438-.65.537-.65.237-1.4l-1.6-4.1q-.875 1.1-1.288 2.062-.412.963-.412 1.888 0 .95.462 1.575.463.625 1.163.625Zm1.475-4.5q.8-.3 1.3-.95.5-.65.5-1.45 0-1.05-.725-1.8T11 10.55q-.875 0-1.537.5-.663.5-.863 1.3l2.25.95Z"/>
    </Icon>
  );
});

IconMaterialEmojiNatureW100Filled.displayName = 'AmauiIconMaterialEmojiNatureW100Filled';

export default IconMaterialEmojiNatureW100Filled;
