document.addEventListener('DOMContentLoaded', function () {
    const backToBlogLink = document.querySelector('.back-to-blog');
    if (backToBlogLink) {
        backToBlogLink.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = '1-index.html';
        });
    }
});
