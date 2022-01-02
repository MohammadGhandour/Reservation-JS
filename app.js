const body = document.body;
const start = document.getElementById('start_date');
const end = document.getElementById('end_date');
const today = new Date().toISOString().split('T')[0];
let nightPrice = document.getElementById('nightPrice').innerText;
let totalPrice = document.getElementById('total');

start.value = today;
start.min = today;

const tomorrowDate = () => {
    let day = new Date(today);
    day.setDate(day.getDate() + 1);
    let tomorrow = day.toISOString().split('T')[0];
    end.value = tomorrow;
    end.min = tomorrow;
}

tomorrowDate();

start.addEventListener('change', (e) =>{
    let day = new Date(e.target.value);
    day.setDate(day.getDate() + 1);
    let tomorrow = day.toISOString().split('T')[0];
    end.value = tomorrow;
    end.min = tomorrow;
})

const bookingTotal = () =>{
    let date1 = new Date(start.value);
    let date2 = new Date(end.value);
    let totalMs = Math.abs(date2 - date1);
    let totalDayDiff = Math.ceil(totalMs / 86400000);
    let total = totalDayDiff * nightPrice;
    console.log(totalDayDiff);
    totalPrice.innerText = total;
}

start.addEventListener('change', () => bookingTotal());
end.addEventListener('change', () => bookingTotal());
bookingTotal();