var clientID = 'yopp4ygy7q5yxsdjh0dye5a6z7oxpq';
var myContentType = 'application/vnd.twitchtv.v5+json';
var twitchAPI = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&language=zh-tw';

$(document).ready(function() {
  $.ajax({
    url: twitchAPI,
    headers: {
      'Client-ID': clientID
    },
    type: 'GET',
    contentType: myContentType,
    success: function(data) {
      for (var x = 0; x < 20; x++) {
        var $content =
          `<div class="col">
              <a href=" ${data.streams[x].channel.url} "  style="text-decoration:none;">
              <div class='preview'>
                 <div id="placeholder">
                 <img src="${data.streams[x].preview.medium}" onload="this.style.opacity=1"></div>
              </div>
              <div class='btm'> 
                <div class="icon">
                  <img src="${data.streams[x].channel.logo}">
                </div>
                <div class='intro'>
                  <div class='channal_name'>${data.streams[x].channel.status}</div>
                  <div class='real_name'>${data.streams[x].channel.display_name}</div>
                </div>
              </div>
            </div>`;
        $(".row").append($content);
        $content = $();
      }
    },
    error: function(data) {
      console.log('error', data);
    }
  });
});