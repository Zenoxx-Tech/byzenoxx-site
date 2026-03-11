function twitch(){
window.open("https://twitch.tv/byzenoxx")
}

function tiktok(){
window.open("https://tiktok.com/@byzenoxx")
}

async function checkLive(){
try{
let response = await fetch("https://api.twitch.tv/helix/streams?user_login=byzenoxx", {
headers:{
'Client-ID':'TON_CLIENT_ID',
'Authorization':'Bearer TON_ACCESS_TOKEN'
}
})
let data = await response.json()
if(data.data.length>0){
document.getElementById("live-status").innerText="🔴 LIVE"
}else{
document.getElementById("live-status").innerText="⚫ Offline"
}
}catch{
document.getElementById("live-status").innerText="⚫ Offline"
}
}

checkLive()
