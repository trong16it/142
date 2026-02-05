// Thay đổi nội dung búc thư ở đây
var letterContent = "Hé lô Mỹ Ngân, là anh bò húi đây. Dù rất muốn cùng em đón valentine nhưng bản thân anh hiện tại đang gặp rất nhiều vấn đề trong gia đình và từ chính trong suy nghĩ của anh, anh hiện tại k phải là 1 người mà em biết nữa, anh hèn nhát lắm, k dám hứa có thể cho em cuộc sống sung túc nữa, hmmm anh đau lắm, mọi thứ tồi tệ nhất cứ dồn hết vào anh, tạm biệt nhé, sau này anh NHẤT ĐỊNH sẽ quay lại tìm em, sẽ sớm thôi, hi vọng lúc đó em vẫn 1 mình. Cùng anh cố gắng nhé."

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})