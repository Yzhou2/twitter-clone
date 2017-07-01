$(document).ready(function(){
   $('.tweet-compose').on('click',function() {
      $('.tweet-compose').animate({ height: "10em" }, 500);
      $('#tweet-controls').css('display','inline-block');
    });
      var maxLength = 140;
      $('textarea').keyup(function(){
          var length = $(this).val().length;
          var remaining = maxLength - length;
        $('#char-count').text(remaining);
        if (remaining <= 10) {
          $("#char-count").css("color", "red");
        }
        else {
          $("#char-count").css("color", "black");
        }
        if (remaining <= 0) {
          $(".button").prop("disabled", true);
        }
        else {
              $(".button").prop("disabled", false);

        }

      });

      $('button').on('click',function() {
        var content = $('textarea').val();
            var template = '<div class="tweet">'+
  						'<div class="content">'+
  							'<img class="avatar" src="img/damenleeturks.jpg" />'+
  							'<strong class="fullname">My BFF</strong>'+
  							'<span class="username">@mybff</span>'+


  							'<p class="tweet-text">Today is an amazing day.</p>'+


  							'<div class="tweet-actions">'+
  								'<ul>'+
  									'<li><span class="icon action-reply"></span> Reply</li>'+
  									'<li><span class="icon action-retweet"></span> Retweet</li>'+
  									'<li><span class="icon action-favorite"></span> Favorite</li>'+
  									'<li><span class="icon action-more"></span> More</li>'+
  								'</ul>'+
  							'</div>'+


  							'<div class="stats">'+
  								'<div class="retweets">'+
  									'<p class="num-retweets">30</p>'+
  									'<p>RETWEETS</p>'+
  								'</div>'+
  								'<div class="favorites">'+
  									'<p class="num-favorites">6</p>'+
  									'<p>FAVORITES</p>'+
  								'</div>'+
  								'<div class="users-interact">'+
  									'<div>'+


  										'<img src="img/alagoon.jpg" />'+
  										'<img src="img/vklimenko.jpg" />'+
  									'</div>'+
  								'</div>'+


  								'<div class="time">1:04 PM - 19 Sep 13</div>'+
  							'</div>'+
  							'<div class="reply">'+
  								'<img class="avatar" src="img/alagoon.jpg" />'+
  								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'+
  							'</div>'+
  						'</div>'+
  					'</div>'+

        $('#stream').prepend(template);

      })


})
