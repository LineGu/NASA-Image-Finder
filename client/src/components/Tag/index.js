import { memo } from 'react';
import TagStyler from './index.style';

function Tag({ keyword }) {
  return (
    <TagStyler className="keyword">
      <p className="hash">#</p>
      {keyword}
    </TagStyler>
  );
}

export default memo(Tag);
