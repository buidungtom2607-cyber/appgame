let answer = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkNumber() {
    let number = Number(
        document.getElementById("number").value
    );

    if (number < 1 || number > 100 || !Number.isInteger(number)) {
        document.getElementById("result").innerText =
            "Hãy nhập số nguyên từ 1 đến 100!";
        return;
    }

    count++;

    if (number > answer) {
        document.getElementById("result").innerText =
            "Số bạn đoán quá lớn!";
    } else if (number < answer) {
        document.getElementById("result").innerText =
            "Số bạn đoán quá nhỏ!";
    } else {
        document.getElementById("result").innerText =
            "🎉 Chúc mừng! Bạn đã đoán đúng!";
    }

    document.getElementById("count").innerText = count;
}

function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    count = 0;

    document.getElementById("number").value = "";
    document.getElementById("count").innerText = 0;
    document.getElementById("result").innerText =
        "Chúc bạn may mắn!";
}