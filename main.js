//ORIGINAL CODE I WROTE 



// function addingSong(){

  
      
//     let songName = document.getElementById("nameOfSong").value ;
//      let artist = document.getElementById("artist").value 
//     let songLength = document.getElementById("lengthOfSong").value ;
//     let songUrl = document.getElementById("urlOfSong").value ;
   
  

// if(songName === ""){
//     alert("Invalid Enter Name of Song")
//     return;
// }

// if(songLength === ""){
// alert("Invalid Enter Length")
// return;

// }

// if(songUrl === ""){
// alert("Invalid Enter Youtube Url")
// return;

// }

// if(!songUrl.includes("youtube.com") && !songUrl.includes("youtu.be")) {
//     alert("Enter youtube.com / youtu.be Url ")
// return;
// }

// let tbody = document.getElementById("tableOfSongs");


// let songs = JSON.parse(localStorage.getItem("songs")) || []
// tbody.innerHTML += `

// <tr>
// <td>${songName}</td>
// <td>${artist}</td>
// <td style = "color : ${Number(songLength.split(":")[0]) >= 5 ? 'orange' : ''}">${songLength} </td>
// <td> <a href="${songUrl}" target="_blank">To Listen the song</a></td>
// <td><button onclick="removeSong(${songs.length})">Delete</button></td>



// </tr>
// `; 




// songs.push({Name: songName, Length: songLength, Url: songUrl, Artist: artist})


// let countOfSongs = document.getElementById("countDisplayOfSongs")
// let lengthOfAllSongs = document.getElementById("lengthOfAllSongs")


// let sum = songs.reduce((total, song) => {
//     let [minutes, seconds] = song.Length.split(":")
//     return total + Number(minutes) * 60 + Number(seconds)
// }, 0)

// let totalMin = Math.floor(sum / 60)
// let totalSec = sum % 60



// let avg = sum / songs.length
// countOfSongs.textContent = "Current Songs: " + songs.length
// lengthOfAllSongs.textContent =  "Length Of All Songs : " + totalMin + ":" + String(totalSec).padStart(2, "0")

// localStorage.setItem("songs",JSON.stringify(songs));

// }

// function loadSongs(){


// let tbody = document.getElementById("tableOfSongs");
// let songs = JSON.parse(localStorage.getItem("songs")) || []
// let lengthOfAllSongs = document.getElementById("lengthOfAllSongs")

// tbody.innerHTML = ""
// songs.forEach((song, index) => {

// tbody.innerHTML += `
// <tr>
// <td>${song.Name}</td>
// <td>${song.Artist}</td>
// <td style = "color : ${Number(song.Length.split(":")[0]) >= 5 ? 'orange' : ''}">${song.Length} </td>
// <td> <a href="${song.Url}" target="_blank">To Listen the song</a></td>
// <td><button onclick="removeSong(${index})">Delete</button></td>

// </tr>
// `; 

// })


// let countOfSongs = document.getElementById("countDisplayOfSongs")

// let sum = songs.reduce((total, song) => {
//     let [minutes, seconds] = song.Length.split(":")
//     return total + Number(minutes) * 60 + Number(seconds)
// }, 0)

// let totalMin = Math.floor(sum / 60)
// let totalSec = sum % 60



// let avg = sum / songs.length
// countOfSongs.textContent = "Current Songs: " + songs.length
// lengthOfAllSongs.textContent = "Length Of All Songs : " + totalMin + ":" + String(totalSec).padStart(2, "0")
// }

// function removeSong(index){
//     let songs = JSON.parse(localStorage.getItem("songs")) || []
//     songs.splice(index, 1)
//     localStorage.setItem("songs", JSON.stringify(songs))
//     loadSongs()
// }


// loadSongs()


















// //EXTRA

// function getYoutubeId(url){
//     if(url.includes("youtu.be/")){
//         return url.split("youtu.be/")[1].split("?")[0]
//     }
//     if(url.includes("watch?v=")){
//         return url.split("watch?v=")[1].split("&")[0]
//     }
//     return ""
// }

// function formatSongTime(input){

//     let value = input.value.replace(/\D/g, "");

//     value = value.substring(0,4);

//     if(value.length >= 2){

//         let minutes = value.substring(0, value.length - 2);
//         let seconds = value.substring(value.length - 2);

//         input.value = minutes + ":" + seconds;
//     }
//     else{
//         input.value = value;
//     }
// }


// async function getChannelImage(videoId){

//     let API_KEY = "PUT_YOUR_NEW_API_KEY_HERE";

//     try {
//         let videoResponse = await fetch(
//             `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`
//         );

//         let videoData = await videoResponse.json();

//         if(!videoData.items || videoData.items.length === 0){
//             return "https://ui-avatars.com/api/?name=YT&background=ff3250&color=fff&bold=true";
//         }

