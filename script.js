<script>
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('[data-category]');
    const articles = document.querySelectorAll('.filterable-article');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const category = link.getAttribute('data-category');
            if (!category) return;

            // Highlight active navigation link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            if (link.classList.contains('nav-link')) {
                link.classList.add('active');
            }

            // Filter articles based on data-category
            articles.forEach(article => {
                const articleCategory = article.getAttribute('data-category');
                if (category === 'all' || articleCategory === category) {
                    article.style.display = '';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
});
</script>