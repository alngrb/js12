"use strict"

document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        let p = this.querySelector('p');
        let h4 = this.querySelector('.item-icon');
        if (this.classList.contains('active')) {
            p.style.height = p.scrollHeight + 'px';
        } else {
            p.style.height = '0';
        }
    });
});


