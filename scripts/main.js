window.addEventListener('load', () => {
    const
        DATE = new Date('05-29-2018 8:00'),
        days = {
            val: document.getElementById('val-day'),
            unt: document.getElementById('unt-day')
        },
        hours = {
            val: document.getElementById('val-hour'),
            unt: document.getElementById('unt-hour')
        },
        minutes = {
            val: document.getElementById('val-minute'),
            unt: document.getElementById('unt-minute')
        },
        seconds = {
            val: document.getElementById('val-second'),
            unt: document.getElementById('unt-second')
        };
    
    var
        timer = null;

    timer = setInterval(() => {
        let _date = new Date(DATE - new Date());

        if (_date <= 0) {
            let _time = document.getElementById('time');

            clearInterval(timer);
            _time.textContent = "Time's up!";
            _time.style.color = 'var(--primary-color)';
        }
        else {
            days.val.textContent = Math.floor(_date / (24 * 60 * 60 * 1000));
            hours.val.textContent = Math.floor((_date % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            minutes.val.textContent = Math.floor(((_date % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000));
            seconds.val.textContent = Math.floor((((_date % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000);
        }
    }, 1000);    
});