//         let channelId = videoData.items[0].snippet.channelId;

//         let channelResponse = await fetch(
//             `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${API_KEY}&part=snippet`
//         );

//         let channelData = await channelResponse.json();

//         if(!channelData.items || channelData.items.length === 0){
//             return "https://ui-avatars.com/api/?name=YT&background=ff3250&color=fff&bold=true";
//         }

//         return channelData.items[0].snippet.thumbnails.default.url;
//     }
//     catch(error){
//         return "https://ui-avatars.com/api/?name=YT&background=ff3250&color=fff&bold=true";
//     }
// }





// async function addingSong(){



//     let songName = document.getElementById("nameOfSong").value ;
//      let artist = document.getElementById("artist").value 
//     let songLength = document.getElementById("lengthOfSong").value ;
//     let songUrl = document.getElementById("urlOfSong").value ;
   
  

// if(songName === ""){
//     alert("Invalid Enter Name of Song")
//     return;
// }

// if(songLength === ""){
// alert("Invalid Enter Length")
// return;

// }

// let timePattern = /^[0-9]{1,2}:[0-5][0-9]$/;

// if(!timePattern.test(songLength)){
//     alert("Length must be in MM:SS format")
//     return;
// }




// if(songUrl === ""){
// alert("Invalid Enter Youtube Url")
// return;

// }

// if(!songUrl.includes("youtube.com") && !songUrl.includes("youtu.be")) {
//     alert("Enter youtube.com / youtu.be Url ")
// return;
// }

// let tbody = document.getElementById("tableOfSongs");
// let songs = JSON.parse(localStorage.getItem("songs")) || [];

// let videoId = getYoutubeId(songUrl);
// let channelImage = await getChannelImage(videoId);

// //extra



// tbody.innerHTML += `
// <tr>
// <td 
// data-thumb="${videoId}" 
// data-url="${songUrl}"
// style="
// background:
// linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.18)),
// url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg');
// background-size: cover;
// background-position: center;
// ">
// ${songName}
// </td>

// <td> 
// <img src="${channelImage}">
// ${artist}
// </td>

// <td>${songLength}</td>

// <td>
// <a href="${songUrl}" target="_blank">To Listen the song</a>
// <span>${songUrl}</span>
// </td>

// <td><button onclick="removeSong(${songs.length})">Delete</button></td>
// </tr>
// `;





// //origial
// // tbody.innerHTML += `

// // <tr>
// // <td>${songName}</td>
// // <td>${artist}</td>
// // <td style = "color : ${Number(songLength.split(":")[0]) >= 5 ? 'orange' : ''}">${songLength} </td>
// // <td> <a href="${songUrl}" target="_blank">To Listen the song</a></td>
// // <td><button onclick="removeSong(${songs.length})">Delete</button></td>



// // </tr>
// // `; 




// songs.push({
//     Name: songName,
//     Length: songLength,
//     Url: songUrl,
//     Artist: artist,
//     ChannelImage: channelImage
// })


// let countOfSongs = document.getElementById("countDisplayOfSongs")
// let lengthOfAllSongs = document.getElementById("lengthOfAllSongs")


// let sum = songs.reduce((total, song) => {
//     let [minutes, seconds] = song.Length.split(":")
//     return total + Number(minutes) * 60 + Number(seconds)
// }, 0)

// let totalMin = Math.floor(sum / 60)
// let totalSec = sum % 60



// let avg = sum / songs.length
// countOfSongs.textContent = "Current Songs: " + songs.length
// lengthOfAllSongs.textContent =  "Length Of All Songs : " + totalMin + ":" + String(totalSec).padStart(2, "0")

// localStorage.setItem("songs",JSON.stringify(songs));

// }

// function loadSongs(){


// let tbody = document.getElementById("tableOfSongs");
// let songs = JSON.parse(localStorage.getItem("songs")) || []
// let lengthOfAllSongs = document.getElementById("lengthOfAllSongs")

// tbody.innerHTML = ""
// songs.forEach((song, index) => {

// //EXTRA

// let videoId = getYoutubeId(song.Url)
// tbody.innerHTML += `
// <tr>
// <td 
// data-thumb="${videoId}" 
// data-url="${song.Url}"
// style="
// background:
// linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.18)),
// url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg');
// background-size: cover;
// background-position: center;
// ">
// ${song.Name}
// </td>

// <td>
// <img src="${song.ChannelImage}">
// ${song.Artist}
// </td>

// <td>${song.Length}</td>

// <td>
// <a href="${song.Url}" target="_blank">To Listen the song</a>
// <span>${song.Url}</span>
// </td>

