$.ajax({
  url: `https://ziyaad-cors.herokuapp.com/https://collectionapi.metmuseum.org/public/collection/v1/objects`,
  type: "GET",
  success: function (result) {
    console.log(result);
  },

  error: function (result, statut, error) {
    console.log("error ", result);
  },
}).then((response) => {
  $.each(response["objectIDs"].slice(1, 500), (i, item) => {
    $.ajax({
      url: `https://ziyaad-cors.herokuapp.com/https://collectionapi.metmuseum.org/public/collection/v1/objects/${item}`,
      type: "GET",
      beforeSend: function () {
        $("#loading-image").show();
      },
      success: function (result) {
        console.log("results ", result.primaryImage);
        if (result.primaryImage !== "") {
          $(
            `<div class="item">

              <img class="image-art" src="${result.primaryImage}" data-toggle="modal" data-target="#${result.objectID}">

            </div>
            <!-- Modal -->
              <div class="modal fade" id="${result.objectID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="${result.objectID}">${result.title}</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <ul style="list-style-type: none;">
                      <li><strong>Artist</strong> : ${result.artistDisplayName}</li>
                      <li><strong>Artist Bio</strong> : ${result.artistDisplayBio}</li>
                      <li><strong>Department</strong> : ${result.department}</li>
                      <li><strong>Period</strong> : ${result.period}</li>
                      <li><strong>Object</strong> : ${result.objectName}</li>
                      <li><strong>Date</strong> : ${result.objectDate}</li>
                      <li><strong>Country</strong> : ${result.country}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            `
          ).appendTo(".carousel-inner");
          $("#loading-image").hide();
        }
      },

      error: function (result, statut, error) {
        console.log("Did not retrieve");
      },
    });
  });
});
