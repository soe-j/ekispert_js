$(function(){
  // var ekispertConfig =

  var courses = new Vue({
    el: '#courses',
    data: {
      departure: '高円寺',
      arrive: '東京'
    },
    methods: {
      search: function(){
        console.log('検索');
      }
    }
  });
});
