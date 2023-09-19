import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import postlist from '../posts.json';
import { slugify } from '../utils/slugify';
import Code from './Code/Code';

// IMPORTANT TODO

// for working on the blog the commented useEffect should be uncommented
// on line 39: post.text change to text

const Content = ({ match, tables }) => {
  let title = match.path.slice(1);

  const [eventText, setEventText] = useState('');
  const [text, setText] = useState('');

  const post = postlist.find((event) => slugify(event.title) === title);

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, eventText]);

  return (
    <div className={`container blog-text ${tables}`}>
      <Markdown
        allowDangerousHtml={true}
        options={{ overrides: { Code: { component: Code } } }}
      >
        {text}
      </Markdown>
    </div>
  );
};
export default Content;
