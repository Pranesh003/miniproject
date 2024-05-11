$(document).ready(function() {
  // Function to generate game cards
  function generateGameCards(games, target) {
      var gameCardsHtml = "";
      games.forEach(function(game) {
          gameCardsHtml += `
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title">${game.name}</h5>
                          <p class="card-text">${game.description}</p>
                          <a href="#" class="btn btn-primary">Play Now</a>
                      </div>
                  </div>
              </div>
          `;
      });
      $(target).html(gameCardsHtml);
  }

  // Simulating loading of featured games
  var featuredGames = [
      { name: "Featured Game 1", description: "Description of Featured Game 1" },
      { name: "Featured Game 2", description: "Description of Featured Game 2" },
      { name: "Featured Game 3", description: "Description of Featured Game 3" }
  ];
  generateGameCards(featuredGames, "#featuredGames");

  // Simulating loading of all games
  var allGames = [
      { name: "Game 1", description: "Description of Game 1" },
      { name: "Game 2", description: "Description of Game 2" },
      { name: "Game 3", description: "Description of Game 3" }
      // More games can be added here
  ];
  generateGameCards(allGames, "#allGames");
});
