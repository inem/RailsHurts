// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz({
          numberOfQuestions: 10,
          randomSortQuestions: true,
          randomSortAnswers: true,
          displayQuestionNumber: false,
          events: {
          	onCompleteQuiz: function (info) {
          		jQuery.ajax ({
          			url: 'ask_statistic/add_stats',
          			type: "POST",
          			data: JSON.stringify({stats: info.stat}),
          			dataType: "json",
          			contentType: "application/json; charset=utf-8",
          			success: function(){
          			}
          		});
          	}
          }
    });
});
