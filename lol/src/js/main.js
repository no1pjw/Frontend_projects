const button = document.getElementById('user_search');
const api_key = "***********************";
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
button.addEventListener('click', (ev) => {
    var input = document.getElementById('user_name').value;
    get_userInfo(input);
})
async function get_userInfo(input) {
  const postResponse = await fetch("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + input + "?api_key="+api_key, requestOptions);
  const post= await postResponse.json();
  const post_id = await post['id'];
  const postResponse_2 = await fetch('https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + post_id +'?api_key='+api_key, requestOptions);
  const post_2 = await postResponse_2.json();
  console.log(post_2[0]['wins']);
}
