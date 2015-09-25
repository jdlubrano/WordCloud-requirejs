// Author: Joel Lubrano
// Test wordcloud through requirejs

requirejs.config({
  paths: {
    wordcloud: './wordcloud2'
  }
});

define(['wordcloud', 'require'], function(wordcloud, require) {
  console.log(wordcloud);
});