// <td><button onclick="removeSong(${index})">Delete</button></td>
// </tr>
// `;



//     //ORIGINAL
// // tbody.innerHTML += `
// // <tr>
// // <td>${song.Name}</td>
// // <td>${song.Artist}</td>
// // <td style = "color : ${Number(song.Length.split(":")[0]) >= 5 ? 'orange' : ''}">${song.Length} </td>
// // <td> <a href="${song.Url}" target="_blank">To Listen the song</a></td>
// // <td><button onclick="removeSong(${index})">Delete</button></td>

// // </tr>
// // `; 

// })


// let countOfSongs = document.getElementById("countDisplayOfSongs")

// let sum = songs.reduce((total, song) => {
//     let [minutes, seconds] = song.Length.split(":")
//     return total + Number(minutes) * 60 + Number(seconds)
// }, 0)

// let totalMin = Math.floor(sum / 60)
// let totalSec = sum % 60



// let avg = sum / songs.length
// countOfSongs.textContent = "Current Songs: " + songs.length
// lengthOfAllSongs.textContent = "Length Of All Songs : " + totalMin + ":" + String(totalSec).padStart(2, "0")
// }

// function removeSong(index){
//     let songs = JSON.parse(localStorage.getItem("songs")) || []
//     songs.splice(index, 1)
//     localStorage.setItem("songs", JSON.stringify(songs))
//     loadSongs()
// }


// loadSongs()


let youtubeApiReady = false;
let progressInterval = null;

let script = document.createElement("script");
script.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(script);

function onYouTubeIframeAPIReady() {
    youtubeApiReady = true;
}

function getYoutubeId(url) {
    if (url.includes("youtu.be/")) {
        return url.split("youtu.be/")[1].split("?")[0];
    }

    if (url.includes("watch?v=")) {
        return url.split("watch?v=")[1].split("&")[0];
    }

    if (url.includes("/shorts/")) {
        return url.split("/shorts/")[1].split("?")[0];
    }

    return "";
}

function formatSongTime(input) {
    let value = input.value.replace(/\D/g, "");
    value = value.substring(0, 4);

    if (value.length >= 2) {
        let minutes = value.substring(0, value.length - 2);
        let seconds = value.substring(value.length - 2);
        input.value = minutes + ":" + seconds;
    } else {
        input.value = value;
    }
}

function formatVideoTime(seconds) {
    seconds = Math.floor(seconds);

    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;

    return minutes + ":" + String(secs).padStart(2, "0");
}

async function getChannelImage(videoId) {
    let API_KEY = "PUT_YOUR_NEW_API_KEY_HERE";

    try {
        let videoResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
        );

        let videoData = await videoResponse.json();

        if (!videoData.items || videoData.items.length === 0) {
            return "";
        }

        let channelId = videoData.items[0].snippet.channelId;

        let channelResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`
        );

        let channelData = await channelResponse.json();

        if (!channelData.items || channelData.items.length === 0) {
            return "";
        }

        return channelData.items[0].snippet.thumbnails.default.url;
    } catch (error) {
        console.log("YouTube API Error:", error);
        return "";
    }
}

function addingSong() {
    let songName = document.getElementById("nameOfSong").value;
    let artist = document.getElementById("artist").value;
    let songLength = document.getElementById("lengthOfSong").value;
    let songUrl = document.getElementById("urlOfSong").value;

    if (songName === "") {
        alert("Invalid Enter Name of Song");
        return;
    }

    if (artist === "") {
        alert("Invalid Enter Artist Name");
        return;
    }

    if (songLength === "") {
        alert("Invalid Enter Length");
        return;
    }

    let timePattern = /^[0-9]{1,2}:[0-5][0-9]$/;

    if (!timePattern.test(songLength)) {
        alert("Length must be in MM:SS format");
        return;
    }

    if (songUrl === "") {
        alert("Invalid Enter Youtube Url");
        return;
    }

    if (!songUrl.includes("youtube.com") && !songUrl.includes("youtu.be")) {
        alert("Enter youtube.com / youtu.be Url");
        return;
    }

    let videoId = getYoutubeId(songUrl);

    if (videoId === "") {
        alert("Invalid YouTube URL");
        return;
    }

    let songs = JSON.parse(localStorage.getItem("songs")) || [];

    let defaultChannelImage =
        "https://ui-avatars.com/api/?name=" +
        encodeURIComponent(artist) +
        "&background=ff3250&color=fff&bold=true";

    songs.push({
        Name: songName,
        Artist: artist,
        Length: songLength,
        Url: songUrl,
        VideoId: videoId,
        ChannelImage: defaultChannelImage
    });

    localStorage.setItem("songs", JSON.stringify(songs));

    loadSongs();
    clearForm();

    let songIndex = songs.length - 1;

    getChannelImage(videoId).then(realChannelImage => {
        if (realChannelImage !== "") {
            let updatedSongs = JSON.parse(localStorage.getItem("songs")) || [];

            if (updatedSongs[songIndex]) {
                updatedSongs[songIndex].ChannelImage = realChannelImage;
                localStorage.setItem("songs", JSON.stringify(updatedSongs));
                loadSongs();
            }
        }
    });
}

function loadSongs() {
    let tbody = document.getElementById("tableOfSongs");
    let songs = JSON.parse(localStorage.getItem("songs")) || [];

    tbody.innerHTML = "";

    songs.forEach((song, index) => {
        let videoId = song.VideoId || getYoutubeId(song.Url);

        let channelImage =
            song.ChannelImage ||
            "https://ui-avatars.com/api/?name=YT&background=ff3250&color=fff&bold=true";

        tbody.innerHTML += `
<tr style="--video-progress: 0%;">
<td 
data-title="${song.Name}"
data-thumb="${videoId}" 
data-url="${song.Url}"
onclick="playVideo(this, '${videoId}')"
style="
cursor:pointer;
background:
linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.18)),
url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg');
background-size: cover;
background-position: center;
">
${song.Name}
</td>

