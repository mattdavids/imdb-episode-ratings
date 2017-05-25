let checkExist;
$(function() {
    updateRatings();
    $('body').on('change', function() {
        checkExist = setInterval(function() {
            if ($('a[itemprop="name"]').length > 0) {
                updateRatings();
                clearInterval(checkExist);
            }
        }, 1000);
    });
});

function updateRatings() {
    $('a[itemprop="name"]').each(function() {
        let currentA = $(this);
        if (currentA[0].href.includes('title')) {
            $.ajax({
                type: 'GET',
                url : currentA[0].href,
                global: false,
                success: function(response) {
                    currentA.after("<span>" + '    (★' + $(response).find('span[itemprop="ratingValue"]')[0].outerText + ')</span>');
                }
            });
        }
    });
}