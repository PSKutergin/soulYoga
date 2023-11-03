new WOW().init();

const form = () => {
    const mainForm = $('.application-form');
    const nameInp = mainForm.find('#name');
    const phoneInp = mainForm.find('#phone');
    const buttonForm = mainForm.find('.btn-form');
    const card = $('.application-good');
    const loader = $('.loader');
    const url = 'https://testologia.site/checkout';

    const validForm = (form) => {
        let count = 0;

        form.find('input').each(function () {
            $(this).removeClass('error')
            $(this).next().css('opacity', '0')

            if (!$(this).val()) {
                $(this).addClass('error')
                $(this).next().css('opacity', '1')
                count++
            };
        });

        return count
    };

    phoneInp.on('input', function () {
        this.value = this.value.replace(/[^0-9\+]/g, '');
    });

    buttonForm.on('click', () => {
        if (!validForm(mainForm)) {
            loader.css('display', 'flex');

            $.post(url, { name: nameInp.val(), phone: phoneInp.val() })
                .done(function (message) {
                    loader.hide();

                    if (message && message.hasOwnProperty('success') && message.success === 1) {
                        card.fadeIn('slow');

                        setTimeout(() => {
                            card.fadeOut('slow')
                        }, 5000);
                    } else {
                        alert('Возникла ошибка при оформлении заявки, позвоните нам пожалуйста!')
                    }
                });
            mainForm[0].reset()
        };
    });
};

form();