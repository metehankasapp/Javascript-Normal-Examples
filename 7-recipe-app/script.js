$(document).ready(function () {


    $('#searchForm').on('submit', function (e) {
        let searchText = $('#searchText').val();
        getFoods(searchText);
        e.preventDefault();
    });

});

// https://api.edamam.com/search?q=chicken&app_id=99d83790&app_key=7d31d999012c641be7d56434454050ec&from=0&to=3&calories=591-722&health=alcohol-free

// 'https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=99d83790&app_key=7d31d999012c641be7d56434454050ec'



function getFoods(searchText) {



    axios.get(`https://api.edamam.com/search?q=${searchText}&app_id=99d83790&app_key=7d31d999012c641be7d56434454050ec&from=0&to=100`)
        .then(function (response) {
            // handle success

            let recipes = response.data.hits;
            let output = "";
            

            $.each(recipes, (index, food) => {

                let calories = food.recipe.calories;
                let caloriesFull = calories.toFixed(0);
                output += `
            <div class="col-md-3 col-12 d-flex flex-column " style="height:30rem">
                    <div class="food-main bg-secondary p-3">
                        <div class="img "><img src="${food.recipe.image}" alt="" class="w-100"></div>
                        <div class="food-text">
                            <p>${caloriesFull} calories</p>
                            <h3><a href="#" style="text-decoration: none; color:white">${food.recipe.label}</a></h3>
                        </div>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${index}">
                            Look at the recipe
                        </button>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">${food.recipe.label}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    
                  </div>
                </div>
                `

                
            });
            
            $('.food-container').html(output);

            console.log(response.data.hits);


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });



}


function getSelectedMovie() {
    sessionStorage.setItem('foodId', id);
    window.location = "singleRecipe.html";
    return false;
}


function getFood() {

    let foodId = sessionStorage.getItem('foodId');
    console.log(foodId, 'asd');

    axios.get(`https://api.edamam.com/search?q=$&app_id=99d83790&app_key=7d31d999012c641be7d56434454050ec&from=0&to=100`)

        .then(function (response) {
            // handle success
            console.log(response);

            let food = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

getFood();