<td>
<img src="${channelImage}">
${song.Artist}
</td>

<td>${song.Length}</td>

<td>
<a href="${song.Url}" target="_blank">To Listen the song</a>
<span>${song.Url}</span>
</td>

<td>
<button onclick="removeSong(${index})">Delete</button>
</td>
</tr>
`;
    });

    updateStats();
}

function playVideo(element, videoId) {
    if (!youtubeApiReady) {
        alert("YouTube player is still loading, try again in a second");
        return;
    }

    clearInterval(progressInterval);

    let songName = element.dataset.title;
    let row = element.parentElement;
    let artistBox = row.querySelector("td:nth-child(2)");

    let oldTimeBox = document.getElementById(`time-${videoId}`);
    if (oldTimeBox) {
        oldTimeBox.remove();
    }

    artistBox.innerHTML += `
<span id="time-${videoId}">0:00 / 0:00</span>
`;

    element.innerHTML = `
<div id="player-${videoId}" style="width:100%; height:100%;"></div>
`;

    let player = new YT.Player(`player-${videoId}`, {
        videoId: videoId,
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 1,
            controls: 1,
            rel: 0
        },
        events: {
            onStateChange: function(event) {
                if (event.data === YT.PlayerState.PLAYING) {
                    clearInterval(progressInterval);

                    progressInterval = setInterval(() => {
                        let current = player.getCurrentTime();
                        let duration = player.getDuration();

                        if (duration > 0) {
                            let percent = (current / duration) * 100;

                            row.style.setProperty("--video-progress", percent + "%");

                            let timeBox = document.getElementById(`time-${videoId}`);

                            if (timeBox) {
                                timeBox.textContent =
                                    formatVideoTime(current) + " / " + formatVideoTime(duration);
                            }
                        }
                    }, 500);
                }

                if (
                    event.data === YT.PlayerState.PAUSED ||
                    event.data === YT.PlayerState.ENDED
                ) {
                    clearInterval(progressInterval);

                    let timeBox = document.getElementById(`time-${videoId}`);
                    if (timeBox) {
                        timeBox.remove();
                    }

                    element.innerHTML = songName;

                    element.style.background = `
linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.18)),
url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg')
`;

                    element.style.backgroundSize = "cover";
                    element.style.backgroundPosition = "center";

                    row.style.setProperty("--video-progress", "0%");
                }
            }
        }
    });
}

function updateStats() {
    let songs = JSON.parse(localStorage.getItem("songs")) || [];

    let countOfSongs = document.getElementById("countDisplayOfSongs");
    let lengthOfAllSongs = document.getElementById("lengthOfAllSongs");

    let sum = songs.reduce((total, song) => {
        let [minutes, seconds] = song.Length.split(":");
        return total + Number(minutes) * 60 + Number(seconds);
    }, 0);

    let totalMin = Math.floor(sum / 60);
    let totalSec = sum % 60;

    countOfSongs.textContent = "Current Songs: " + songs.length;
    lengthOfAllSongs.textContent =
        "Length Of All Songs : " +
        totalMin +
        ":" +
        String(totalSec).padStart(2, "0");
}

function removeSong(index) {
    let songs = JSON.parse(localStorage.getItem("songs")) || [];

    songs.splice(index, 1);

    localStorage.setItem("songs", JSON.stringify(songs));

    loadSongs();
}

function clearForm() {
    document.getElementById("nameOfSong").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("lengthOfSong").value = "";
    document.getElementById("urlOfSong").value = "";
}

loadSongs();