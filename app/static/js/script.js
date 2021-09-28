let ids = Array.from(Array(200).keys());

$.ajax({
  url: `https://collectionapi.metmuseum.org/public/collection/v1/objects`, //PHP file to execute
  type: "GET", //method used POST or GET
  success: function (result) {
    console.log(result);
  },

  error: function (result, statut, error) {
    console.log("error ", result);
  },
}).then((response) => {
  $.each(response["objectIDs"].slice(1, 500), (i, item) => {
    $.ajax({
      url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${item}`, //PHP file to execute
      type: "GET", //method used POST or GET
      success: function (result) {
        console.log(result);
        if (result.primaryImage !== "") {
          $(
            '<div class="item"><img src="' +
              result.primaryImage +
              '"><div class="carousel-caption"></div>   </div>'
          ).appendTo(".carousel-inner");
          $(
            '<li data-target="#carousel-example-generic" data-slide-to="' +
              item +
              '"></li>'
          ).appendTo(".carousel-indicators");
        }
      },

      error: function (result, statut, error) {
        console.log(result);
      },
    });
  });
});
