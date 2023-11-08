function anchorScroll() {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
    
            const targetId = this.getAttribute('href').substring(1); // Убираем # из href
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

export default anchorScroll;