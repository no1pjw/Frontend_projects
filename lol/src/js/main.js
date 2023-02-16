const button = document.getElementById('user_search');
const api_key = "RGAPI-e0e9241c-6d75-4cd4-b2e5-d0a0e900a0cd";
const Info_list = new Array(3);
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
  const userInfo = await postResponse_2.json();
  for(var i = 0; i < 3; i++){
    console.log(userInfo[i]);
    try{
      const win  = userInfo[i]['wins'];
      Info_list[i] = userInfo[i];
    }
    catch{
      Info_list[i] = 'unranked';
    }
    
  }
  console.log(Info_list);
}
