import React from 'react';
import postlist from '../posts.json';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { slugify } from '../utils/slugify';

const Content = ({ match }) => {
  let title = match.path.substring(1);
  return (
    <div>
      {postlist.map((item) =>
        slugify(item.title) === title ? (
          <ReactMarkdown
            plugins={[gfm]}
            children={item.content}
            allowDangerousHtml={true}
          />
        ) : null
      )}
    </div>
  );
};
export default Content;
