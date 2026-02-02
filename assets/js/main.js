document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.game-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });

         card.addEventListener('click', function(e) {
            if (!e.target.closest('.play-button')) {
                const btn = this.querySelector('.play-button');
                if (btn) btn.click();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === '1') window.location.href = 'games/codebreaker/index.html';
        if (e.key === '2') window.location.href = 'games/numberguess/index.html';
    });
});
