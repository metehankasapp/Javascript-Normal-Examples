


$(document).ready(function () {
    console.log('Ready');
});


function findCountry() {
    axios.get('https://api.covid19api.com/dayone/country/turkey')
        .then(function (response) {
            console.log(response);
            var covidData = response.data;
            var outlook = "";
            var count = 0;
            
            $.each(covidData, (index, count) => {
                todayDeath = Number(count.Deaths);
                
                var DateNormal = count.Date;
                DateNormal = DateNormal.slice(0, 10);
                outlook += `


                    <div class="cart-wrapper col-12 m-2 ">
                        <button class="card-header btn bg-danger w-100 text-light">
                            <p><span><i>Tarih</i></span> : ${DateNormal}</p>


                            <div class="m-1   card-main" id =${index}>
                                <p><span><i>Toplam Ölü</i></span> : ${count.Deaths}</p>
                                <p><span><i>Toplam İyileşen</i></span> : ${count.Recovered}</p>
                            </div>    


                         </button>

                        
                    </div>
            

                     `;

                     
                //console.log(count.Deaths,count.Recovered);
            });

            $('.container').html(outlook);
            $('.card-main').hide();
            function clickable(e){
                e.click(function(){
                   $(this.children[1]).slideToggle();
                    //console.log(`${this.parentElement.className} .card-main`);
                    //console.log(this.parentElement.className);
                    //console.log(this.innerText);
                });
            }

            clickable($('.card-header'));

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}






findCountry();