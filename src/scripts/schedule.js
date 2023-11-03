const schedule = () => {
    const scheduleBtn = document.querySelector('.services-btn');
    const popup = document.querySelector('.popup');
    const slidesDay = popup.querySelectorAll('.schedule-slider-item');
    const columnsHeader = popup.querySelectorAll('.schedule-tbl-header > tr > th');
    const rowsBody = popup.querySelectorAll('.schedule-tbl-body > tr');

    let currentSlide = 0

    const slider = (numberSlide, slides, headerCols, bodyCols) => {
        slides.forEach((slide, index) => {
            if (index === numberSlide) {
                slide.style.display = 'block'
            } else {
                slide.style.display = 'none'
            };
        });

        headerCols.forEach((column, index) => {
            if (index === numberSlide + 1 || index === 0) {
                column.style.display = 'table-cell'
            } else {
                index === 1 ? column.style.display = 'none' : column.style.display = ''
            };
        });

        rowsBody.forEach((row) => {
            for (let i = 0; i < row.children.length; i++) {
                if (i === numberSlide + 1 || i === 0) {
                    row.children[i].style.display = 'table-cell'
                } else {
                    i === 1 ? row.children[i].style.display = 'none' : row.children[i].style.display = ''
                };
            }
        });

    };

    scheduleBtn.onclick = () => popup.classList.add('open');

    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-schedule') || e.target.closest('.popup-close')) {
            popup.classList.remove('open')
        };

        if (e.target.closest('.schedule-slider-arrow-left')) {
            currentSlide--
        } else if (e.target.closest('.schedule-slider-arrow-right')) {
            currentSlide++
        };

        if (currentSlide === slidesDay.length) {
            currentSlide = 0
        } else if (currentSlide < 0) {
            currentSlide = slidesDay.length - 1
        }

        slider(currentSlide, slidesDay, columnsHeader, rowsBody);
    });
};

schedule();