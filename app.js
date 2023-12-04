let ans = Math.floor(Math.random() * 1000) + 1;
let check = document.querySelector(".check");
let reset = document.querySelector(".reset");

let h4 = document.querySelector("h4");
let h5 = document.querySelector("h5");
let h6 = document.querySelector("h6");
let vidstream;
let arr = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
h5.textContent = `${arr[0]}  ${arr[1]}  ${arr[2]}  ${arr[3]}  ${arr[4]}  ${arr[5]} ${arr[6]}  ${arr[7]}  ${arr[8]}  ${arr[9]} `;
h6.textContent = "";
h6.style.background = "none";

let guessed;
count = 10;
let index = 0;
function dummy() {
    shake.classList.add("shake");
    setTimeout(() => {
        shake.classList.remove("shake");
    }, 1500);
}
check.addEventListener("click", function (e) {
    guessed = document.querySelector(".input").value;
    document.querySelector(".input").value = "";
    if (isNaN(guessed)) {
        dummy();
        return;
    }

    guessed = +guessed;

    if (guessed <= 0 || guessed >= 1001) {
        dummy();
        return;
    }
    arr.splice(index, 1, guessed);
    index++;
    if (guessed == ans) {
        h6.style.background = "";
        index = 0;
        h6.textContent = "";
        h6.textContent = "WOW😮 what a guess 🎉";
        ans = Math.floor(Math.random() * 1000) + 1;
        ddd();
        setTimeout(tak, 2000);
        setTimeout(stop, 3000);
    } else if (guessed > ans) {
        h6.style.background = "";
        h6.textContent = "Guessed number is high.....📈";
        count--;
    } else if (guessed < ans) {
        h6.style.background = "";
        h6.textContent = "Guessed number is low.....📉";
        count--;
    }
    if (count == 0) {
        h6.style.background = "";
        count = 0;
        arr = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
        h6.textContent = "You failed ☹ ---- Ans is : " + ans;
        ans = Math.floor(Math.random() * 1000) + 1;
        count = 10;
        arr = temp_arr;
    }

    h4.textContent = "Changes left : " + count;
    if (count == 1) h4.textContent = "Chance left : " + count;
    h5.textContent = `${arr[0]}  ${arr[1]}  ${arr[2]}  ${arr[3]}  ${arr[4]}  ${arr[5]} ${arr[6]}  ${arr[7]}  ${arr[8]}  ${arr[9]} `;
});

let shake = document.querySelector(".input");
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        guessed = document.querySelector(".input").value;
        document.querySelector(".input").value = "";
        if (isNaN(guessed)) {
            dummy();
            return;
        }

        guessed = +guessed;

        if (guessed <= 0 || guessed >= 1001) {
            dummy();
            return;
        }

        arr.splice(index, 1, guessed);
        index++;

        if (guessed == ans) {
            arr = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
            h6.style.background = "";
            index = 0;
            h6.textContent = "";
            count = 10;
            h6.textContent = "WOW😮 what a guess 🎉";
            ans = Math.floor(Math.random() * 1000) + 1;
            ddd();
            setTimeout(tak, 2000);
            setTimeout(stop, 3000);
        } else if (guessed > ans) {
            h6.style.background = "";
            h6.textContent = "Guessed number is high.....📈";
            count--;
        } else if (guessed < ans) {
            h6.style.background = "";
            h6.textContent = "Guessed number is low.....📉";
            count--;
        }
        if (count == 0) {
            h6.style.background = "";
            h6.textContent = "You failed ☹ ---- Ans is : " + ans;
            ans = Math.floor(Math.random() * 1000) + 1;
            count = 10;
            arr = temp_arr;
            index = 0;
        }

        h4.textContent = "Chances left : " + count;
        if (count == 1) h4.textContent = "Chance left : " + count;
        h5.textContent = `${arr[0]}  ${arr[1]}  ${arr[2]}  ${arr[3]}  ${arr[4]}  ${arr[5]} ${arr[6]}  ${arr[7]}  ${arr[8]}  ${arr[9]} `;
    }
});

reset.addEventListener("click", function () {
    arr = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
    count = 10;
    index = 0;
    h4.textContent = "Changes left : " + count;
    ans = Math.floor(Math.random() * 1000) + 1;
    h6.textContent = "";
    h6.style.background = "none";
    h5.textContent = "- - - - - - - - - -";
    document.body.style.background =
        "linear-gradient(to right,rgba(2, 222, 2, 0.547),rgba(55, 157, 204, 0.4))";
});

function ddd() {
    const im = document.querySelector("img");

    const video = document.querySelector("video");
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        vidstream = stream;
    });
    const bg = document.querySelector(".div");
    const canvas = document.getElementById("canvas");
}

function stop() {
    vidstream.getTracks().forEach((t) => t.stop());
}

function tak() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    // canvas.style.display = "block";
    // const image = document.createElement("img");
    document.body.style.backgroundImage = `url(${canvas.toDataURL(
        "image/png"
    )})`;
    document.body.style.backgroundSize = "cover";
    // document.body.appendChild(image);
}
