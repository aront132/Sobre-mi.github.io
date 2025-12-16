document.addEventListener('DOMContentLoaded', function() {
    
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
       
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');


            const filterValue = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'todos' || itemCategory.includes(filterValue)) {

                    item.classList.remove('d-none');
        
                    item.classList.add('fade-in');
               
                    setTimeout(() => item.classList.remove('fade-in'), 500);
                } else {
              
                    item.classList.add('d-none');
                }
            });
        });
    });
});