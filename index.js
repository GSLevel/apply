var button = document.getElementById('menuBtn');
var closebutton = document.getElementById('closeMenuBtn');
var links = document.getElementById('links');
var reqs = document.getElementById('reqs');
var everything = document.getElementById('everything');
var ign = document.getElementById('ignInput');
var tag = document.getElementById('tagInput');
var shot = document.getElementById('shotInput');
var checkBtn = document.getElementById('check');
var submit = document.querySelector('.submit');
var sentMsg = document.getElementById('sentMsg');

function menuBtn() {
     links.style.display = "unset";
     closebutton.style.display = "unset";
     button.style.display = "none";
}

function closeBtn() {
    links.style.display = "none";
    closebutton.style.display = "none";
    button.style.display = "unset";
}

function check() {
   if(ign.value.trim() == "") {
      checkBtn.innerHTML = "type in your ign";
      setTimeout(function() {
          checkBtn.innerHTML = "Check";
      }, 2000);
   } else if(tag.value.trim() == "") {
      checkBtn.innerHTML = "type in your discord tag";
      setTimeout(function() {
        checkBtn.innerHTML = "Check";
    }, 2000);
   } else if(shot.value.trim() == "") {
      checkBtn.innerHTML = "type in the screenshot url of your stats";
      setTimeout(function() {
        checkBtn.innerHTML = "Check";
    }, 2000);
   } else {
       checkBtn.style.display = "none";
       submit.style.display = "unset";
   }

}

reqs.addEventListener("click", reqBtnClicked);
button.onclick = menuBtn;
closebutton.onclick = closeBtn;

function sendWebhook() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/754310970255474768/FM0ST5RF58HQCZSdFY_xsbJeC5B6q8BEKHqKxS8SRzBE8pjaVTi7KVvr1xYfpdgqsaXq");
    request.setRequestHeader('Content-type', 'application/json');

    var embed = {
        author: {
            name: "New Application!"
        },
        title: "Application:",
        description: `\n In Game Name: ${ign.value} \n Discord Tag: ${tag.value} \n Video Of CSS Making: ${shot.value}`,
        color: hexToDecimal("#00FFFF")
    }

    var params = {
        username: "CSSM Application Deliverer",
        avatar_url: "https://cdn.discordapp.com/attachments/754344984089723022/754345839962619916/CSSM_Logo_Transparent.png",
        embeds: [ embed ]
    }

    request.send(JSON.stringify(params));

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }
}

function msgSent() {
    everything.style.display = "none";
    sentMsg.style.display = "";
}

submit.addEventListener("click", msgSent)