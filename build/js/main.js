function dot_num() {
    return 3;
}

function slider_position() {
    for (var i = 0; i < dot_num(); i++) {
        if (document.getElementById("dot__" + i).className == "dot__dot dot__dot_active") {
            return i;
        }
    }
}

function switch_to_prev() {
    pos = slider_position() - 1;
    if (pos < 0)
        pos = dot_num() - 1;

    switch_to(pos);
}

function switch_to_next() {
    pos = slider_position() + 1;
    if (pos > (dot_num() - 1))
        pos = 0;

    switch_to(pos);
}

function switch_to(num) {
    for (var i = 0; i < dot_num(); i++)
        document.getElementById("dot__" + i).className = "dot__dot";

    document.getElementById("dot__" + num).className = "dot__dot dot__dot_active";
    content = document.getElementsByClassName("standboard__slide");

    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    content[num].style.display = "block";
}

switch_to(0);
//# sourceMappingURL=../maps/main.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRvdF9udW0oKXtcclxuXHRyZXR1cm4gMztcclxufVxyXG5cclxuZnVuY3Rpb24gc2xpZGVyX3Bvc2l0aW9uKCkge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkb3RfbnVtKCk7IGkrKyl7XHJcblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdF9fXCIgKyBpKS5jbGFzc05hbWUgPT0gXCJkb3RfX2RvdCBkb3RfX2RvdF9hY3RpdmVcIil7XHJcblx0XHRcdHJldHVybiBpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoX3RvX3ByZXYoKSB7XHJcblx0cG9zID0gc2xpZGVyX3Bvc2l0aW9uKCkgLSAxO1xyXG5cdGlmKHBvcyA8IDApIFxyXG5cdFx0cG9zID0gZG90X251bSgpIC0gMTtcclxuXHRcclxuXHRzd2l0Y2hfdG8ocG9zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoX3RvX25leHQoKSB7XHJcblx0cG9zID0gc2xpZGVyX3Bvc2l0aW9uKCkgKyAxO1xyXG5cdGlmKHBvcyA+IChkb3RfbnVtKCkgLSAxKSkgXHJcblx0XHRwb3MgPSAwO1xyXG5cclxuXHRzd2l0Y2hfdG8ocG9zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoX3RvKG51bSkge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkb3RfbnVtKCk7IGkrKylcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG90X19cIiArIGkpLmNsYXNzTmFtZSA9IFwiZG90X19kb3RcIjtcdFxyXG5cclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvdF9fXCIgKyBudW0pLmNsYXNzTmFtZSA9IFwiZG90X19kb3QgZG90X19kb3RfYWN0aXZlXCI7XHJcblx0Y29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdGFuZGJvYXJkX19zbGlkZVwiKTtcclxuXHRcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9XHJcblxyXG5cdGNvbnRlbnRbbnVtXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG5zd2l0Y2hfdG8oMCk7Il0sImZpbGUiOiIuLi9qcy9tYWluLmpzIn0=
