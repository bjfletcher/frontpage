const attrs = (obj) => Object.keys(obj).map(k => `data-${k}="${obj[k]}"`).join(' ');

