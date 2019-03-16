import React from 'react';
import Mention from '../components/Pages/PostView/Post/Mention/Mention';

const findMention = (label, value) => {
    if (!value) {
      return label;
    }
    return (<span>
      { label.split(value)
        .reduce((prev, current, i) => {
          if (!i) {
            return [current];
          }
          return prev.concat(<Mention username={value}/>, current);
        }, [])
      }
    </span>);
};

export { findMention };