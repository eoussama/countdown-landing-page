window.addEventListener('load', () => {
    const
        spinner = document.querySelector('div.spinner'),
        DATE = new Date('05-29-2019 8:00'),
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
        if(spinner.style.display !== 'none') {
            spinner.style.opacity = '0';
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 1000);
        }

        let _date = new Date(DATE - new Date());

        if (_date <= 0) {
            let _time = document.getElementById('time');

            clearInterval(timer);
            document.querySelector('div.unites').style.opacity = '0';
            _time.textContent = "Time's up!";
            _time.style.color = 'var(--primary-color)';
            _time.style.fontSize = '2em';
        }
        else {
            days.val.textContent = Math.floor(_date / (24 * 60 * 60 * 1000));
            hours.val.textContent = Math.floor((_date % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            minutes.val.textContent = Math.floor(((_date % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000));
            seconds.val.textContent = Math.floor((((_date % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000);
        }
    }, 1000);
});
