import React from "react";
import { useState } from "react";

function Test() {
  const [editorHtml, setEditorHtml] = useState('<p>이게 되면.. 어떨까...</p><p>image</p><p>엉 이건 당연히 <strong>post </strong>오류 맞고</p><p>이제 전송 보내보면 되려나..</p><p>이것저것 </p><p>넣어보기</p><ol><li>짠</li><li>짠1</li><li>짠2</li></ol><p><img src="추가될듯" alt="uploaded image"></p>');

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
}
export default Test;
