let arrow = document.querySelectorAll('.arrow'),
    section = document.querySelectorAll('.section'),
    sectionCont = document.querySelectorAll('.section-cont');

let flag0 = false, flag1 = false, flag2 = false, flag3 = false,
    flag4 = false, flag5 = false, flag6 = false;

function showDiv(i) {
    arrow[i].src = "Images/icon-arrow-down.png";
    section[i].style.borderBottomLeftRadius = "0px";
    section[i].style.borderBottomRightRadius = "0px";
    sectionCont[i].style.display = "block";
}

function hideDiv(i) {
    arrow[i].src = "Images/icon-arrow-right.png";
    section[i].style.borderRadius = "8px";
    sectionCont[i].style.display = "none";
}

arrow[0].addEventListener("click", ()=> {
    if (!flag0) {
        showDiv(0);
        flag0 = true;
    } else {
        hideDiv(0);
        flag0 = false;
    }
})

arrow[1].addEventListener("click", ()=> {
    if (!flag1) {
        showDiv(1);
        flag1 = true;
    } else {
        hideDiv(1);
        flag1 = false;
    }
})

arrow[2].addEventListener("click", ()=> {
    if (!flag2) {
        showDiv(2);
        flag2 = true;
    } else {
        hideDiv(2);
        flag2 = false;
    }
})

arrow[3].addEventListener("click", ()=> {
    if (!flag3) {
        showDiv(3);
        flag3 = true;
    } else {
        hideDiv(3);
        flag3 = false;
    }
})

arrow[4].addEventListener("click", ()=> {
    if (!flag4) {
        showDiv(4);
        flag4 = true;
    } else {
        hideDiv(4);
        flag4 = false;
    }
})

arrow[5].addEventListener("click", ()=> {
    if (!flag5) {
        showDiv(5);
        flag5 = true;
    } else {
        hideDiv(5);
        flag5 = false;
    }
})

arrow[6].addEventListener("click", ()=> {
    if (!flag6) {
        showDiv(6);
        flag6 = true;
    } else {
        hideDiv(6);
        flag6 = false;
    }
})