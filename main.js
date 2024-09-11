document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const sections = document.querySelectorAll('main section');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        
        sections.forEach(section => {
            const textContent = section.querySelector('p').textContent.toLowerCase();
            
            if (textContent.includes(query)) {
                section.classList.remove('hidden');
                section.classList.add('highlight');
            } else {
                section.classList.add('hidden');
                section.classList.remove('highlight');
            }
        });
    });
});
