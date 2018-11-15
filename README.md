# easy-head
Utility library for commonly used meta tags

## Installation
```
npm install --save easy-head
```

## Usage
```javascript
import { descriptionTags, imageTags, titleTags } from 'easy-head';
import { Helmet } from 'react-helmet';

// Use in your React Helmet component

export default (props) => (
  <Helmet>
    
    /*
    Title Tags
    
    Generates the below tags:
    <title key='title'>{title}</title>
    <meta key='schema' itemProp="name" content={title}/>
    <meta key='meta-title' name='title' content={title}/>
    <meta key='og:title' property='og:title' content={title}/>
    <meta key='twitter:title' name="twitter:title" content={title}/>
    */
    
    {titleTags('Title String')}
    
    
    /*
    Description Tags
    
    Generates the below tags:
    <meta key='description' name='description' content={description}/>
    <meta key='schema-description' itemProp="description" content={description}/>
    <meta key='og:description' property='og:description' content={description}/>
    <meta key='twitter:description' name="twitter:description" content={description}/>
    */
    
    {descriptionTags('Description String')}
    
    
    /*
    Image Tags
    
    Generates the below tags:
    <meta key='schema-image' itemProp="image" content={image}/>
    <meta key='og:image' property="og:image" content={image}/>
    <meta key='twitter:image' name="twitter:image" content={image}/>
    <meta key='twitter:card' name="twitter:card" content="summary_large_image"/>
    */
    
    {imageTags('https://via.placeholder.com/150.jpg')}
    
    
  </Helmet>
)
```
