import React from 'react';
import Mention from '../components/Pages/PostView/Post/Mention/Mention';

const findMention = (label, value) => {

    const reg = new RegExp(/([@][\w_-]+)/g); // space before @ regex - /\s([@][\w_-]+)/g

    return (<span>
      { label.split(reg)
        .reduce((prev, current, i) => {
          if (!i) {
            return [current];
          }

          if (!current.includes('@')) {
            return prev.concat(current);
          } 

          return prev.concat(<Mention username={current}/>);
        }, [])
      }
    </span>);
};

export { findMention };