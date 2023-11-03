const slider = () => {
    const theachersSlider = new Splide('#slider1', {
        type: 'loop',
        perPage: 3,
        gap: '15px',
        speed: 1000,
        breakpoints: {
            1023: {
                perPage: 1,
            },
        }
    });

    theachersSlider.mount();
}

slider();