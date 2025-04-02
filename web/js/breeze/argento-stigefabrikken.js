(() => {
    'use strict';

    $(document).on('breeze:load', () => {
        $.async('.breeze-carousel .easycatalogimg', (el) => {
            $.onReveal(el, () => $(el).pagebuilderCarousel());
        });
    });

})();