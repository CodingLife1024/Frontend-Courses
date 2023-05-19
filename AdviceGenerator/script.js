$(document).ready(function() {
    $("#getAdviceButton").click(function() {
      $.ajax({
        url: "https://api.adviceslip.com/advice",
        dataType: "json",
        success: function(data) {
          var slip = data.slip;
          var adviceNumber = slip.id;
          var adviceText = slip.advice;
          $("#adviceNumber").text("ADVICE #" + adviceNumber);
          $("#adviceText").text('“' + adviceText + '”');
        },
        error: function() {
          $("#adviceNumber").text("");
          $("#adviceText").text("An error occurred while fetching advice.");
        }
      });
    });
    $.ajax({
      url: "https://api.adviceslip.com/advice",
      dataType: "json",
      success: function(data) {
        var slip = data.slip;
        var adviceNumber = slip.id;
        var adviceText = slip.advice;
        $("#adviceNumber").text("ADVICE #" + adviceNumber);
        $("#adviceText").text('“' + adviceText + '”');
      },
      error: function() {
        $("#adviceNumber").text("");
        $("#adviceText").text('“An error occurred while fetching advice.”');
      }
    });
  });