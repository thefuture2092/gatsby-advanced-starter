webpackJsonp([0x3d49701c61243800],{"./src/components/PostListing/PostListing.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/react.js"),s=r(u),c=n("./node_modules/gatsby-link/index.js"),d=r(c),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"getPostList",value:function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e}},{key:"render",value:function(){var e=this.getPostList();return s.default.createElement("div",null,e.map(function(e){return s.default.createElement(d.default,{to:e.path},s.default.createElement("h1",null,e.title))}))}}]),t}(s.default.Component);t.default=f,e.exports=t.default},"./src/components/SEO/SEO.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/react.js"),s=r(u),c=n("./node_modules/react-helmet/lib/Helmet.js"),d=r(c),f=n("./data/SiteConfig.js"),p=r(f),m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,o=void 0,a=void 0,i=void 0,l=void 0;if(r){var u=t.frontmatter;o=u.title,a=u.description?u.description:t.excerpt,i=u.cover,l=p.default.siteUrl+p.default.pathPrefix+n}else o=p.default.siteTitle,a=p.default.siteDescription,i=p.default.siteLogo;var c="/"===p.default.pathPrefix?"":p.default.pathPrefix;i=p.default.siteUrl+c+i;var f=p.default.siteUrl+p.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:o,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:""}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:o,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:o,alternateName:p.default.siteTitleAlt?p.default.siteTitleAlt:"",headline:o,image:{"@type":"ImageObject",url:i},description:a}]),s.default.createElement(d.default,null,s.default.createElement("meta",{name:"description",content:a}),s.default.createElement("meta",{name:"image",content:i}),s.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),s.default.createElement("meta",{property:"og:url",content:r?l:f}),r?s.default.createElement("meta",{property:"og:type",content:"article"}):null,s.default.createElement("meta",{property:"og:title",content:o}),s.default.createElement("meta",{property:"og:description",content:a}),s.default.createElement("meta",{property:"og:image",content:i}),s.default.createElement("meta",{property:"fb:app_id",content:p.default.siteFBAppID?p.default.siteFBAppID:""}),s.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.default.createElement("meta",{name:"twitter:creator",content:p.default.userTwitter?p.default.userTwitter:""}),s.default.createElement("meta",{name:"twitter:title",content:o}),s.default.createElement("meta",{name:"twitter:description",content:a}),s.default.createElement("meta",{name:"twitter:image",content:i}))}}]),t}(u.Component);t.default=m,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/ruben/Git/gatsby-advanced-starter/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/ruben/Git/gatsby-advanced-starter/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/ruben/Git/gatsby-advanced-starter/node_modules/babel-plugin-lodash/lib/index.js","/home/ruben/Git/gatsby-advanced-starter/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/ruben/Git/gatsby-advanced-starter/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/ruben/Git/gatsby-advanced-starter/node_modules/babel-preset-env/lib/index.js","/home/ruben/Git/gatsby-advanced-starter/node_modules/babel-preset-stage-0/lib/index.js","/home/ruben/Git/gatsby-advanced-starter/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.jsx':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/react.js"),s=r(u),c=n("./node_modules/react-helmet/lib/Helmet.js"),d=r(c),f=n("./src/components/PostListing/PostListing.jsx"),p=r(f),m=n("./src/components/SEO/SEO.jsx"),b=r(m),y=n("./data/SiteConfig.js"),g=r(y),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.data.allMarkdownRemark.edges;return s.default.createElement("div",{className:"index-container"},s.default.createElement(d.default,{title:g.default.siteTitle}),s.default.createElement(b.default,{postEdges:e}),s.default.createElement(p.default,{postEdges:e}))}}]),t}(s.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=page-component---src-pages-index-jsx-28d4bf7ec835b9777840.js.map