import React from 'react';
import Mention from '../components/Pages/PostView/Post/Mention/Mention';

const findMention = (label) => {

    const reg = new RegExp(/([@][\w_-]+)/g); // space before @ regex - /\s([@][\w_-]+)/g

    return (<span>
      { label.split(reg)
        .reduce((prev, current, i) => {
          if (!i) {
            return [current];
          }

          if (current.includes('@') && current.replace(/@/g, '').length > 2) {
            return prev.concat(<Mention username={current}/>);
          } 

          return prev.concat(current);
        }, [])
      }
    </span>);
};

export { findMention };