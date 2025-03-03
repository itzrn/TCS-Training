// this let compiler to enter when all the content of html and css get load
document.addEventListener("DOMContentLoaded", function(){
    //this function will run when all the document content got load


    const usernameInput = document.getElementById("username-input");
    const searchButton = document.getElementById("search");

    const statsContainer = document.querySelector(".stats-container");

    const easyProgreeCircle = document.querySelector(".easy-progress");
    const easyLabel = document.getElementById("easy-level");
    const mediumProgreeCircle = document.querySelector(".medium-progress");
    const mediumLabel = document.getElementById("medium-level");
    const hardProgreeCircle = document.querySelector(".hard-progress");
    const hardLabel = document.getElementById("hard-level");

    const cardStatsContainer = document.querySelector(".stats-card");

    
    async function fetchUserDetails(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try{
            searchButton.textContent = "Searching... ";
            searchButton.disabled=true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fetch the data!");
            }
    
            const data = await response.json();
    
            console.log("Logging data:", data);
            // console.log(typeof(data['easySolved']));
            updateProgress(data['easySolved'], data['totalEasy'], easyLabel, easyProgreeCircle);
            updateProgress(data['mediumSolved'], data['totalMedium'], mediumLabel, mediumProgreeCircle);
            updateProgress(data['hardSolved'], data['totalHard'], hardLabel, hardProgreeCircle);


            const cardsData = [
                {label: "Total Questions", value:data['totalQuestions']},
                {label: "Total Questions Solved", value:data['totalSolved']},
                {label: "Acceptance Rate", value:data['acceptanceRate']},
                {label: "Contribution Points", value:data['contributionPoints']},
                {label: "Ranking", value:data['ranking']},
                {label: "Reputation", value:data['reputation']},


            ];
            // console.log("card ka data:", cardsData);


            cardStatsContainer.innerHTML = cardsData.map(
                data=>{
                    return `
                        <div class="card">
                            <h4>${data.label}:</h4>
                            <p> ${data.value}</p>
                        </div>
                    `;
                }
            ).join("");


        }catch(error){
            statsContainer.innerHTML = "<p> No data Found </p>"
        }finally{
            searchButton.textContent = "Search";
            searchButton.disabled=false;
        }
    }

    // onpressing the search button the follwing will happen
    searchButton.addEventListener('click', function(){
        const username = usernameInput.value;
        // console.log("logging username:", username);
        if(validateUserName(username)){
            fetchUserDetails(username);
        }
    });

});


// return true or false based on regex
function validateUserName(username){
    if(username.trim() === ""){
        alert("Username should not be empty!");
        return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isMatching = regex.test(username);
    if(!isMatching) alert("Invalid username!");
    return isMatching;
}

function updateProgress(solved, tot, label, circle){
    const precent = (solved/tot)*100;
    circle.style.setProperty(`--progress-degree`, `${precent}%`);
    label.textContent = `${solved}/${tot}`;
}

