const button = document.getElementById('user_search');
const api_key = "**********************";
button.addEventListener('click', (ev) => {
    var input = document.getElementById('user_name').value;
    console.log(input)
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    fetch("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + input + "?api_key="+api_key, requestOptions)
                .then(response=> response.json())
                .then(result => result.id)
                .then(name => {fetch('https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + name +'?api_key='+api_key, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error=> console.log('error', error));
                })
        .catch(error => console.log('error', error));
})
