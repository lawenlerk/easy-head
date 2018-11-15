import React from 'react';

export const titleTags = (title) => ([
  <title key='title'>{title}</title>,
  <meta key='schema' itemProp="name" content={title}/>,
  <meta key='meta-title' name='title' content={title}/>,
  <meta key='og:title' property='og:title' content={title}/>,
  <meta key='twitter:title' name="twitter:title" content={title}/>,
]);

export const descriptionTags = (description) => ([
  <meta key='description' name='description' content={description}/>,
  <meta key='schema-description' itemProp="description" content={description}/>,
  <meta key='og:description' property='og:description' content={description}/>,
  <meta key='twitter:description' name="twitter:description" content={description}/>,
]);

export const imageTags = (image) => {
  return [
    <meta key='schema-image' itemProp="image" content={image}/>,
    <meta key='og:image' property="og:image" content={image}/>,
    <meta key='twitter:image' name="twitter:image" content={image}/>,
    <meta key='twitter:card' name="twitter:card" content="summary_large_image"/>,
  ]
};
