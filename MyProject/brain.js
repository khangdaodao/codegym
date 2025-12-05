function add() {
    aim=prompt("Nhập mục tiêu của bạn :");
    time=Number(prompt("Nhập thời gian dự định sẽ hoàn thành mục tiêu (số ngày)  : (vd: 90)"));
    if (aim == null || time == null || isNaN(time)) {
        alert("Không hợp lệ ");
        return false;
    }

}