import React, { useEffect, useState } from 'react';
import postlist from '../posts.json';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { slugify } from '../utils/slugify';

const Content = ({ match, tables }) => {
  let title = match.path.substring(1);

  const [eventText, setEventText] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    import(`../content/${title}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setEventText(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    const nometa = eventText.substring(eventText.indexOf('---') + 5);
    setText(nometa.substring(nometa.indexOf('---') + 5));
    console.log(text);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, eventText]);

  return (
    <div className={`container blog-text ${tables}`}>
      <ReactMarkdown
        plugins={[gfm]}
        children={text}
        allowDangerousHtml={true}
      />
    </div>
  );
};
export default Content;
