$(function(){
  var courses = new Vue({
    el: '#courses',
    data: {
      departure: '高円寺',
      arrive: '東京',
      ResultSet: {}
    },
    methods: {
      search: function(){
        var self = this;
        var url = config.ekispert.url + '/search/course/extreme';
        $.getJSON(url, {
          key: config.ekispert.key,
          viaList: [this.departure, this.arrive].join(':')
        }, function(res){
          self.ResultSet = res.ResultSet;
        });
      }
    }
  });
});
